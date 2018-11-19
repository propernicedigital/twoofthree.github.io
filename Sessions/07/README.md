
[Last week](../04) you:

* learned how to give your HTML elements a `class` or `id`
* you then got really specific with your styling (not all paragraphs need to look exactly the same!)
* learned about code libraries like jQuery
* used jQuery to select a whole section of your HTML and hide it by default
* got hands-on experience being a real coder, copying and pasting chunks of code into your projects


<!--
Now that our database is ripe with data, we can **filter** that data in response to user **inputs** and display it in the app **interface**.-->

So far you've successfully created an app template for yourself which you'll use as a base for your own ideas.

**Today** we're going to start personalising your apps, you will:

* individual tutorials
* design and structure your data
* keep hacking the Firebase pusher and push data to your database
* and start adapting the functions to display exactly what you want

# Quiz time!


* What does this do?

	```js
	// example code
	var button = $('button');

	var p = $(‘p’);

	button.click( function ()
	{
	   p.hide();
	});
	```

* Why do we write this line?

	```js
	var p = $(‘p’);
	```

* Which of these functions are not native to javascript?

	- [ ] .click
	- [ ] .hide
	- [ ] both

# Your data

Now that our apps are progressing, it's time that we started getting rid of dummy data. Whilst other people are having their tutorials we want everyone else to be finalising their users data. This means:

