## Sectioning tags
Use the following tags to organize your HTML document into structured sections.
```
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
```
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
```
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
```
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
```
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
```
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

```
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
```
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<!-- Specifies the viewport settings for a web page. -->

<meta name="format-detection" content="telephone=yes"/>
<!-- Indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call . -->

<meta name="HandheldFriendly" content="true"/>
<!-- Indicates that a web page is optimized for handheld devices. -->
```