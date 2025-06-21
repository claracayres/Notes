## Sectioning tags
Use the following tags to organize your HTML document into structured sections.
```html
<header>
<!-- The header of a content section -->

<nav>
<!-- The mavigation links of a section or the web page -->

<footer>
<!-- The footer of a content section -->

<main>
<!-- The main content of a web page or an application -->

<aside>
<!-- The content of a sidebar or a secondary content section -->

<article>
<!-- A self-contained piece of content that is typically referenced as a single unit -->

<section>
<!-- A generic container for related content that doesn't have a more specific sectioning root element -->

<details>
<!-- A collapsed section of content that can be expanded if the user wishes to view it.  -->

<summary>
<!-- Specifies the summary or caption of a <details> element. -->

<h1><h2><h3><h4><h5><h6>
<!-- Headings on the web page. <h1> indicates the most important heading whereas <h6> indicates the least important. -->
```

## Content tags
```html
<blockquote>
<!-- Used to describe a quotation. -->

<dd>
<!-- Used to define a description for the preceding <dt> element. -->

<dl>
<!-- Used to define a description list. -->

<dt>
<!-- Used to describe terms inside <dl> elements. -->

<figcaption>
<!-- Defines a caption for a photo image. -->

<figure>
<!-- Applies markup to a photo image. -->

<hr>
<!-- Adds a horizontal line to the parent element. -->

<li>
<!-- Used to define an item within a list. -->

<menu>
<!-- A semantic alternative to <ul> tag. -->

<ol>
<!-- Defines an ordered list. -->

<p>
<!-- Defines a paragraph. -->

<pre>
<!-- Used to represent preformatted text. Typically rendered in the web browser using a monospace font. -->

<ul>
<!-- Unordered list -->
```

## Inline tags
```html
<a>
<!-- An anchor link to another HTML document. -->

<abbr>
<!-- Specifies that the containing text is an abbreviation or acronym. -->

<b>
<!-- Bolds the containing text. When used to indicate importance use <strong> instead. -->

<br>
<!-- A line break. Moves the subsequent text to a new line. -->

<cite>
<!-- Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the <cite> element is usually rendered in italics. -->

<code>
<!-- Indicates that the containing text is a block of computer code. -->

<data>
<!-- Indicates machine-readable data. -->

<em>
<!-- Emphasizes the containing text. -->

<i>
<!-- The containing text is displayed in italics. Used to indicate idiomatic text or technical terms. -->

<mark>
<!-- The containing text should be marked or highlighted. -->

<q>
<!-- The containing text is a short quotation. -->

<s>
<!-- Displays the containing text with a strikethrough or line through it. -->

<samp>
<!-- The containing text represents a sample. -->

<small>
<!-- Used to represent small text, such as copyright and legal text. -->

<span>
<!-- A generic element for grouping content for CSS styling. -->

<strong>
<!-- Displays the containing text in bold. Used to indicate importance. -->

<sub>
<!-- The containing text is subscript text, displayed with a lowered baseline. -->

<sup>
<!-- The containing text is superscript text, displayed with a raised baseline. -->

<time>
<!-- A semantic tag used to display both dates and times. -->

<u>
<!-- Displays the containing text with a solid underline. -->

<var>
<!-- The containing text is a variable in a mathematical expression. -->
```

## Embedded content and media tags
```html
<audio>
<!-- Used to embed audio in web pages. -->

<canvas>
<!-- Used to render 2D and 3D graphics on web pages. -->

<embed>
<!-- Used as a containing element for external content provided by an external application such as a media player or plug-in application. -->

<iframe>
<!-- sed to embed a nested web page. -->

<img>
<!-- Embeds an image on a web page. -->

<object>
<!-- Similar to <embed> but the content is provided by a web browser plug-in. -->

<picture>
<!-- An element that contains one <img> element and one or more <source> elements to offer alternative images for different displays/devices. -->

<video>
<!-- Embeds a video on a web page. -->

<source>
<!-- Specifies media resources for <picture>, <audio> and<video> elements. -->

<svg>
<!-- Used to define Scalable Vector Graphics within a web page. -->
```

