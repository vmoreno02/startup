# BYU CS 260 startup application

I now have experience in the terminal and VSCode when it comes to Github.

### Startup spec assignment

My startup will be a small wiki, akin to wikis on fandom.com, but limited to Studio Ghibli movies. Different movies will have different pages. Users can log in, mark pages as favorites, and interact with other users in the comment sections on pages. Pages will contain photos from the movies and links to other pages (at minimum, which movie on the wiki was released before/after the current movie). Extra features that I may implement if I have time are quizzes and a random page selector.

Home page:

<img width="545" alt="Screenshot_20230123_022908" src="https://user-images.githubusercontent.com/89886311/214154060-872fd881-4a8d-4370-999c-e39eac52f4e4.png">

Individual movie page:

<img width="572" alt="Screenshot_20230123_022950" src="https://user-images.githubusercontent.com/89886311/214154190-e91a0d8e-2dfc-479e-9138-090f2292e7bb.png">

### AWS EC2 assignment

Server's IP address: 18.218.36.221	

SSH command: ssh -i ~/keypair/260keypair.pem ubuntu@18.218.36.221		

I have stopped the server for now. When I begin working on it regularly, I will assign it an elastic IP address.

### Route 53 assignment

URL: http://ghiblipedia.click

### AWS HTTPS assignment

URL: https://ghiblipedia.click

### Simon HTML assignment

I have learned a lot about HTML by making my own version of the Simon HTML.

- I realized that the &lt;p&gt; tag will add an extra blank line at the end, so if you don't want the line break, you have to do &lt;div&gt;&lt;span&gt;.

- &lt;hr &sol;&gt; == line break, &lt;br &sol;&gt; = \n\n

- SVG isn't as scary as it seems.

- &lt;href=link&gt; == link to page

- &lt;tr&gt; == table row, &lt;td&gt; == table cell

- The Live Server Extension will save my life in this class.

### Simon CSS

I feel much more confident in using both normal CSS and Bootstrap commands. It seems easy enough to look through the list of Bootstrap elements and pick the ones I want, and I already have ideas of what I want to do with my startup website. Normal CSS is more complicated, but I have a better idea of how to make things curve and stay where I want them.

### Startup HTML and CSS

I now am much more confident in using HTML, CSS, and Bootstrap. I'm pleased with how my website looks, though in the future I may add more photos and styling. I also may add more text to certain pages; I'm just really tired of typing right now and I may have bitten off more than I can chew. I've learned how to organize things in rows, when to use Bootstrap and when to make items from scratch, how to incorporate fonts, colors, and images into my work, and how to make a sticky header.

### Simon Javascript

I see just how useful promises and async/await can be in a practical application, and 
think I finally get how to use Javascript in tandem with HTML to make a functioning website.

### Startup Javascript

Whew, this was a doozy of an assignment. I think I've finally got the hang of event listeners and using the DOM. It took me a while to figure out that I can use the same ID in different files. I ended up using local storage more than I thought I would, but that will probably change once we start using external databases. The trickiest part was using local storage to remember which favorite checkboxes were checked and displaying them as such.

### Simon service

Now that I've actually implemented some functionality, the Node.js/Express/Fetch stuff isn't so intimidating. It's a lot clearer to me now that Express sets stuff up in the background while fetch is used in the .js files to dynamically get and assign content.

### Simon db

Using environment variables to hold passwords is a really cool idea. I didn't know you could do that, and it opens a lot of possibilities, though it's not the most secure option ever. The difference between the 'db' variable and the 'collection' variable confused me at first, but I think that collections are like little tables inside the bigger table, so we could also do client.db('simon').collection('bestplays') or something and it would show up in the simon database.

### Simon login

I've been stressing over how to do my startup's login function for a while, and it's nice to finally understand how logging in and out works. It's nice that hashing and decrypting passwords can be done automatically and how the code is split between login.js and index.js. The logic of what is required to authenticate and add new and existing users is in logic.js and the actual api calls are in index.js.

### Simon websocket

The live interaction is a really cool feature. I think with some additional database fanagling, I can easily modify the live chat into a real-time comment section that saves across sessions and loads with the website. I'll likely have to make a separate comment.js file that works similarly to play.js in that it calls the websocket and passes in data while peerProxy.js outlines how the websocket responds.

### Simon React

Now that I've seen a fully-functioning React app in action, I think it's better than the old way of doing it. I just have to download all the React framework, change a bit of terminology, and add the routes in app.jsx. The rest of my code will basically be copy-pasted.

### Startup Service

Wow, this one was a doozy! It took a while, but I figured out how to use the updateOne function for MongoDB. I also figured out how to store the comments and favorites in an array in Mongo. This was definitely the most difficult startup assignment, but I've figured out Mongo, Express, authentication, and WebSocket, so I'd say the work was worth it. Eventually, I'd like to go back and edit a few things (look and feel of the comment section, popping off only one websocket comment at a time, etc), but unfortunately, I don't have time right now.

