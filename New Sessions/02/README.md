# HTML crash course

We're going to learn how to:

* Write HTML to **structure** a web page or app
	* Create several types of **text** (paragraphs, headings)
	* Create **inputs** (dropdowns, buttons, text boxes)
	* Create **links** to other Web pages
	* Add **images**

* Write CSS to **style** your app interface
	* Design your app **typography**
	* Set your app **colours**
	* **Search** for code online and integrate what you find in your project (that's what coders do most of the time!)

## Step by step

### Content first, style later!

It's good practice to build the **HTML** first, and then make it _stylish_ with CSS.

#### HTML basics

HTML is a *markup* language, which you use to *format your content*.

Essentially, you wrap content inside bits of code called tags.

`<tag> content </tag>`

The bits of code inside angle brackets `<` and `>` are instructions for the computer:

* They describe the content they wrap
* Define where it starts `<tag>`
* Define where it ends `</tag>`

For example, this is how you wrap a paragraph of text in `p` tags:

`<p> This is a paragraph. </p>`

`p` stands for *paragraph*, of course.

#### HTML skeleton

I've created an HTML skeleton for you, containing the basic **building blocks**: `html`, `head` and `body` tags.

Every HTML document, at the bare bones, needs to have this structure.

<!--
```html
<!doctype html>
<html>
	<head>
		...
	</head>
	<body>
		...
	</body>
</html>
```
-->

![](assets/HTML_doc_setup.jpg)

#### Head

> In the `head` edit your app `title` by changing the text in between the `<title> ... </title>` tags.

What you put in the `head` is not visible to the user.

Later, you'll add links to external resources like *stylesheets* and *meta* information.

#### Body

In the `body` you will put all the **interface elements** that are visible to the user.


## Let's start building

#### Sections

> Inside the `body`, add in two `<section>` elements

```html
<body>
	<section></section>
	<section></section>
</body>
```

#### Headings

![](assets/headings.jpg)

> Inside the first `section`, add a **heading** `h1` and a **sub-heading** `h2`. These will be the most important pieces of information of your app's main page.

```html
<section>
	...
	<h1>Your app name</h2>
	<h2>What it does</h2>
</section>
```

#### Paragraphs

> Write a paragraph to explain how your app works, and what you want people to do first.  

```html
<section>
	...
	<p>Swap skills and time with people in your community!</p>
  	<p>Just choose an activity to get started.</p>
</section>
```

`p` is for *paragraph*

## Excercise - Your CV

We're going to create a HTML version of your CV, you can use this to send off to potential clients or employers later on.

Open "demo-cv" to see the sample. 

#### Dropdown

This is the first interactive element of your app.

It's a set of `options` that people can choose from.

> Under your headings, add in a `<select>` element. Inside that, add in some `<option>` elements.

```html
<section>
	...
	<select>
		<option>Keep my pet</option>
		<option>Bake a cake</option>
		<option>Move my piano</option>
	</select>
	...
</section>
```

#### Button

> Next you'll need a `Find` or `Search` button. What do you think is the HTML code to make a button?

> It's `<button>` :)

```html
<section>
	...
	<button>Find</button>
	...
</section>
```

#### Hyperlinks

![](assets/links_inside_paragraphs.jpg)

You can add **hyperlinks** to our content using the `a` element.

```html
<a href="http://example.com"> the clickable text </a>
```

`a` is for *anchor* :anchor:

> Add in a little credit at the bottom of your page, just above the closing `</body>` tag.

```html
	...
	<p>Made with love by <a href="http://example.com"> Your Name</a></p>
</body>
```

#### Fancy logo

![](assets/hipsterlogogenerator.png)

It's important. We recommend [hipsterlogogenerator.com](https://www.hipsterlogogenerator.com) for quick and easy hipster logos :)

> Take a couple of minutes to quickly make your own fancy logo.

> To place your logo in your HTML document create an `img` element inside the first `section`. `img` elements don't need closing tags (it's one of the exceptions to the general rule of closing tags).

```html
<section>
	<img src=" ">
</section>
<section>
...
</section>
```

Every `img` requires a link - either a weblink to the image or the location of the image you're using in your files.

> In Thimble, upload your logo and put the name inside `src=" "`

```html
<section>
	<img src="hipsterlogo.jpg">
</section>
<section>
...
</section>
```

If you're taking an image from the web you need to use the link to the image alone.

> Right-click on the image and `Copy Link Address`. Then paste it inside `src=" "`

```html
<section>
	<img src="http://placekitten.com/200/300">
</section>
<section>
...
</section>
```

Don't worry just now if it's too big, we'll resize it later on.


### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)
