# Accessibility

Broadly speaking, when we say a site is accessible, we mean that the site's content is available, and its functionality can be operated, by literally anyone. As developers, it's easy to assume that all users can see and use a keyboard, mouse, or touch screen, and can interact with your page content the same way you do. This can lead to an experience that works well for some people, but creates issues that range from simple annoyances to show-stoppers for others.

## It's the law

- The Equality Act (2010) concerns itself with any 'provision of service'.

- It does not refer to websites specifically, but the consensus is that it applies as much to

- commercial web services as it does to traditional services.

- It means that your blog is probably okay, but not your business web presence.

- Further clarity was added from 6 April 2011 with the Statutory Code of Practice for "Services, public functions and associations" under the EQA.

- This explicitly includes websites in the remit of the EQA - "Websites provide access to services and goods, and may in themselves constitute a service, for example, where they are delivering information or entertainment to the public."

## What's your obligation

- You must anticipate the needs of potential disabled customers in order to make reasonable adjustments.
- You must be able to prove you have taken reasonable steps in your approach.
- Thus a big company with lots of resources has no excuse under law for any failure
- But a small company or charity with limited resources (both monetary and staffing/expertise) will have more justification for failure to take some steps.

## Types of impairments

### Visual impairments

- Blindness - screen readers, alternate text for images/other content, screen-reader descriptions for interactive elements.

- Limited vision or poor eyesight - all of the above, plus graceful resizing of text

- Colour blindness - think about colour contrast in design

### Auditory impairments

- Deafness - Transcripts for videos, visual cues as well as audio ones for interactions / notifications.

- Hard of hearing - All of the above as well as reasonable sound volume / ability to control volume on video clips / audio clips

### Motor impairments

- Inability to use hands - Alternate navigation options (e.g. keyboard)

- Tremors / other muscular limitations - As above but also ensure clickable elements are large enough to tap/click if the user has poor muscle control => less accuracy when using mouse

### Cognitive impairments

- Problem solving / logic - Clarity of design, clear navigation paths, etc.

- Dyslexia - As above, also consider a HTML site map, break up text with graphics/media, screen reader friendliness.

## Accessibility Standards

- The W3C publishes the Web Content Accessibility Guidelines (WCAG 1.0 and 2.0)

- Applies to straightforward 'content' websites

- New websites should adhere to WCAG 2.0

- You can be A, AA, or AAA rated for WCAG 2.0 depending on the level of compliance

- It takes into account using the right HTML tags and attributes in the right context => ALT text on images, labels on form fields, lang attribute on document root etc.

- It encourages you to think about accessibility from the design phase too => Front End developers should be thinking about this and feeding back into design process

## Task
```
Download the WAVE Accessibility app and test out your app and portfolio, addressing any errors on the pages
```
We can address some of the errors together, but you'll definitely need google to help you with this one!

### Add navigation skip links

Add a skip link before your sites navigation - this should be the first thing you tab to, this will let you skip directly to your content, meaning you don't have to read out your nav every times


### Make sure your links and content are tabable

Use  `<element tabindex='x'>` attribute to the order your user tabs through things. Try navigating your site without a mouse and see if it works.

### Use landmark roles to assign your various HTML elements to important sections of a website

One of the easiest ARIA features to implement, and one that provides significant immediate benefits to screen reader users, is landmark roles. There are eight of these roles, each representing a block of content that occurs commonly on web pages. To use them, simply add a relevant role attribute to an appropriate container within your HTML. Then, screen reader users can quickly jump to that section of the page. The eight ARIA landmark roles are:

```
role=”banner”
role=”navigation” (e.g., a menu)
role=”main” (the main content of the page)
role=”complementary” (e.g., a sidebar)
role=”contentinfo” (meta data about the page, e.g., a copyright statement)
role=”search”
role=”form”
role=”application” (a web application with its own keyboard interface)
```

![landmark roles](https://c1.staticflickr.com/9/8096/8467120722_3e70a8c513_b.jpg)

### Use screan reader only text to apply instructions on your page

```
.sr-only {
    position: absolute;
    left: -99999px;
    width: 0;
    height: 0;
    overflow: hidden;
}
```

apply the `class='sr-only'` to your accessibility links to create "screenreader only" labels and instructions to your page.

### Colour friendly

Check your colours and branding - make sure it's colour friendly, using the WAVE app you can test for contract etc.


# Search engine Optimization

**Seach Engine Optimisation**, or SEO is the process of writing your content and managing your website structure so as to encourage relevant traffic to your website via organic searches on sites such as Google, Yahoo and Bing.

## Goals of SEO

- Appear higher in search results than rivals
- Improve click-though from organic search results pages
- Rank well for most appropriate searches - greater relevancy = greater chance of conversion
- Increase 'trust' of your website overall by search engines

## SEO Never Stops

**SEO is a continuous process for a number of reasons:**

- Your competitors are always updating their websites
- Search engines are always tweaking their ranking algorithms
- People's tastes are always evolving

**Fresh content is what keeps search engines coming back for more**

- But it needs to be appropriately tagged in your HTML to reap the best rewards
- Use what you know about semantic tagging to appropriately label your content
- Use what you know about the DOM tree to elevate the importance

## Leveraging the DOM

- Just as we read the DOM tree from the top down, so does a search engine
- The further down the tree your important content appears, the less important a search engine thinks it is

## Semantic Tags

Make use of more semantic HTML5 tags to make your page easier to read.

![](https://www.htmlgoodies.com/imagesvr_ce/5493/semantic000.png)

## HEAD Tags for SEO

- **Title** - the document title; should be 50-60 characters and should contain your primary and secondary keywords as well as your brand name

- **Meta description** - a concise summary of the page contents, should be ~300 characters long.

*This should be compelling for the reader, but try to include your keywords too!*

- **Robot meta tag** - Used to protect/control how a search bot (or any other bot indexes your site)

## Robots.txt file

- Used to give directives to all / individual search engines
- Directives tell the bots how to index your site's content
- Use the robots meta tag if you want more granular document-level control

## Sitemaps

- Sitemaps tell bots where to find your documents
- You can prioritize your content so that it knows which documents are most important
- You can mark the 'last update' for your documents so search engines can re-index updated pages
- Search engines can quickly read this file to see if you've added new pages


## Task

- Change some of your HTML Tags to be more semantic
- Add some meta tags to help SEO
- Add a robots.txt file
- Generate a sitemap at https://www.xml-sitemaps.com/ and add to your site's root.
