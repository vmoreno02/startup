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

// DOM

- get class : const list = document.querySelectorAll('p');
- add: appendChild or append
- get id: querySelector or getElementById
- remove: while x.firstChild { x.removeChild(x.firstChild) }
- Can inject straight html: el.innerHTML = "line of html"
- event listener: el.addEventListener('click', function (event))
