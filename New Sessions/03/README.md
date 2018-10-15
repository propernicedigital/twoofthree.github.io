# CSS Crash Course

Now the stylish part: **CSS**!

There's a `link` in the `head` of your app which points to a CSS file called **style.css**. This is where you add your own styles.

```html
<link rel="stylesheet" href="css/style.css">
```

You can have more than just one CSS file, and we'll show you how it's good practice to work on several small files rather than one long document you may get lost into.


#### CSS basics

You use CSS to style HTML.

CSS looks and works differently than HTML.

```css
selector
{
	property: value;
	property: value;
}
```

The part before the curly brackets `{` and `}` is the **selector**. This ***selects* the element** from your HTML document.

In CSS you can select multiple HTML elements in one go.

For example, to select all paragraphs you can write

```css
p
{
	/* your styles for paragraph here */
}
```

CSS **properties** define how HTML elements are displayed.

![](assets/css_layout.jpg)

The first bit is the property name, eg `color`, and the second bit is the value, eg `green`. They are separated by a `:` colon, and you MUST end each line of CSS with a `;` semicolon (for real, otherwise your browser will choke).

For example ...

```css
p
{
	color: green;
}
```

... will turn *every* paragraph in your HTML green.

#### Play around a bit

> Let's spend the next 5-10 minutes getting familiar with CSS. It doesn't matter if your app looks a bit funny for now. Things you can do:

> * change the `color` of your `h1` or `h2` elements
> * align some elements to the `center` (*google* how to do it)
> * hide some elements
> * change the `background-color` of the whole page

