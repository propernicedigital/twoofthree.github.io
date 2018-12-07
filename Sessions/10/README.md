# Final session!

**We made it!** Congratulations guys, you've all become amazing front end developers.

By now you should have a webpage CV, a working real time web app and a landing page to show you off to potential employers or freelance clients!

Further your pages should be:

- Built with semantic HTML
- Beautiful CSS
- Fully responsive
- Accessible to WCAG AA rating!

And whilst that's amazing, there's one more thing we need to do:

**Optimize.**

## What is optimization?

Optimization for web is the practice of making your your web pages performant for the user and also performant for search engine crawlers - giving you higher search results!

### Testing performance

The best way to test your websites performance is using googles [Page speed insights](https://developers.google.com/speed/pagespeed/insights/). This will test for:

- Image Optimization
- File minification
- Deferred loading
- Server response time
- Requests
- "Above the fold" loading

> Let's run our first text on your github pages web app url

### How to optimize your website or app

#### Image Optimization

You can achieve this by:
- Resize the images to a smaller size
- Save for web using photoshop
- Resources such as:
 * TinyPNG
 * TinyJPG

Save your images with a lower quality (60 is a good score) and strip any unecessary meta data, remember - were viewing this images on the web not printing them.

#### File minification

Create a second version of your CSS and JS files and run them through a file minifier, this can shave KBs off your file sizes by removing unecessary white-space and line breaks that the browser doesn't need to read the file! Make sure it's a copy so the file is still editable.

#### Reduce requests

Merge your JS and CSS files into one minified file! The browser then can load all of your JS and CSS in one go instead of through multiple requests

#### Deferred loading

Use lazy loading tools to defer your images from loading until you scroll them into view.

#### Render blocking scripts

Load your javascript files at the bottom of the page just above the closing body tag... Remember the browser reads your page from top to bottom and your visual elements should load first!

> Repeat the steps above and re run your site through pagespeed insights to see your new score.

You can now replicate these methods on your other pages!

> Let's celebrate!