* using real names (No Joe Bloggs or using people in this class' names. Be creative)
* rate skills by number (1-5 instead of by adjectives e.g. good or bad)
* detailed 'about me' or 'info' descriptions (2 sentences minimum)
* think about the type of people that are using your app. Put yourself in their shoes, what information are you trying to find?
* you want this to look like a real app so make your data realistic

# Your app

Have a think about the data you have made, how can we get this to work within the app we have built so far.

Remember the components:

* Interface: dropdown search menu and find button
* Data: we used people and ranked their skills, what could you replace people with?
* Logic: only the people who ranked highly in the searched-for skill are shown in the results

What app ideas could work with the same structure?

# Tutorials

We will both be spending time with each of you working through any issues you have with the app or any questions regarding what you have learnt so far.

## PM

# Build your own database

Good apps need good data.

This doesn't mean a lot of data, but rather **well structured** data.

A good database doesn't look like a *bucket* full of unstructured data. Instead, a good database is organised so that it's easy (and quick) to search through heaps of objects and pick just the ones you want.

Let's look at three general principles of database design, and then you'll apply those to your own database.


## Key database design principles

Starting from you app idea, consider:

* What is the **data unit**?

	For example, in our demo app the *data unit* is a person and in the database we're storing people's profiles.


* What pieces of data will your *data unit* feature?

	For example, in our demo app for each person we're storing `name`, `blurb`, `profile picture`, `likesPets`, `bakingSkills` etc.

* Which data pieces will be used to **rank, filter & sort**?

	For example `likesPets` helps us filter data for the *I'd like someone to keep my pet* option, `bakingSkills` helps us filter data for the *I'd like someone to bake a cake* option, etc.

**Make a list** of all the data pieces for your data unit on paper.

### 1. Break your data into *logical pieces*

<!--Also known as [1NF](http://en.wikipedia.org/wiki/First_normal_form) (first normal form).-->

#### Bad example

| Person |
| ------ |
| Danny Base 21 |

#### Better example

| Name | Surname | Age |
| ---- | ------- | --- |
| Danny | Base | 21 |

This way you can take specific bits of data and spit them out wherever and however you want in your app.

<!--### 2. Break it into multiple *dimensions*

Using arrays.

#### Bad example

| Recipe name | Ingredients | Method |
| ----------- | ----------- | ------ |
| Banana bread | 1 banana <br>1 cup of flour <br>pinch of salt | 1. Mix dry ingredients <br>2. Mash the banana <br>3. Mix it all together <br>4. Bake it for 30 minutes |
| Avocado on toast | 1 avocado <br>2 slices of bread <br>squeeze of lemon | 1. Toast bread <br>2. Scoop out avocado <br>3. Spread avocado on toast <br>4. Squeeze lemon on top |

#### Better example

<table>
    <tr>
        <th>Recipe name</th>
        <th>Ingredients</th>
        <th>Method</th>
    </tr>
    <tr>
        <td>Banana bread</td>
        <td>
            <table>
                <tr>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td>banana</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>cup</td>
                    <td>flour</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>pinch</td>
                    <td>salt</td>
                </tr>
            </table>    
        </td>
        <td>
            <table>
                <tr>
                    <th>Order</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mix dry ingredients</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mash the banana</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mix it all together</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Bake it for 30 minutes</td>
                </tr>
            </table>    
        </td>
    </tr>
</table>-->

### 2. Use numbers for *ranking*

Computers are extremely good at maths. For a computer,  computing numbers is a piece of cake. Yet computing natural languages (such as English) is something that even the most sophisticated machines still struggle with (think of Siri, for example).

What's the trick then, if you want your app to be able to tell you `who are the best bakers in my area` for example? You **rank** people according to their baking skills.

#### Bad example

| Name | Surname | Baking skills |
| ---- | ------- | ------------- |
| Danny | Base | Excellent |
| Jordan | Scripts | Amazing |

#### Better example

| Name | Surname | Baking skills (0-5) |
| ---- | ------- | ------------- |
| Danny | Base | 4 |
| Jordan | Scripts | 3 |

If you want to rank data objects by **relevance** to a certain concept / keyword, use numbers.

| Name | Surname | Comedy | Sci-fi | Western
| ---- | ------- | ------ | ------ | -------
| Quentin | Tarantino | 2 | 0 | 3
| Martin | Scorsese | 3 | 0 | 1
| Stanley | Kubrick | 0 | 3 | 0
| Sofia | Coppola | 3 | 0 | 0

### 3. Use true or false

For **yes or no** answers. This is useful for filtering out results.

| Name | Surname | filmMaker| likesPets
| ---- | ------- | ------ | ------
| Quentin | Tarantino | true | false
| Martin | Scorsese | true | true
| Boris | Johnson | false | false

For instance, it would be easy to filter only the film-makers using this data structure.

### Editing the pusher

Now that we have our designed data let's edit our pusher so that the fields match our new data inputs.

> Tweak the `input` elements so that they reflect your data structures. Make sure you change the `name` *attributes*, eg:

```html
<input name="CHANGE_THIS" ...>
```

> Add the `input` elements that you need. You'll find some examples of common input types in the Thimble HTML code.

Once you have made these changes save your progress by publishing the project.

### Push data to your Firebase

> Now using your updated pusher *write* to the database using the data we designed earlier.

### Customise your code

> In `index.html` change the `option` elements to reflect your data.

> Make sure the `value` attributes match the property names you are using in Firebase **EXACTLY**.

For example, the `bakingSkills` in the HTML dropdown below **must** match the `bakingSkills` property stored in Firebase, letter by letter, and it's case sensitive.

```html
<select>
	<option value="bakingSkills">Bake a cake</option>
	...
</select>
```

<!--
Take a look at the code, can you spot the parts you need to change?

Your data might not include people... what if you're storing places or items?

Sift through the code and change `person` to whatever your objects are.

Remember to also change `personId` , `personHTML` and `makePersonHTML`!
-->


### Change the display

> Go to the function `show.js`.

> Scroll down to  `makeListItemHTML`. This is the function which populates the results list:

```js
function makeListItemHTML (person, index)
{
	...
	// li = List Item
	var li  = '<li id="' + index + '">'
	+ '<h2>' + person.name + '</h2>'
	+ '</li>'        
	return li;
}
```

This function takes in the JavaScript object `person` and spits out an HTML list item `<li>...</li>`

As you can see, in `li` there are some **invariable bits** like `<li id="`, and some **variable bits** like `person.name`

> If you want to add an `img` for instance, then you can tweak the lines where `li` is stringed together:

```js
var li  = '<li id="' + index + '">'
+ '<img src="' + person.image + '">'
+ '<h2>' + person.name + '</h2>'
+ '</li>'    
```  		


## Key database design principles

### 1. Break down your data into **logical pieces**

<!--Also known as [1NF](http://en.wikipedia.org/wiki/First_normal_form) (first normal form).-->

#### Bad example

| Person |
| ------ |
| Danny Base 21 |

#### Better example

| Name | Surname | Age |
| ---- | ------- | --- |
| Danny | Base | 21 |

This way you can take specific bits of data and spit them out wherever and however you want in your app.

Also, you could do things like `calculate the average age of our people`.

### 2. **Rank** with numbers

Computers are extremely good at maths. For a computer, computing numbers is a piece of :cake: Yet computing natural languages (such as English) is something that even the most sophisticated machines still struggle with (think of Siri, for example).

What's the trick then, if you want your app to be able to tell you `who are the best bakers in my area`? You **rank** people according to their baking skills.

#### Bad example

| Name | Surname | Baking skills |
| ---- | ------- | ------------- |
| Danny | Base | Excellent |
| Jordan | Scripts | Amazing |

#### Better example

| Name | Surname | Baking skills (0-5) |
| ---- | ------- | ------------- |
| Danny | Base | 4 |
| Jordan | Scripts | 2 |

If you want to rank data objects by **relevance** to a certain concept / keyword, also use numbers.

| Name | Surname | Comedy | Sci-fi | Western
| ---- | ------- | ------ | ------ | -------
| Quentin | Tarantino | 2 | 0 | 3
| Martin | Scorsese | 3 | 0 | 1
| Stanley | Kubrick | 1 | 3 | 0
| Sofia | Coppola | 3 | 0 | 0

### 3. **Filter** with true or false

For **yes or no** answers.

| Name | Surname | filmMaker| likesPets | likesEurope
| ---- | ------- | -------- | --------- | -----------
| Quentin | Tarantino | true | false | true
| Martin | Scorsese | true | true | true
| Boris | Johnson | false | false | false

For instance, it would be easy to filter only the film-makers using this data structure.


## Hacking the Firebase Pusher

[Firebase Pusher](https://thimbleprojects.org/codeyourapp/67950) is a tool which you can use to **push single data entries to your database**.

You can find the original pusher `Firebase pusher ORIGINAL` under `Your projects` in Thimble. Make sure to `Remix` the project before making any changes.

### What is your *data unit*?

For our demo app, which helps users find *people* to swap skills, the data unit is `person`.

If your app helps users find *courses*, then your data unit is a `course`. If your app helps users look up *events*, then your data unit is an `event`.

The Firebase Pusher can be used to send one new data entry to the database at a time. You fill out the form with all the data unit details and press the `Push it!` button! You should see the new entry appear on your Firebase each time you do this.

Your data unit will be quite different from the ones we've created for our demo app. So, you'll need to adapt this form to fit your data.

### Each data entry needs...

Think about what information your users will want to get from your app. Put yourself in their :shoe: :high_heel: :mans_shoe: and use this to work out the information you'll need to store.

For example, if you were looking for a *course*, you'd probably want to know the `name`, `subjectArea`, `startDate`, `endDate`, `startTime`, `endTime`, `price`, `place`, some `description` of what will be studied, maybe who the `teachers` are... and so on.

You'd need to customise the Firebase Pusher form so that you have a **field** for each piece of information you want to store inside that entry.

1. In `app.js` change `databaseURL` so that it points to your own Firebase.
2. In `index.html` edit the `form` by changing all the `name` attributes for your fields to reflect the data you want to store in Firebase. For instance, change

```html
<input name="codingSkills" ...
```
to

```html
<input name="YOUR_VARIABLE_NAME" ...
```
Then once you've adapted the form, you can use it to push the details about one course at a time to the database. You fill out the form and press the `Push it!` button!

**INSIDER TIP** Don't push hundreds of data objects. Just push two or three to start with, then *test* your app and see if you need to re-structure your data, or add anything that you may have missed.


# Displaying data

Once you've created your own database and *pushed* data to it, you'll need to customise the code you already have to display your new data.

### Change the display

> Go to the function `show.js`.

> Find the function `makeListItemHTML`, which populates the results list:

```js
function makeListItemHTML (person, index)
{
	...
	// li = List Item
	var li  = '<li id="' + index + '">'
	+ '<h2>' + person.name + '</h2>'
	+ '</li>'        
	return li        
}
```

This function takes in the JavaScript object `person` and spits out an HTML list item `<li>...</li>`

As you can see, in `li` there are some **invariable bits** like `<li id="`, and some **variable bits** like `person.name`

> If you want to add an `img` for instance, then you can tweak the lines where `li` is stringed together:

```js
var li  = '<li id="' + index + '">'
+ '<img src="' + person.image + '">'
+ '<h2>' + person.name + '</h2>'
+ '</li>'    
```  		

How	would you change the function that determines how `#details` is displayed? It's in the function `makePersonHTML`.

### Finishing touches

<!--Hiding the remix button?-->

Copy and paste this code into the `head` of your HTML document under the `title` element. You can find it in the copy-paste document:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<!-- Enable fullscreen Mode -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<!-- Icon for home screen -->
<link rel="apple-touch-icon" href="CHANGE THIS SO THAT IT POINTS TO AN IMAGE URL">
<link rel="icon" sizes="296x296" href="CHANGE THIS SO THAT IT POINTS TO AN IMAGE URL">
```

This code ensures your app will display well on mobile. Be sure to change the `link` `href="  "` to the url of whatever image you'd like to use for your app icon. The image should be square shaped for the best display.


# Resources

### Code

* [Codecademy](https://www.codecademy.com/) `codecademy.com`

	Free online courses to learn just about any coding language you like!

* [Dash](https://dash.generalassemb.ly/) `dash.generalassemb.ly`

	Free online courses to get you going in HTML, CSS and a little JavaScript

* [CodeWars](http://www.codewars.com/about) `codewars.com`

	Complete challenges in Javascript and improve your ranking! A fun resource for learning new tricks and comparing the many different ways to complete a task

* [CSS-Tricks](https://css-tricks.com/) `css-tricks.com`

	Fantastic resource for CSS, invaluable for beginners and experienced front-end designers alike!

* [JS for cats](http://jsforcats.com/) `jsforcats.com`

	Introduction to JavaScript..."So easy your human companion could do it too!" :scream_cat:

* [CSS Diner](http://flukeout.github.io) `flukeout.github.io`

	A little game to help you learn CSS selectors. Type in the correct selector to complete each level.

* [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)

	A set of web authoring and debugging tools built into Google Chrome. Use the DevTools to iterate, debug and profile your Web projects!

### Inspiration

* [Smashing Magazine](http://www.smashingmagazine.com/) `smashingmagazine.com`

	Online magazine focused on coding and web development, covering techniques, languages, mobile, design, graphics and more

* [Creative Bloq](http://www.creativebloq.com/) `creativebloq.com`

	Online magazine providing inspiration for graphic design, web design, 3D art and more

* [Niice](https://niice.co/) `niice.co`

	A design search engine, drawing results from [Behance behance.net](https://www.behance.net/), [Dribble dribbble.com](https://dribbble.com/) and [Designspiration designspiration.net](http://designspiration.net/). Great if you're in need of some design inspiration!

* [Panda App](https://usepanda.com/app/#/) `usepanda.com`

	Another great source of inspiration pulling results from various sources like [DesignerNews](https://www.designernews.co/) `designernews.co`, [Dribble](https://dribbble.com/) `dribbble.com`, [Behance](https://www.behance.net/) `behance.net` and [SiteInspire](http://www.siteinspire.com/) `siteinspire.com`

### Design

* [GoodUI](http://goodui.org/) `goodui.org`

	Extensive list of good design patterns for user interfaces

* [UserOnboard](https://www.useronboard.com/) `useronboard.com`

	Teardowns of major apps - a great reference for designing your interfaces
* [HackDesign](https://hackdesign.org/lessons) `hackdesign.org`

	Learn how to design digital products, with lessons spanning from typography to UX (user experience).

* [Noun Project](https://thenounproject.com) `thenounproject.com`

	Huge database of beautiful icons to use in your app

* [Colour Contrast check](http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)

	Tool to check the readability of your colours, ensuring they're easy on the eyes

* [Abobe Color CC](https://color.adobe.com/create/color-wheel/)

	Great tool to design your colour palettes

* [Random User Generator](https://randomuser.me/) `randomuser.me`

	Random users for you to populate your app prototypes

* [Pttrns](http://pttrns.com/) `pttrns.com`

	See how other mobile designers solve UX problems for things like calculators, calendars, search and more

* [WTF Mobile Web](http://wtfmobileweb.com/) `wtfmobileweb.com`

	What not to do!

* [UI patterns](http://ui-patterns.com/) `ui-patterns.com`

	Great website for finding out the latest trends in user interface designs