## Table tags
```html
<table>
<!-- Defines a table element to display table data within a web page. -->

<thead>
<!-- Represents the header content of a table. Typically contains one <tr> element. -->

<tbody>
<!-- Represents the main content of a table. Contains one or more <tr>elements. -->

<tfoot>
<!-- Represents the footer content of a table. Typically contains one <tr> element. -->

<tr>
<!-- Represents a row in a table. Contains one or more <td> elements when used within <tbody> or <tfoot>. When used within <thead>, contains one or more <th> elements. -->

<td>
<!-- Represents a cell in a table. Contains the text content of the cell. -->

<th>
<!-- Defines a header cell of a table. Contains the text content of the header. -->

<caption>
<!-- Defines the caption of a table element. -->

<colgroup>
<!-- Defines a semantic group of one or more columns in a table for formatting. -->

<col>
<!-- Defines a semantic column in a table. -->
```

## Meta tags

Meta tags for SEO
```html
<meta name="description"/>
<!-- Specifies the description of a web page. -->

<meta name="title"/>
<!-- Specifies the title of a web page. -->

<meta name="author" content="name">
<!-- Specifies the author of a web page. -->

<meta name="language" content="english">
<!-- Specifies the language of a web page. -->

<meta name="robots" content="index, follow"/>
<!-- Specifies the instructions for search engine crawlers. -->

<meta name"google> />
<!--  Tells Google not to show the sitelinks search box for your page when showing search results. -->

<meta name="googlebot" content="notranslate"/>
<!-- Tells Googlebot not to translate the page. -->

<meta name="revised" content="Tuesday, June 17th, 2025, 7:27 pm" />
<!-- Specifies the date of the last revision of a web page. -->

<meta name="rating" content="safe for kids">
<!-- Specifies the rating of a web page. -->

<meta name="copyright" content="Copyright 2025">
<!-- Specifies the copyright information of a web page. -->
```

## Meta http-equiv="..."/> tags

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 
<!-- Specifies the character encoding of a web page. -->

<meta http-equiv="default-style"/>
<!-- Specifies the default style of a web page. -->

<meta http-equiv="refresh"/>
<!-- Specifies the time interval between page refreshes. -->

<meta http-equiv="Content-language"/>
<!-- Specifies the language of a web page. -->

<meta http-equiv="Cache-control" content="no-cache">
<!-- Specifies the caching behavior of a web page. -->
```
## Responsive design/mobile meta tags 
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<!-- Specifies the viewport settings for a web page. -->

<meta name="format-detection" content="telephone=yes"/>
<!-- Indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call . -->

<meta name="HandheldFriendly" content="true"/>
<!-- Indicates that a web page is optimized for handheld devices. -->
```

## Input types
### Button
Displays a clickable button.
```html
<input type="button" value="Click me" onclick="msg()"/>
```
Also, you can use the following attribute with the added benefit of being able to place content like text or images inside the tag.:
```html
<button onclick="alert('Are you sure?')">
    <img src="delete.png" />
    Delete
</button>
```
### Checkbox
Displays a checkbox that can be checked or unchecked.
```html
<input type="checkbox" id="cat" name="cat" value="cat"/>
<label for="cat"> I like cats</label>
<input type="checkbox" id="dog" name="dog" value="dog"/>
<label for="dog"> I like dogs</label>
```
### Radio
Displays a radio button that can be checked or unchecked.
```html
<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label> 
```
### Submit
Displays a submit button that can be clicked to submit a form.
```html
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```
### Text
Displays a text input field that can be filled in by the user.
```html
<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname"> 
```
### Password
Displays a password input field that can be filled in by the user, but the input is hidden for security reasons.
```html
<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd"> 
```
### Date
Displays a date input field that can be filled in by the user.
```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```
### Datetime-local
Displays a date and time input field that can be filled in by the user.
```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```
### Email
Displays an email input field that can be filled in by the user.
```html
<input type="email" id="email" name="email">
```
### File
Displays a file input field that can be used to upload a file.
```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```
### Hidden
Displays a hidden input field that can be used to store a value that is not visible to the user
```html
<input type="hidden" id="custId" name="custId" value="3487">
```
### Image
Displays an image input field that can be used to upload an image.
```html
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```
### Number
Displays a number input field that can be filled in by the user.
```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```
### Range
Displays a range input field that can be filled in by the user.
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```
### Reset
Displays a reset button that can be used to reset the form to its default state.
```html
<input type="reset">
```
### Search
Displays a search input field that can be filled in by the user.
```html
<input type="search" id="gsearch" name="gsearch">
```
### Time
Displays a time input field that can be filled in by the user.
```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```
### Tel
Displays a telephone number input field that can be filled in by the user.
```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```
### URL
Displays a URL input field that can be filled in by the user.
```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```
### Week
Displays a week input field that can be filled in by the user.
```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```
### Month
Displays a month input field that can be filled in by the user.
```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```
## Interactive form elements
###Required
```html
<input type="text" id="firstName" name="firstName" required> 
```
### Maxlength 
```html
<input type="text" id="description" name="description" maxlength="50"> 
```
### Minlength 
```html
<input type="password" id="password" name="password" minlength="8"> 
```
### Min and max attributes 
```html 
<input type="number" id="quantity" name="quantity" min="1" max="10"> 

