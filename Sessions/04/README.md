# HTML & CSS recap

Different **languages**, separate [**concerns**](http://en.wikipedia.org/wiki/Separation_of_concerns#HTML.2C_CSS.2C_JavaScript).

Think of a group of people working together, e.g. to make a car, a newspaper, a website, to provide education. What are the different *roles* and *concerns* of these people?

##### **HTML** → content and structure  

##### **CSS** → style and design

<!--##### 3. **JS** → data and logic-->

## Quiz time!

1. Is this code HTML or CSS?

	```html
	<a href="http://example.com"> Click me! </a>
	```

	- [ ] HTML
	- [ ] CSS
2. Is this code HTML or CSS?

	```css
	a
	{
		color: orange;
	}
	```

	- [ ] HTML
	- [ ] CSS		 
3. What does this code produce?

	```html
	<a href="http://example.com"> Click me! </a>
	```

	- [ ] An apple
	- [ ] A paragraph
	- [ ] A hyperlink
4. Where in a `.html` document would you find this code?

	```html
	<link href="style.css" rel="stylesheet">
	```

	- [ ] In the `gut`
	- [ ] At the end of the `body`
	- [ ] Inside the `head`
5. What does this code produce?

	```css
	a
	{
		background-color: orange;
	}
	```

	- [ ] It turns every `a` orange
	- [ ] It turns the text of `a` elements orange
	- [ ] It turns the background of `a` elements orange
	- [ ] It turns the border of `a` elements orange
6. What's wrong with this HTML code?

	```html
	<p Good morning coders!</p>
	```
7. What's wrong with this HTML code?

	```html
	<p> Good morning coders!<p/>
	```
8. Why doesn't this CSS code work?

	```css
	<p>
	{
		color: red;
	}
	```     
9. Why doesn't this CSS code turn my paragraphs red?

	```css
	p
	{
		colour: red;
	}      
	```
10. Why doesn't this CSS code turn my paragraphs red?
```css
   p
   {
    	font-size: 20px
    	color: red;
   }  
```

## CSS Selectors

- Classes
- ID's

## Frameworks

Also referred to as “CSS frameworks,” these are packages containing pre-written, standardized code in files and folders. They give you a base to build on while still allowing flexibility with the final design. Typically, front-end frameworks contain the following components:

* A grid which makes it simple to organize the design elements of your website
* Defined font styles and sizing that varies based on its function (different typography for headings versus paragraphs, etc.)
* Pre-built website components like side panels, buttons, and navigation bars
Depending on the specific framework you choose, there’s a lot more they are capable of as well.

### Why Use One
There are a lot of good reasons to use a front-end framework instead of starting all your code from scratch:

* Save time! Obviously, if you’re writing every single line of code by yourself, it’s going to take a lot longer to launch your website. Frameworks can help get you started with the basics.
* Add extra components that you might not have otherwise. It’s always nice to have the option to tack on another button or two without creating any extra hassle for yourself.
* Know for sure that the code works. Instead of spending a lot of time writing your own code only to discover that it doesn’t work (or isn’t compatible with 60% of web browsers), you’ll know that you’re using pre-tested, functional code.

**We'll use bootstrap**

- Add bootstrap 4 CSS CDN to your homepage above your stylesheet
- Teach the grid system
- Create html elements for your portfolio page

## Exercise two
- Hide the first view
- Begin adding the next page elements for the app, add the list view area