## ----------------NOTES----------------

// DNS
- domain name system
- converts domain names to IP addresses
- dig: returns ip address for domain name
- A: address, mapping from domain name to IP address
- CNAME: canonical name, mapping from domain name to another domain name
- TTL: time that name caching retains info

// Console commands
- ls -la: list all files, parameter lists hidden files in long format
- sudo: execute command as admin
- ssh: secure shell on remote computer
- curl: HTTP request and response with URLs
- dig: show DNS info
- chmod: makes script executable

// GitHub
- git add ., git commit, git push
- git clone vs git pull

// HTML
- hypertext markup language
- content structure
- elements
    - html: page container
    - head: header info, not visible
    - title: title of page, appears in tab
    - meta: metadata like viewport settings
    - script: javascript reference
    - include: external content reference
    - body: content body of page
    - header: visible header of main content
    - footer: visible footer of main content
    - nav: navigational inputs
    - main: main content
    - section: section of main content
    - aside: aside content from main content
    - div: block division of content
    - span: inline span of content
    - h&lt;num&gt;: header of certain size
    - p: paragraph
    - b: bold/bring attention
    - table: table
    - tr: table row
    - td: table data
    - ol: ordered list
    - ul: unordered list
    - li: list item
    - a: anchor text to a hyperlink
    - img: image refreence
    - dialog: interactive component
    - form: collection of user input
    - audio: audio
    - video: video
    - svg: scalable vector graphic content (styling via html)
    - input: user input field, often used within form
    - iframe: inline frame of another html page

- block vs inline: block is distinct within flow of structure; inline is in line with content flow of corresponding block
- canvas: 2D drawing and animation
- style: inject CSS directly into HTML

// CSS
- cascading style sheets
- defines rulesets
- rule has a selector and a declaration assigning a value to a property
- peanut butter and mayonnaise: padding, border, margin
- padding inherits background color
- box-sizing: define which parts of the box are included in width and height
- selectors
    - combinators: section p
        - section > p: direct child
        - section ~ p: section that has p sibling
        - section + p: section that has adjacent p sibling
    - class selector: .summary
        - p.sumary
    - id selector: #physics
    - attribute selector: p[class='summary']
    - pseudo selector: section:hover
- declarations: background-color, flex, etc
- units
    - px: num pixels
    - pt: num points (1/72 inch)
    - in: num inches
    - cm: num centimeters
    - %: percentage of parent element
    - em: nultiplier of width of letter m in parent's font
    - rem: multiplier of width of m in root's font
    - ex: multiplier of height of element's font
    - vw: percentage of viewport width
    - vh: percentage of viewport height
    - vmin: percentage of viewport's smaller dimension
    - vmax: percentage of viewport's larger dimension
- hsl: hue, saturation, light
- font families: serif, sans-serif, fixed, symbol
- animation:
    - in element: animation-name, animation-duration
    - @keyframes name, from, to, percentages in between
- display
    - none: don't display
    - block: fill parent element width
    - inline: width only as big as content
    - flex: flexible orientation
    - grid: grid orientation
- float: move elemnt left or right, allow inline elements to wrap
- media selector: @media (some qualifier)
- grid
    - display: grid
    - grid template-columns: layout of grid cols
    - grid-auto-rows: format rows
    - grid-gap: gap between items
- flex
    - partition into areas that responsively move around as window resizes or orientation changes
    - flex: 0 80px: will not grow, starting height of 80px
    - flex: 1: 1 fractional unit of growth
    - flex: 3: two elements will get 1:3 ration of space

// Javascript
- function(a, b) { return a + ' ' b; }
- can specify css declarations in console.log statements
- timers: console.time, console.timeEnd
- count num time a block of code is called: console.count(block)
- declare variables: let or const; const can't be changed
- JSON: {"x":3, "b":"fish"}
- strict equality: ===
- backtick: defines string literal that may contain Javascript evaluated in place and inserted into the string
- replacement specified by ${}
- anonymous object: hello({ name: 'world', count: 0 })
- anonymous function: const a = function(a, b) { return a + b; }
- can pass function names as parameters and declare inner functions
- arrow function: a.sort((v1, v2) => v1 - v2);
- arrow functions make closures (inherit the this of their creation scope)
- array functions
    - push
    - pop
    - slice: return subarray from i1 to i2
    - sort: sort according to certain function
    - values: to iterate through array
    - find: find first item satisfied by text function
    - forEach: run function on each item
    - reduce: reduce array to one item according to param func
    - map: map array to new array according to param func
    - filter: remove items according to filter func
    - every: test if all items match param func
    - some: test if any items match param func
- static Object functions
    - Object.entries(obj)
    - Object.keys(obj)
    - Object.values(obj)
