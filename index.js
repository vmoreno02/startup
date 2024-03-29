const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const { PeerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.username, req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:username', async (req, res) => {
  const user = await DB.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// AddComment adds a comment to a page's list
apiRouter.post('/comments/add', async (req, res) => {
  const comments = await DB.getComments(req.body.page);
  if (comments) {
    const result = await DB.updateComments(req.body.page, req.body.comment, comments);
    if (result.modifiedCount > 0) {
      res.send();
      return;
    }
  }

  else {
    const result = await DB.addComments(req.body.page, req.body.comment);
    res.send();
    return;
  }

  res.status(404).send({ msg: 'comments not updated' });
});

// GetComments fetches the comments for a page
apiRouter.post('/comments/get', async (req, res) => {
  const comments = await DB.getComments(req.body.page);
  if (comments) {
    res.send(comments);
    return;
  }

  res.status(404).send({ msg: 'no comments yet' });
});

// AddFavorite adds a favorite to a user's favorites list
apiRouter.post('/favorites/add', async (req, res) => {
  const faves = await DB.getFavorites(req.body.username);
  if (faves) {
    const result = await DB.updateFavorites(req.body.username, req.body.favorite, faves);
    if (result.modifiedCount > 0) {
      res.send();
      return;
    }
  }

  else {
    const result = await DB.addFavorite(req.body.username, req.body.favorite);
    res.send();
    return;
  }
  res.status(404).send({ msg: 'faves not updated' });
});

// RemoveFavorites removes a favorite from a user's favorites list
apiRouter.post('/favorites/remove', async (req, res) => {
  const faves = await DB.getFavorites(req.body.username);
  if (faves) {
    const result = await DB.removeFavorite(req.body.username, req.body.favorite, faves);
    if (result.modifiedCount > 0) {
      res.send();
      return;
    }
  }

  res.status(404).send({ msg: 'faves not updated' });
});

// GetFavorites gets a user's favorites list (returns null if no favorites)
apiRouter.post('/favorites/get', async (req, res) => {
  const result = await DB.getFavorites(req.body.username);
  if (result) {
    //console.log(result[0]);
    res.send(result);
    return;
  }
  res.status(404).send({ msg: 'no faves yet' });
});

// ChangeUsername updates the username in the database
apiRouter.post('/change/username', async (req, res) => {
  const result1 = await DB.changeFavoriteUsername(req.body.olduser, req.body.newuser);
  const result = await DB.editUsername(req.body.olduser, req.body.newuser);
  if (result.modifiedCount > 0) {
    const result1 = await DB.changeFavoriteUsername(req.body.olduser, req.body.newuser);
    if (result1.modifiedCount > 0) {
      res.send();
    }
  }

  else res.status(404).send({ msg: "change username: user not found "});
});

// ChangePassword updates password in the database
apiRouter.post('/change/password', async (req, res) => {
  const result = await DB.editPassword(req.body.username, req.body.newpass);
  if (result.nModified > 0) {
    res.status(200).send();
  }

  res.status(404).send({ msg: "change password: user not found "});
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {	
  console.log(`Listening on port ${port}`);	
});	

new PeerProxy(httpService);
