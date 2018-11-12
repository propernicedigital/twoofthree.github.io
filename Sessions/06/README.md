## Principles of Programming

There are lots of programming languages: JavaScript, Python, C, C++, Objective-C, Swift, Java, Ruby.

They share the same core principles, and the same **building blocks**:

1. **Variables** to store data
2. **Functions** to define reusable sets of instructions
3. **Logic** to make choices `if this then that`

What variables, functions and logic do you use in your everyday life (even if you don't call them so)?

* **Variables** weather (sunny, cloudy, warm, cold etc), date, location...
* **Functions** get out of bed, check the weather (on your phone, looking outside), check your calendar, make tea...
* **Logic** `if sunny then wear sunglasses`, `if rainy then take an umbrella`

Think about the [robot game](#robot-time): which variables, functions and logic did we use?

### Programming languages

So far we learned how to build interfaces using **HTML** + **CSS**.

As you've seen your interface, despite being very stylish, doesn't do much (yet).

To set things in motion, to have a truly interactive experience, we need another language: **JavaScript**.

##### **HTML** → content and structure  

##### **CSS** → style and design

##### **JS** → behaviour and logic

HTML and CSS are coding languages.

JavaScript is a programming language (together with PHP, Python, Ruby, Java and many others).

### Meet JS

**JavaScript lives in every browser**. You don't need to install anything, it's already there.

We'll use the [**JavaScript Console**](http://webmasters.stackexchange.com/a/77337) to learn with a few basic JS tricks.

> Open your browser JavaScript Console by pressing <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>J</kbd>.

> ![](assets/console.png)

We don't normally write JS in the Console. Instead, we write our JS programs in a code editor like Thimble (or [Sublime](http://www.sublimetext.com), [Brackets](http://brackets.io) etc) and store them as `.js` files.

The Console is an essential **testing tool** for people who write JavaScript. Why do we need it? Because JS is *invisible*.

When we write HTML and CSS, we can see the results of our code rendered by the browser.

**JS instead doesn't show up on the page**! It does a lot of stuff behind the scenes (like loading, sorting, storing and comparing data) which we can't see.

Yet, it is very useful when writing JS, to check that our code is running properly, that it doesn't have errors, and that it has all the data it needs at the right time.

Using the Console, we can make JS *visible*. In other words, we can get JS to leave some *traces* inside the Console.

Using the Console is like having a chat with your browser. As long as you talk JS, the browser will talk back to you.

```javascript
hello

"hello"

```

Notice the difference between words with **speech marks** (the browser interprets them as *strings* and just parrots them) and words without speech marks...

#### Variables

```javascript
var greeting = "hello"

greeting

greeting = "hej"

greeting

```

You can use **variables** to get the browser to remember things.

#### Functions

The browser can perform certain *actions* natively, like humans can natively breath.

```javascript
alert("ciao")

alert(greeting)

prompt("How do you say hello in your language?")

var userName = prompt("What's your name?")

var userAge = prompt("How old are you?")

```

These actions are called **functions**.

Functions are useful to **make code reusable**.

You can also teach the browser how to do stuff, by **defining your own functions**

#### Objects

```javascript
cat

var cat = {}

cat.name = "Bill"

cat

cat.favouriteDrink = "herbal tea"

```

**Objects** are useful to keep things organised.

If a *variable* is like a *jar* that contains one thing, an *object* is like a *fridge* which stores many things in a more/less organised way.

```javascript
cat.meow = function(){ alert("MEOOOOOOW") }

cat.meow()

cat.drink = function(beverage){ alert("I am drinking " + beverage) }

cat.drink("milk")

cat.drink("tea")

cat.drink("beer")

cat.drink(cat.favouriteDrink)

```

You can add pretty much anything to objects, including functions.

You can see how functions **make code reusable**. For instance, the action of *drinking* remains the same, no matter what you are drinking.

Now that you're familiar with the basic building blocks of JS ([variables](#variables), [functions](#functions) and [objects](#objects)), keep in mind that the Console is the **most useful tool** when you develop JS code and you want to quickly test it. Every JS developer uses it, every day!


# JavaScript essentials

<!--JavaScript can look a little scary at first.-->

Let's look at some key *tools*, before we dig into your app code:

1. [Variables](#variables)
* [Objects](#objects)
* [If statements](#if-this-then-that)
* [Functions](#functions)
* The [Console](#console)


## Variables

Variables are like *boxes* where you can store data.

To create a variable, you write

```javascript
var
```

then give it a **name**

```javascript
var fruit
```

and put its **value** after the `=` sign

```javascript
var fruit = "apple";
```

Now your variable is called `fruit` and has an `apple` inside it.

<!--
#### How to use a variable

To use a variable, we must

1. *declare* it: give it a **label**
* *assign* it: give it a **value**
-->

### How do you name variables?

* Variable names should be **clear and meaningful**: `fruit` is better than `f`
* Variable names must begin with letters, `$` or `_` and only contain letters, numbers, `$` and `_`
* Variable names are **case sensitive**, which means that `myFruit` is different to `myfruit` or `MyFruit` or `MYFRUIT`
* Variable names cannot have spaces, so you can use [*camel case*](http://en.wikipedia.org/wiki/CamelCase) for variables like `userTelephoneNumber`, which is easier to read than `usertelephonenumber`.

## Objects

An **object** is a special type of *variable*, which stores several pieces of information at once.

It is useful to keep things organised!

To create an object, you *declare* a variable as usual with `var` followed by a name and `=` and then you put a pair of *curly brackets*.

<!--
 to surround **key-value** property pairs:

```js
var objectName = {
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
```
-->

```js
var person = {};
```

You can then add **properties** to the object like this

```js
person.name = "Jonny";
person.codingSkills = 3;
person.singingSkills = 0;
```

### How do you access objects?

An object is not useful unless we can look inside it and grab the *values* of its *properties*.

You can do that using *dot notation*, where you write the variable name followed by a `.` and then the property name

```js
person.name
```

## Comparing data

JavaScript is very good at comparing data.

Say we wanted to know whether the `name` of a `person` was `Harry`:

```js
person.name == "Harry"
```

In English, this would translate to: if the value of `name` is equal to `Harry`, then spit out `true`. And if not, spit out `false`.

Notice this subtle but important difference:

1. `=` is to **store** data
*  `==` is to **check** if two values are the same

### If *this* then *that*

You may want your app to do different things depending on the result of a comparison. For instance:

```javascript
if (person.age < 18) {
	alert("You are not technically an adult");
} else {
	alert("But are you really an adult?");
}
```

So, **if** the `age` property of `person` is lower than `18` an alert will pop up, saying `"You are not technically an adult"`. Otherwise (aka **else**) if `age` is equal to or bigger than `18`, the alert will say `"But are you really an adult?"`

This is really handy for searching through databases. For instance, when you search for something on Google, they use lots of *if statements* to sort through all the millions of pages to find results that match your search words.

### Variables values can be defined from an input

Copy and paste this code into your console

```javascript
person.age = prompt()

if (person.age < 18) {
	alert("You are not technically an adult");
} else {
	alert("But are you really an adult?");
}
```

## Functions

Functions are sets of instructions, packaged nicely for us to use over and over.

Functions make code **reusable**.

<!--
For instance, you could make a function to teach a *robot* how to `drink` something. The steps required to perform a drinking task remain the same, no matter what the robot is drinking.

```javascript
robot.drink("tea");
robot.drink("water");
robot.drink("coffee");
```
-->

Remember, you use functions of sorts everyday to do simple tasks. For instance, to *make tea*!

A function for making tea might have these steps:

1. Are there teabags?

	If not: exit the function. No tea this time :(

	Else: continue...
* Fill the kettle with water (we assume there is a working kettle, and we have access to water)  
* Turn the kettle on.
* Is the water boiling?

	If not: wait `X` seconds and then check again...

	Else: continue...
* Get a clean cup (we assume there is one and it's in your reach)  
* Put the teabag in the cup
* Pour `Y` ml of water in the cup.
* Is the cup full?

	If not: go to the previous step (that is, pour some more water)

	Else: proceed to the next step
* **Return** the tea!

<!--
 look like this (not actual JS, just the logical steps)

```
function makeTea ( whichTea, howMuchSugar, howMuchMilk ) {   
	1. check for teabags of whichTea type   
	2. fill the kettle   
	3. boil the water   
	4. get a clean cup   
	5. put teabag in the cup
	6. if howMuchSugar is more than zero, and we have sugar, then add howMuchSugar to the cup
	7. if howMuchMilk is more than zero, and we have milk, then add howMuchMilk to the cup  
	8. return the tea!
}
```
-->

It would be exhausting for us to explain all of those individual steps every time we wanted to ask someone for a cup of tea!

Likewise, if you want your app to perform a set of actions more than once, it makes sense to wrap those actions in a function.

For example, you can *declare* a function that checks the `age` of a person:

```js
function isAdult(age) {
	var answer;
	if (age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	}
	return answer;
};
```

The code above *explains* to your app how to check if someone is an adult.

You can then run that function on some actual data:

```js
isAdult(16); // returns "no"
isAdult(23); // returns "yes"
isAdult(person.age); // returns "yes" or "no", depending on what you have actually stored in person.age
```

So, to use a function you must

1. *Declare* it. Give it a **name** and teach the computer all the **steps** required to perform it
2. *Call* it. Tell the computer to **execute** the code inside the function, by writing its name followed by *round brackets* `()`

	In between *round brackets* `()` we can pass one or more *variables* to the function.

<!--
	If we call the `checkForPears()` function and pass through `"apple"` as our variable (in the `objectToCheck` spot), then JavaScript will execute the instructions placing `"apple"` wherever `objectToCheck` was. The process (although we can't see it happening) would be something like this:

	![](assets/functions_pear.jpg)

More examples:

```javascript
checkForPears("banana");
checkForPears("coconut");
checkForPears("plum");
var lastFruitInTheFridge = "kiwi";
checkForPears(lastFruitInTheFridge);
```
-->

The variables we *pass* to a function in between *round brackets* `()` will be used inside the function as the temporary value for `age`.

Variables inside a function are very useful, because they make the function **reusable**.

<!--
### Arguments

`checkForPears` is a **reusable** function. What makes it **flexible**?

It's `fruit`, a [variable](#variables) which lives inside the `checkForPears` function.

`I'm hungry` and `I need a nap` are called **arguments** ([don't argue, that's what they're called](http://programmers.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments)) and they are the actual values that we *pass* to a function.
-->
<!--
#### What happens in a function, stays in a function

There's another powerful thing we can do with functions: we can use them to take in some values, *compute* them, and then *return* a new value.

```js
function areYouAnAdult(age) {
	var answer;
	if (age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	}
	return answer;
};
```

`return` does two things:

1. it gives a value back
2. it immediately exits the function

```js
areYouAnAdult(16); // returns "no"
areYouAnAdult(23); // returns "yes"
```

Without `return` we wouldn't know the answer!
-->


### Functions in objects

Objects can contain functions!

Remember the `person` object?

See how it might look with some functions inside.

```js
person.isAdult = function() {
	var answer;
	if (this.age < 18) {
	 	answer = "no";
	} else {
	 	answer = "yes";
	}
	return answer;
}
```
<!--
Which parts are the functions?

What would happen if we wrote `cat.drink( water )`?
-->

## Console

[Last week](../02#meet-js) we played around with JS using the browser Console.

We don't normally write JS in the Console. Instead, we write our JS programs in a code editor like Thimble (or [Sublime](http://www.sublimetext.com), [Brackets](http://brackets.io) etc) and store them as `.js` files.

The Console is an essential **testing tool** for people who write JavaScript.

Why do we need it? Because **JS is invisible**.

When we write HTML and CSS, we can see the results of our code rendered by the browser.

**JS instead doesn't show up on the page**! It does a lot of stuff behind the scenes (like loading, sorting, storing and comparing data) which we can't see.

When writing JS, it is very useful to check that our code is running properly, that it doesn't have errors, and that it has all the data it needs at the right time.

Using the Console, we can make JS *visible*. In other words, we can get JS to leave some *traces* inside the Console.

For example, you can use the Console to check what's inside your `person` object by writing this...

```javascript
console.log( person );
```

... which will display everything that's inside `person` in the Console.

![](assets/console.log-person.png)

Click the `➤` next to `Object` to open the object up and see what's inside it.

You could also check if the person is an adult
```javascript
console.log( person.isAdult() );
```

Puzzled? Don't worry, you'll understand why the Console's log is useful. The Console will tell you exactly *what* the *error* is and *where* to find it!


# Coding and app-making for beginners

## Day 3 PM

Back to the brief...

### Make an **app** that helps people sort through **data** to **find who/what they are looking for**

<!--(eg: people in their community to do something together).-->

<!--Remember the [computational thinking](../02#computational-thinking) method?-->

1. First we'll [break down the brief](#first-break-down-the-brief) into smaller chunks, *specifying* how each one could work. This process is what **designing algorithms** is about.
* Once we have a good understanding of how our app will behave, we can [**code** those algorithms](#then-code-the-algorithms).

## First: break down the brief

We need four volunteers (and post-its).

1. The **user** (talks only to HTML)
2. The **HTML** character (talks only to the user, on request)
3. The **JS** character (can talk to both HTML and database)
4. The **database** character (talks only to JS, on request)

HTML and JS are siblings or colleagues (they are part of the same app) so they should stand closer, maybe hold hands :)

Let's play out the app behaviour.

<!--Question: Should JS load data immediately or wait for user input? That is, should we wait for a shopping list or buy the whole store?

If the dataset is small, we may as well load it all and then present only what users ask for. This way they won't have to wait.. -->

1. **Load all data** from our database
* Capture **user input**
* **Filter and sort data** according to user choices
* **Output** filtered+sorted data

### But hang on... where is our *actual* database?

We're going to use a cloud-based real-time **database** service called [Firebase](https://www.firebase.google.com). There are several other solutions, including building your own database, however we chose Firebase because of its performance, features and good documentation.

Many companies use Firebase to **rapidly prototype** app ideas, without investing time and money on database infrastructure and software.

**Go ahead and sign up to firebase.**

- We'll be using a "realtime database"
- Create your data using the data.json sample
- Validate your data at: https://jsonlint.com/
- Import that data

So now we have a database.

By default the database is set to private. This means only people with a key can read or write to it.

For our project we are going to set our database to public to make the data easily accessible.

> 1. Find and click `Database` on the left-hand pane
> * Then select `Rules` on the top bar.
> * Delete the code that is in there currently and paste in
```js
{
 "rules": {
	 ".read": true,
	 ".write": true
 }
}
```
> * Now click `Publish`

## Now let's add some data

One your firebase, click on database in the left hand panel. Next to the name of your database, click the green plus button to make an entry. This can be anything you like, i.e. `name: "Harry"`. Finally click `Add`.

Now that we have data in our Firebase database, we can load it into our app and do stuff with it!

> Go to [thimble.mozilla.org](https://thimble.mozilla.org/) and log in. Then open your project from last week.

> Create a new file and call it `app.js`.

Like with CSS, we need to tell `index.html` to load our JS file.

> At the end of `body` in `index.html`, add a `script` and point it to `app.js` like so:

> ```html
	...
	<script src="app.js"></script>
</body>
</html>
```

Your JS file is connected to `index.html`! Now you can write your JS code in `app.js`.

The browser will read and execute `app.js` every time you load/refresh your app.

<!-- Do a console.log first -->

### 1. Load data and store it in the app memory

*Where* is our data?

We need to know where to load data from, for this we need a **URL**. You can think of it as the *address* or *phone number* of your data.

`"codeyourapp.firebaseio.com"`

Your browser can do [many things out-of-the-box](https://developer.mozilla.org/en/docs/Web/API), for instance: giving you scarily accurate geolocation coordinates, playing audios and videos, doing maths, convert text into voices etc.

Yet your browser doesn't know how Firebase works, because Firebase doesn't come pre-installed.

Before you can use Firebase in your app, you must **install the Firebase JS library**.

1. On Firebase click overview (in the top left)
2. Add Firebase to your web app (pink button)
3. Firebase will generate some code that you will need to paste at the end of `body` in `index.html`, just before the other `script` which points to `app.js`
![Add firebase to your webapp](assets/add_firebase_webapp.png)

To allow our application to speak to Firebase it needs to have the right authentication. You can imagine this is like having the right keys to your door.

Now that your browser knows what Firebase is and how to acces it, you can create a `data` *variable* that we will add all of our data to.

> In `app.js`:

> ```js
var data = [];
```

Usually in large databases there are many different types of data. For example, user information and websites information such as FAQs.

However for now we are going to get all of our database entries in one object.

By reading the Firebase [documentation](https://firebase.google.com/docs/database/admin/retrieve-data#section-reading-once) we can work out how to access our database information.

Create a function called getData

```js
function getData(){

}
```
#### Firebase jargon
```js
function getData(){
  firebase.database().ref().once('value').then(function(snapshot) {
  });
}
```
Let's break this down.

```js
function getData(){
  firebase.database().ref().once('value').then(function(snapshot) {
    var data = snapshot.val();
  });
}
```
Console log it!

[![](http://www.interfacesketch.com/previews/generic-smartphones.png)](http://www.interfacesketch.com)
-->