- private var: #name
- constructor(param)
- regex
    - new RegExp(regex)
    - match: returns array of regexes in the string
    - replace: replace: replace occurrences of regex in string with another string
    - test: true if contains regex
- rest: function hasNumber(test, ...numbers)
- hasNumber(2, 1, 2, 3)
- spread: person(first, last)
- const p = person(...['ryan', 'dahl'])
- destructuring: pulling individual items out of existing one
- a = [1, 2, 3, 4]
- [b, c] = a
- b = 1, c = 2
- this
    - global: outside function or object
    - function: refers to object that owns function
    - object: inside object
// DOM
- get class : const list = document.querySelectorAll('p');
- add: appendChild or append
- get id: querySelector or getElementById
- remove: while x.firstChild { x.removeChild(x.firstChild) }
- Can inject straight html: el.innerHTML = "line of html"
- event listener: el.addEventListener('click', function (event))

- modules: partitioning and sharing f code
- export function, import function from
- promises
    - execute on separate thread
    - new Promise((resolve, reject) => stuff)
    - resolve/reject will hold any vars you want to access later
    - .then: activate promise and do success
    - catch: do error
    - finally: always executes
- async/await
    - block until promise is done
    - mark function as async, returns a promise
    - await the function
    - const result = await func()
    - result = success
    - catch = err
    - finally = always happens

// URL
- Uniform Resource Locator
- https: scheme, usually https
- byu.edu: domain name, owns resource
- 3000: port
- /school/byu/etc: path, path to resource on the domain, can include endpoint params
- filter=names&highlight=intro,summary: parameters
- #summary: anchor, sublocation in resource
- URN: unique resource name, no location info
- URI: unique resource identifier, URL or URN

// SOP and CORS
- SOP: same origin policy, only allows javascript to make a request to a domain if it's the same domain that the user is currently viewing
- CORS: cross origin resource sharing, safely violate SOP, specify what origins are allowed

// Fetch
- make http requests to a third-party service
- takes a url and returns an asynchronous promise

- REST: representational state transfer, always act upon a resource

// Node.js
- deploy javascript outside a browser
- Create your project directory
- Initialize it for use with NPM by running npm init -y
- Make sure .gitignore file contains node-modules
- Install any desired packages with npm install &lt;package name here&gt;
- Add require('&lt;package name here&gt;') to your JavaScript code
- Run your code with node main.js

// Express
- makes using http with node much easier
- supports all http verbs as functions where you can define what to do with request and result
- app.use: uses middleware

// PM2
- daemon: keeps a program running after shutdown
- process manager 2

// Mongo
- no strict schema requirements
- some fields can be missing
- set username, password, and hostname as envvar

// Authorization
- generate token with uuid
- encrypt passwords with bcrypt

// Websocket
- fully duplexed, any party can efficiently send data at any time

// React
- makes reactive web page components that automatically update based on user interactions or changes in underlying data
- abstracts html into a javascript variate called jsx
- React.createElement generates DOM elements
monitors props and state objects
- updates happen asynchronously
- tic tac toe
    - export: makes function available outside file
    - default: signals compiler to treat this function as main
    - component: piece of UI that is reusable; used to render, manage, and update parts of app
    - prop/property: name or value that allows CSS to style
    - normally need React and ReactDOM
    - fragments: &lt;&gt; &lt;/&gt;; wrap multiple components to return one JSX component
    - put functions inside the html that return more html
    - pass values into functions with { value }
    - onClick={function}
    - state: used to remember things
    - const [value, setValue] = useState(null);
    - To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.
- hooks: like useState
- allow react functions style components to do everything class style components can do and more
- toolchain: abstracts away some complexity
- github is on the toolchain
- router: defines the routs a user can take through the app and manipulates the DOM to display the appropriate components

// Security
- common hacking techniques: injection, cross site scripting, denial of service, credential stuffing, social engineering
- ways to avoid: sanitize input data, logging, traps, education, reduce attack surfaces, layered security, least required access policy, safeguard credentials, public review

// Typescript
- static type checking for javascript
- function inc(value: number)
- define types for object properties and react function style components
- can make interfaces
- null pointer checking
- states: type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';
- function square(n: number | string)

// Performance monitoring
- want everything to load in 1 second or less
- browser app latency: speed of user device, amount of data that needs to be processed, and time complexity of processing algorithm
- basically time taken to load index.html with all js/service calls
- compress files, reduce quality of images and video, minify js and css, use http2 or http3
- network latency: amount of data you send, amount of data user can receive per second, distance data has to travel
- avoid making unnecessary or large requests
- host app files in data centers all around the world
- service endpoint latency: number of requests to service endpoints
- number or requests and time to process each request

// Search engine optimization
- content, authoritative lilnks, metadata, structure and organization, performance and usability
- customize in robots.txt