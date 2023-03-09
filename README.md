# startup
BYU CS 260 startup application

I now have experience in the terminal and VSCode when it comes to Github.

// startup spec assignment

My startup will be a small wiki, akin to wikis on fandom.com, but limited to Studio Ghibli movies. Different movies will have different pages. Users can log in, mark pages as favorites, and interact with other users in the comment sections on pages. Pages will contain photos from the movies and links to other pages (at minimum, which movie on the wiki was released before/after the current movie). Extra features that I may implement if I have time are quizzes and a random page selector.

Home page:

<img width="545" alt="Screenshot_20230123_022908" src="https://user-images.githubusercontent.com/89886311/214154060-872fd881-4a8d-4370-999c-e39eac52f4e4.png">

Individual movie page:

<img width="572" alt="Screenshot_20230123_022950" src="https://user-images.githubusercontent.com/89886311/214154190-e91a0d8e-2dfc-479e-9138-090f2292e7bb.png">

// aws ec2 assignment

Server's IP address: 18.218.36.221	

SSH command: ssh -i ~/keypair/260keypair.pem ubuntu@18.218.36.221		

I have stopped the server for now. When I begin working on it regularly, I will assign it an elastic IP address.

// aws route 53 assignment

URL: http://ghiblipedia.click

// aws https assignment

URL: https://ghiblipedia.click

// simon html assignment

I have learned a lot about HTML by making my own version of the Simon HTML.

- I realized that the &lt;p&gt; tag will add an extra blank line at the end, so if you don't want the line break, you have to do &lt;div&gt;&lt;span&gt;.

- &lt;hr &sol;&gt; == line break, &lt;br &sol;&gt; = \n\n

- SVG isn't as scary as it seems.

- &lt;href=link&gt; == link to page

- &lt;tr&gt; == table row, &lt;td&gt; == table cell

- The Live Server Extension will save my life in this class.

// simon css

I feel much more confident in using both normal CSS and Bootstrap commands. It seems easy enough to look through the list of Bootstrap elements and pick the ones I want, and I already have ideas of what I want to do with my startup website. Normal CSS is more complicated, but I have a better idea of how to make things curve and stay where I want them.

// startup html and css

I now am much more confident in using HTML, CSS, and Bootstrap. I'm pleased with how my website looks, though in the future I may add more photos and styling. I also may add more text to certain pages; I'm just really tired of typing right now and I may have bitten off more than I can chew. I've learned how to organize things in rows, when to use Bootstrap and when to make items from scratch, how to incorporate fonts, colors, and images into my work, and how to make a sticky header.

// simon javascript

I see just how useful promises and async/await can be in a practical application, and 
think I finally get how to use Javascript in tandem with HTML to make a functioning website.

// startup javascript

Whew, this was a doozy of an assignment. I think I've finally got the hang of event listeners and using the DOM. It took me a while to figure out that I can use the same ID in different files. I ended up using local storage more than I thought I would, but that will probably change once we start using external databases. The trickiest part was using local storage to remember which favorite checkboxes were checked and displaying them as such.


----------------NOTES----------------

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