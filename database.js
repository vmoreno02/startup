const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const favoritesCollection = client.db('ghibli').collection('favorites');
const userCollection = client.db('ghibli').collection('users');
const commentCollection = client.db('ghibli').collection('comments')

/* user: {username, passwordHash, email, token} */
/* favorite: {username, [favorites]} */
/* comment: {page, [Comment]}
 * contains the page title and an array full of Comment objects:
 * {username, comment text}
*/

function addUser(user) {
  userCollection.insertOne(user);
}

function addFavorite(username, favorite) {
  let favorites = Array(favorite);
  return favoritesCollection.insertOne({ username: username, favorites: favorites });
}

function updateFavorites(username, favorite, favorites) {
  favorites.push(favorite);
  return favoritesCollection.updateOne(
    { "username": username },
    { $set: { "favorites": favorites }}
  );
}

function removeFavorite(username, favorite, favorites) {
  const index = favorites.indexOf(favorite);
  if (index > -1) {
    favorites.splice(index, 1);
  }

  return favoritesCollection.updateOne(
    { "username": username },
    { $set: { "favorites": favorites }}
  );
}

function editUsername(oldName, username) {
  console.log(oldName);
  return userCollection.updateOne(
    { "username": oldName },
    { $set: { "username": username }}
  );
}

async function editPassword(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  return userCollection.updateOne(
    { "username": username },
    { $set: { "password": passwordHash }}
  );
}

async function getFavorites(username) {
  const faves = await favoritesCollection.findOne({ username: username });
  return faves.favorites;
}

function changeFavoriteUsername(oldUser, username) {
  return favoritesCollection.updateOne(
    { "username": oldUser },
    { $set: { "username": username}}
  );
}

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    email: email,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

module.exports = {
  addUser,
  addFavorite,
  getUser,
  removeFavorite,
  getUserByToken,
  createUser,
  editUsername,
  editPassword,
  getFavorites,
  updateFavorites,
  changeFavoriteUsername
};