> What else would you like to do? Try and *google* it first, then we can do it together (if it's not too whacky).

#### Search for solutions!

Part of learning to code and being a coder is searching for answers, every day. You don't need to remember everything and you don't need to learn everything immediately.

**All the answers can be found on the Web! As coders, we must get used to searching online for solutions.**

#### Inspect websites you like

Did you know, you can see the code which has created every site on the Web? You can use the **Web Inspector** to do this. It's like x-ray specs for websites.

> Go to a website (any website) and right-click anywhere on that page, then select `Inspect` (or `Inspect Element` in some browsers).

On the **left panel** of the `Elements` tab you can see all the HTML code for the page you're inspecting. By clicking on an HTML element you'll reveal all the CSS applied to it, on the **right panel**.

You can also play with this code and change the way your favourite websites look (but don't worry, your changes won't affect how other people are experiencing that site). :scream:

> Go to a site you like, right-click > `Inspect` and then see if you can find which colours it uses.

#### Fonts

Text is the major carrier of information on an app, so it's good practice to start with **typography**, or *type setting*. That means defining how texts are going to look, which fonts your app is going to use, and the proportions between them in your app layout.

> You can grab a free **font** from [Google Fonts](https://fonts.google.com/):

> 1. Pick a typeface you like
> 2. Click on the red `+` button (in the top right corner of the selected font)
> 3. Toggle the `family selected` box (black bar at the bottom)
> 4. Copy and paste the `embed code` into your Thimble (between your <head> tags)

>	Where? Before `style.css`

```html
	<head>
		...
		<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,900' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/style.css">
	</head>
```
> * In `style.css`, define the font for the `body` element (all other elements will inherit it).

```css
body
{
	font-family: 'Lato', sans-serif;
}
```

We're using the font *Lato* as an example, but you can pick **whichever font** you like and change your CSS code accordingly. There are more than 700 fonts available on Google Fonts!

Then you can set **more specific rules** for headings, paragraphs and bold elements. For instance, you could use a different font just for headings, as well as changing many other aspects of your typography:

* `font-family`
* `font-size`
* `font-weight`
* `font-style`
* `line-height`
* `letter-spacing`
* `word-spacing`
* `text-align`
* `text-decoration`
* `text-transform`
* `text-indent`

> `font-family`, `font-size` and `color` are a great place to start!

#### Background images

You can add images to your app via CSS. This is useful if you want to set different images for different screen sizes (eg: one for mobile, a different one for tablets) as well as fine-tuning how your images should display.

> In your `style.css` create a new `background-image` rule for `html`

```css
html
{
	background-image: url('');
}
```

You can upload your own image files to Thimble (if they're smaller than 3MB), or use image links from the Web (provided they're licensed for re-use).

For now, we'll use [03difoha.github.io](https://03difoha.github.io), where you can find beautiful, high-res pictures that are free to use for *whatever* purpose you want. Amazing!

> 1. Find an image you like on [03difoha.github.io](https://03difoha.github.io)
> 2. Secondary click on the image. (Right click for PC, Two finger click for Mac)
> 3. **Copy Image Address**. This should copy the images URL to your clipboard. Paste it into a new tab if you don't believe me.
> 4. **Paste** it in your `style.css` inside the `body` `background-image` rule like so

```css
html
{
	background-image: url('https://03difoha.github.io/example.jpg');
}
```

By default background-images *tile*, but we want them to take up the whole available screen space, without losing their aspect ratio (no squashing). 

We can achieve that with `background-size`. This property can take various values: pixel sizes, percentages, and then a couple of interesting keywords.

* `contain` will scale the image so as to be as large as possible providing that it is **contained** within the background positioning area. 
* `cover` instead, will scale the image, this time to be as large as possible so that the background positioning area is completely **covered** by the background image.

> Add `background-size: cover;` to the `html` rule.

```css
html
{
	background-image: url('https://03difoha.github.io/example.jpg');
 	background-size: cover;
}
```

Now the image *covers* the content of your app, ie the `body` but you have probably noticed that it doesn't cover the *whole browser window*. The last touch we can add to the background image, to make it cover the whole browser window is adding `background-attachment: fixed;`

```css
html
{
	background-image: url('https://03difoha.github.io/example.jpg');
 	background-size: cover;
 	background-attachment: fixed;
}
```  

<!--

* Introduce **Web Inspector**, HTML and CSS tabs.



* CSS **comments**

* Style `select` and `button`
	* `border: none;`
	* `border-radius`
	* `margin`
	* `padding`
* Colours
	* Web inspector colour picker (maybe pick a colour from Facebook). Everything is lost on *page refresh* so need to copy-paste into our code.
	* `background`
	* `color`
	* `border-color`
	* Check out [Kuler](https://color.adobe.com) and/or [Flat UI colors](https://flatuicolors.com/) for inspirations
 -->
<!--
### Final touches

* Media queries

	```css
	/* if the screen is larger than 600px..  */
	@media (min-width: 600px) {
	  body {
	    max-width: 600px;
	    margin: auto;
	    font-size: 1em;
	  }
	}
	```
* Icons using [FontAwesome](https://fortawesome.github.io/Font-Awesome/)

	```css
	.dropdown
	{
	  position: relative;
	}
	.dropdown:after
	{
	  content: "\f063";
	  font-family: FontAwesome;
	  position: absolute;
	  top: .75em;
	  right: .75em;
	  font-size: 2em;
	  pointer-events: none;
	}
	```

* Make the app look proper on a phone. Google `how to stop phone zooming out pages`

* Make the app **full screen**. Google `how to hide address bar in mobile browser` and you should find [this tutorial](http://www.html5rocks.com/en/mobile/fullscreen/)

* Add the app to your phone's **home screen**

	`<link rel="apple-touch-icon" href="blabla.png">`

* Transparency?

* Take inspiration from these fancy demos by Codrops:
	* [Custom select elements](http://tympanus.net/codrops/2014/07/10/inspiration-for-custom-select-elements/)
	* [Minimal form interface](http://tympanus.net/codrops/2014/04/01/minimal-form-interface)
	* [Natural language form](http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements)
-->

### License

[![](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ](http://creativecommons.org/licenses/by-nc-sa/4.0)