<input type="range" id="volume" name="volume" min="1" max="100"> 
```
### Multiple
```html
<input type="file" id="gallery" name="gallery" multiple> 
```
### Pattern
```html
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > 
```

## Select tag
The `<select>` element is used to create a drop-down list.<br>
The `<select>` element is most often used in a form, to collect user input.<br>
The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).<br>
The id attribute is needed to associate the drop-down list with a label.<br>
The `<option>` tags inside the `<select>` element define the available options in the drop-down list.<br>
```html
<label for="colors">Choose a color:</label>

<select name="colors" id="colors">
  <option value="red">Red</option>
  <option value="purple">Purple</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
```
## Text area
The `<textarea>` element is used to create a multi-line text input field.
- `cols` defines the visible width of the text area. Default value is 20.
- `rows` defines the visible height of the text area. Default value is 10.
- `wrap` defines whether the text should wrap when it reaches the edge of the text area.
- `readonly` makes the text area read-only.
- `form` specifies which form the text area belongs to.
- `maxlength` specifies the maximum number of characters that may be entered in the text area.
- `minlength` specifies the minimum number of characters that must be entered in the text area.

## Field set
The `<fieldset>` element is used to group related form elements in a form.
- `legend` defines a caption for the fieldset.
- `disabled` makes the fieldset disabled.

## Data list
The `<datalist>` element is used to define a list of pre-defined options for input elements.
- `id` specifies the id of the datalist element.
- `form` specifies which form the datalist belongs to.
- `value` specifies the value of the option.

## Videos and audio
The `<video>` element is used to embed video content.
- `autoplay` specifies that the video should start playing as soon as it is loaded.
- `controls` specifies that video controls should be displayed.
- `height` specifies the height of the video player.
- `loop` specifies that the video should start playing again after it has finished.
- `muted` specifies that the audio should be muted.
- `preload` specifies whether the video should be preloaded or not.
- `width` specifies the width of the video player.

The `<audio>` element is used to embed audio content.
The `<source>` element is used to specify multiple video and audio files for the video element.

## Images
The `<img>` element is used to embed images in a document.
- `alt` specifies an alternate text for the image.
- `crossorigin` specifies how the browser should handle the image if it is loaded from a different origin.
- `height` specifies the height of the image.
- `ismap` specifies that the image should be used as a server-side image map.
- `longdesc` specifies a long description of the image.
- `referrerpolicy` specifies how the browser should handle the image if it is loaded from a different origin.
- `sizes` specifies the size of the image.
- `src` specifies the source of the image.
- `srcset` specifies a list of images to use in different situations.

The `<figure>` element is used to group a figure and its caption together. 
The `<figcaption>` elements are used to define a figure and its caption.
```html
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```
Like videos and audio, the web browser only supports specific file types. These file types are: 
- .APNG – Animated Portable Network Graphics 
- .AVIF – AV1 Image Format 
- .GIF – Graphics Interchange Format 
- .JPEG / .JPG – Joint Photographic Expert Group image format 
- .PNG – Portable Network Graphics 
- .SVG – Scalable Vector Graphics 
- .WEBP – Web Picture Format 

## iFrame
The `<iframe>` element is used to embed another document within the current HTML document.
- `frameborder` specifies the border of the iframe.
- `height` specifies the height of the iframe.
- `width` specifies the width of the iframe.
- `srcdoc` specifies the content of the iframe.
- `sandbox` specifies whether the iframe should be sandboxed or not.
    - allow-downloads Allows the user to download an item 
    - allow-forms Allows the user to submit forms 
    - allow-modals The resource can open modal windows 
    - allow-orientation-lock Lets the resource lock the screen orientation 
    - allow-popups Allows popups to open 
    - allow-presentation Allows a presentation session to start 
    - allow-scripts Lets the resource run scripts without creating popup windows
- `seamless` specifies whether the iframe should be seamless or not.
- `src` specifies the source of the iframe.
- `loading` specifies how the iframe should be loaded.
- `title` specifies the title of the iframe.

## Canvas
The `<canvas>` element is used to draw graphics, animations, and games.
- `height` specifies the height of the canvas.
- `width` specifies the width of the canvas.
- `style` attribute is used to specify the style of the canvas.
