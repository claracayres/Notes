# Units of measurement

CSS provides various units of measurement for defining sizes, distances, and dimensions. These units are divided into two main categories: absolute and relative units.

## Absolute Units

Absolute units have fixed values and do not change based on other elements or the viewport. They are useful when you need precise, unchanging measurements.

| Unit | Name | Comparison |
|------|------|------------|
| Q | Quarter-millimeters | 1Q = 1/40th of 1cm |
| mm | Millimeters | 1mm = 1/10th of 1cm |
| cm | Centimeters | 1cm = 37.8px = 25.2/64in |
| in | Inches | 1in = 2.54cm = 96px |
| pc | Picas | 1pc = 1/6th of 1in |
| pt | Points | 1pt = 1/72nd of 1in |
| px | Pixels | 1px = 1/96th of 1in |

Of these, **pixels (px)** and **centimeters (cm)** are most frequently used for defining properties.

## Relative Units

Relative units define sizes based on the properties of parent elements or the viewport, making layouts flexible and responsive. They adapt to different screen sizes and contexts, which is essential for modern web design. Common use cases include scaling fonts, spacing, and containers to ensure consistency across devices.

| Unit | Description and Relativity |
|------|----------------------------|
| em | Font size of the parent where present |
| ex | x-coordinate or height of the font element |
| ch | Width of the font character |
| rem | Font size of the root element |
| lh | Value computed for line height of parent element |
| rlh | Value computed for line height of root element which is `<html>` |
| vw | 1% of the viewport width |
| vh | 1% of the viewport height |
| vmin | 1% of the smaller dimension of viewport |
| vmax | 1% of the larger dimension of viewport |
| % | Denotes a percentage value in relation to its parent element |

## Usage Examples

### Absolute Units
```css
.container {
    width: 300px;        /* Fixed pixel width */
    height: 200px;       /* Fixed pixel height */
    border: 2pt solid;   /* Border in points */
    margin: 1cm;         /* Margin in centimeters */
}
```

### Relative Units
```css
.responsive-container {
    width: 100%;         /* Full width of parent */
    height: 50vh;        /* Half viewport height */
    font-size: 1.2em;    /* 1.2 times parent font size */
    padding: 2rem;       /* Based on root font size */
}

.text-container {
    width: 60ch;         /* 60 characters wide */
    line-height: 1.5lh;  /* 1.5 times line height */
}
```

### Viewport Units
```css
.hero-section {
    width: 100vw;        /* Full viewport width */
    height: 100vh;       /* Full viewport height */
    min-height: 100vmin; /* Full smaller viewport dimension */
}
```

## Best Practices

1. **Use `rem` for font sizes** - Consistent scaling based on root font size
2. **Use `em` for padding/margins** - Scales with element's font size
3. **Use viewport units (vw, vh)** for full-screen sections
4. **Use percentages** for responsive layouts
5. **Use pixels** for borders, shadows, and fine details
6. **Avoid absolute units** for responsive design (except px for small details)

## Common Patterns

### Responsive Typography
```css
html {
    font-size: 16px; /* Base size */
}

h1 {
    font-size: 2rem;    /* 32px */
    margin-bottom: 1em; /* 32px (relative to h1's font size) */
}

p {
    font-size: 1rem;    /* 16px */
    line-height: 1.5;   /* 24px */
    margin-bottom: 1em; /* 16px */
}
```

### Flexible Containers
```css
.card {
    width: clamp(300px, 50%, 600px); /* Responsive with limits */
    padding: 1rem 2rem;              /* Relative padding */
    margin: 2vh auto;                /* Viewport-based margin */
}
```

### Character-based Layouts
```css
.text-block {
    max-width: 65ch;     /* Optimal reading width */
    margin: 0 auto;      /* Center alignment */
    line-height: 1.6;    /* Readable line spacing */
}
```

# CSS Grid

CSS Grid Layout is a powerful two-dimensional layout system that allows you to organize elements on your page in rows and columns. Grids are useful for arranging items in a structured and responsive way.

## Basic Grid Setup

```css
.grid {
    display: grid; /* or inline-grid */
}
```

## Grid Shorthand Properties

The `grid` shorthand consists of the following properties with their default values:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `grid-template-rows` | `none` | Configure elements organized like table rows |
| `grid-template-columns` | `none` | Configure elements organized like table columns |
| `grid-template-areas` | `none` | Configure named grid areas and their relationships |
| `grid-auto-rows` | `auto` | Default setting for all row sizes not explicitly configured |
| `grid-auto-columns` | `auto` | Default setting for all column sizes not explicitly configured |
| `grid-auto-flow` | `row` | Default location for items not explicitly allocated |
| `column-gap` | `normal` | Gap between columns |
| `row-gap` | `normal` | Gap between rows |

## Grid Container Properties

### Template Definition

#### grid-template-columns
Defines column line names and maintains constant column sizes.

```css
.grid {
    grid-template-columns: 200px 1fr 100px;           /* Fixed, flexible, fixed */
    grid-template-columns: repeat(3, 1fr);            /* Three equal columns */
    grid-template-columns: repeat(auto-fit, 200px);   /* Auto-fitting columns */
    grid-template-columns: 25% 50% 25%;               /* Percentage-based */
}
```

#### grid-template-rows
Defines row line names and maintains constant row sizes.

```css
.grid {
    grid-template-rows: 100px auto 50px;              /* Fixed, flexible, fixed */
    grid-template-rows: repeat(3, 1fr);               /* Three equal rows */
    grid-template-rows: minmax(100px, auto);          /* Minimum 100px, flexible */
}
```

#### grid-template-areas
Defines named grid areas for easier layout management.

```css
.grid {
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

#### grid-template
Shorthand for defining the grid structure with named areas.

```css
.grid {
    grid-template: 
        "header header" auto
        "main right" 75vh
        "footer footer" 20rem;
}
```

### Auto-sizing

#### grid-auto-columns
Determines default size for columns not explicitly configured.

```css
.grid {
    grid-auto-columns: 200px;        /* Fixed size */
    grid-auto-columns: minmax(100px, 1fr); /* Flexible with minimum */
}
```

#### grid-auto-rows
Determines default size for rows not explicitly configured.

```css
.grid {
    grid-auto-rows: 100px;           /* Fixed size */
    grid-auto-rows: minmax(50px, auto); /* Flexible with minimum */
}
```

### Gap Properties

#### gap
Sets spacing between grid items.

```css
.grid {
    gap: 20px;                       /* Uniform gap */
    gap: 20px 10px;                  /* Row gap, column gap */
    grid-gap: 20px;                  /* Legacy syntax */
}
```

#### Individual Gap Control

```css
.grid {
    grid-column-gap: 20px;           /* Gap between columns */
    grid-row-gap: 15px;              /* Gap between rows */
}
```

### Alignment Properties

#### Items Alignment

```css
.grid {
    justify-items: start | center | end | stretch;    /* Horizontal alignment */
    align-items: start | center | end | stretch;      /* Vertical alignment */
    place-items: center;                               /* Shorthand for both */
}
```

#### Content Alignment

```css
.grid {
    justify-content: start | center | end | stretch | space-between | space-evenly | space-around;
    align-content: start | center | end | stretch | space-between | space-evenly | space-around;
    place-content: center start;                       /* Shorthand for both */
}
```

### Auto Flow

#### grid-auto-flow
Controls how auto-placed items are inserted into the grid.

```css
.grid {
    grid-auto-flow: row;             /* Fill rows first (default) */
    grid-auto-flow: column;          /* Fill columns first */
    grid-auto-flow: dense;           /* Fill gaps with smaller items */
    grid-auto-flow: row dense;       /* Combine row flow with dense packing */
}
```

## Grid Item Properties

### Positioning

#### Column Positioning

```css
.item {
    grid-column: 1 / 3;              /* Span from column 1 to 3 */
    grid-column: 2 / span 2;         /* Start at column 2, span 2 columns */
    grid-column-start: 1;            /* Start at column line 1 */
    grid-column-end: -1;             /* End at last column line */
}
```

#### Row Positioning

```css
.item {
    grid-row: 1 / 3;                 /* Span from row 1 to 3 */
    grid-row: 2 / span 2;            /* Start at row 2, span 2 rows */
    grid-row-start: 1;               /* Start at row line 1 */
    grid-row-end: -1;                /* End at last row line */
}
```

### Item Alignment

```css
.item {
    justify-self: start | center | end | stretch;     /* Horizontal alignment */
    align-self: start | center | end | stretch;       /* Vertical alignment */
    place-self: center stretch;                       /* Shorthand for both */
}
```

## Practical Examples

### Basic Grid Layout

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;             /* Span all columns */
}

.footer {
    grid-column: 1 / -1;             /* Span all columns */
}
```

### Responsive Grid

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Named Areas Layout

```css
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "nav footer aside";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.asidery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 10px;
}

.featured {
    grid-column: 1 / 3;              /* Span 2 columns */
    grid-row: 1 / 3;                 /* Span 2 rows */
}

.overlay {
    grid-column: 2 / 4;              /* Overlapping area */
    grid-row: 2 / 4;
    z-index: 2;                      /* Layer on top */
}
```

## Best Practices

1. **Use `fr` units** for flexible layouts
2. **Combine with `minmax()`** for responsive behavior
3. **Use named grid areas** for complex layouts
4. **Prefer `gap`** over margins for spacing
5. **Use `auto-fit` and `auto-fill`** for responsive grids
6. **Consider mobile-first** approach with media queries

## Grid vs Flexbox

| Use Grid When | Use Flexbox When |
|---------------|------------------|
| 2D layouts (rows AND columns) | 1D layouts (single direction) |
| Complex positioning needed | Simple alignment needed |
| Layout structure is known | Content determines layout |
| Grid-like designs | Navigation bars, toolbars |

## Common Patterns

### Holy Grail Layout

```css
.holy-grail {
    display: grid;
    grid-template: 
        "header header header" auto
        "nav main aside" 1fr
        "footer footer footer" auto / 
        200px 1fr 200px;
    min-height: 100vh;
}
```

### Magazine Layout

```css
.magazine {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.article {
    grid-column: 1 / span 8;      /* Main content spans 8 columns */
}

.sidebar {
    grid-column: 9 / span 4;      /* Sidebar spans last 4 columns */
}

.feature {
    grid-column: 1 / -1;          /* Full width across all columns */
    grid-row: span 2;             /* Spans two rows for extra height */
}
```

# CSS Selectors Cheat Sheet

CSS selectors are used to select elements in an HTML document. They are used in conjunction with CSS properties to apply styles to the selected elements.

## Simple Selectors

| Selector | Syntax | Example | Description |
|----------|--------|---------|-------------|
| Element | `element` | `div { }` | Selects all elements of specified type |
| Class | `.class` | `.alpha { }` | Selects elements with specified class |
| ID | `#id` | `#alpha { }` | Selects element with specified ID |
| Universal | `*` | `* { }` | Selects all elements |

## Variations of Simple Selectors

| Elements | Syntax | Example | Description |
|----------|--------|---------|-------------|
| Two classes | `.first-class.second-class` | `.alpha.beta { }` | All elements with both classes |
| Element and class | `element.class` | `p.alpha { }` | All alpha class elements inside `<p>` |
| Multiple elements | `element, element` | `p, div { }` | All `<p>` and `<div>` elements |
| Descendant | `element element` | `p div { }` | All `<div>` elements inside `<p>` |

## Descendant Selectors/Combinators

| Selector | Syntax | Example | Description |
|----------|--------|---------|-------------|
| Descendant | `element element` | `div p { }` | All `<p>` descendants of `<div>` |
| Child | `element > element` | `div > p { }` | All `<p>` direct children of `<div>` |
| Adjacent Sibling | `element + element` | `div + p { }` | `<p>` element directly after `<div>` |
| General Sibling | `element ~ element` | `div ~ p { }` | All `<p>` element iterations after `<div>` |

## Attribute Selectors

| Selector | Syntax | Example | Description |
|----------|--------|---------|-------------|
| `[attribute]` | `[attribute]` | `[href] { }` | Elements with specified attribute |
| `[attribute=value]` | `[attribute=value]` | `[lang="fr"] { }` | Elements with attribute equal to value |
| `[attribute~=value]` | `[attribute~=value]` | `[input~=hello] { }` | Elements with attribute containing whitespace-separated substring |
| `[attribute/=value]` | `[attribute/=value]` | `[lang/=en] { }` | Elements with attribute equal to value or value followed by hyphen |
| `[attribute^=value]` | `[attribute^=value]` | `a[href^="https"] { }` | Elements with attribute value beginning with specified string |
| `[attribute$=value]` | `[attribute$=value]` | `a[href$=".docx"] { }` | Elements with attribute value ending with specified string |
| `[attribute*=value]` | `[attribute*=value]` | `a[href*="meta"] { }` | Elements with attribute value containing specified substring |

## Pseudo-Classes

### Interactive States
| Pseudo-Class | Example | Description |
|--------------|---------|-------------|
| `:hover` | `p:hover { }` | Element on mouse hover |
| `:active` | `a:active { }` | All active links |
| `:focus` | `input:focus { }` | Input element under focus |
| `:visited` | `a:visited { }` | All visited links |
| `:link` | `a:link { }` | All unvisited links |

### Form States
| Pseudo-Class | Example | Description |
|--------------|---------|-------------|
| `:checked` | `input:checked { }` | All checked `<input>` elements |
| `:disabled` | `input:disabled { }` | All disabled `<input>` elements |
| `:enabled` | `input:enabled { }` | All enabled `<input>` elements |
| `:default` | `input:default { }` | All default `<input>` elements |
| `:invalid` | `input:invalid { }` | Input elements with invalid value |
| `:valid` | `input:valid { }` | Input elements with valid value |
| `:required` | `input:required { }` | Input elements with "required" attribute |
| `:optional` | `input:optional { }` | Input elements with no "required" attribute |

### Structural Pseudo-Classes
| Pseudo-Class | Example | Description |
|--------------|---------|-------------|
| `:first-child` | `p:first-child { }` | Elements that are first child of parent |
| `:last-child` | `p:last-child { }` | Elements that are last child of parent |
| `:only-child` | `p:only-child { }` | Elements that are only child of parent |
| `:first-of-type` | `p:first-of-type { }` | First element of its type within parent |
| `:last-of-type` | `p:last-of-type { }` | Last element of its type within parent |
| `:only-of-type` | `p:only-of-type { }` | Only element of its type within parent |
| `:nth-child(n)` | `div:nth-child(3) { }` | Elements that are nth child of parent |
| `:nth-last-child(n)` | `div:nth-last-child(3) { }` | Elements that are nth child from end |
| `:nth-of-type(n)` | `p:nth-of-type(2) { }` | Second sibling of its type |
| `:nth-last-of-type(n)` | `p:nth-last-of-type(2) { }` | Second sibling of its type from end |

### Other Pseudo-Classes
| Pseudo-Class | Example | Description |
|--------------|---------|-------------|
| `:empty` | `div:empty { }` | Elements with no children |
| `:not(selector)` | `:not(div) { }` | Elements that don't match selector |
| `:root` | `:root { }` | Root element of document |
| `:fullscreen` | `:fullscreen { }` | Element in full-screen mode |

## Pseudo-Elements

| Pseudo-Element | Example | Description |
|----------------|---------|-------------|
| `::before` | `p::before { }` | Inserts content before element content |
| `::after` | `p::after { }` | Inserts content after element content |
| `::first-letter` | `p::first-letter { }` | First letter of element |
| `::first-line` | `p::first-line { }` | First line of element |
| `::selection` | `::selection { }` | Portion of element selected by user |
| `::placeholder` | `input::placeholder { }` | Placeholder text of input elements |
| `::marker` | `::marker { }` | Markers in a list |

## Practical Examples

### Basic Selectors in Action
```css
/* Element selector */
h1 {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#main-header {
    font-size: 2rem;
}

/* Universal selector */
* {
    box-sizing: border-box;
}
```

### Combinators Examples
```css
/* Descendant selector */
article p {
    line-height: 1.6;
}

/* Child selector */
nav > ul {
    list-style: none;
}

/* Adjacent sibling */
h2 + p {
    margin-top: 0;
}

/* General sibling */
h2 ~ p {
    color: #666;
}
```

### Attribute Selectors Examples
```css
/* Elements with href attribute */
[href] {
    color: blue;
}

/* External links */
a[href^="http"] {
    color: red;
}

/* PDF links */
a[href$=".pdf"]::after {
    content: " (PDF)";
}

/* Links containing specific text */
a[href*="download"] {
    font-weight: bold;
}
```

### Pseudo-Classes Examples
```css
/* Interactive states */
button:hover {
    background-color: #0056b3;
}

button:active {
    transform: translateY(1px);
}

/* Form validation */
input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

/* Structural selectors */
li:first-child {
    border-top: none;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* Complex selectors */
p:not(.special) {
    color: #333;
}
```

### Pseudo-Elements Examples
```css
/* Adding decorative content */
.quote::before {
    content: """;
    font-size: 2em;
}

.quote::after {
    content: """;
    font-size: 2em;
}

/* Styling first letter */
.article::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
}

/* Custom placeholder styling */
input::placeholder {
    color: #999;
    font-style: italic;
}

/* Custom list markers */
li::marker {
    color: #ff6b6b;
    font-weight: bold;
}
```

# CSS Text Effects Cheat Sheet

The effects developers use on text items on a web page are chosen mainly because of their styling and layout style. Interesting effects can be created by combining these with other CSS properties.

The visual representation of text content can be changed by four main properties: `text-transform`, `font-style`, `font-weight` and `text-decoration`.

## Main Text Effect Properties

| Property | Values | Description |
|----------|--------|-------------|
| `text-transform` | `none`, `uppercase`, `lowercase`, `capitalize`, `full-width` | Modify text case properties |
| `font-style` | `normal`, `italic`, `oblique` | Font styling options such as italics |
| `font-weight` | `normal`, `bold`, `lighter`, `bolder`, `100-900` | Font weight options for emphasis |
| `text-decoration` | `none`, `underline`, `overline`, `line-through` | Shorthand for text decoration lines |

## Additional Text Styling Properties

### Alignment Properties
| Property | Description |
|----------|-------------|
| `text-align` | Horizontal alignment of text |
| `text-align-last` | Alignment for the last line when text is justified |
| `text-indent` | Indentation of the first line |
| `text-justify` | Justification method when text-align is "justify" |

### Decoration Properties
| Property | Description |
|----------|-------------|
| `text-decoration-color` | Color configuration of text decoration |
| `text-decoration-line` | Line type such as underline, overline, line-through |
| `text-decoration-style` | Styles for decoration lines (solid, dotted, wavy, etc.) |
| `text-decoration-thickness` | Thickness of the decoration line |
| `text-underline-position` | Position of underline decoration |

### Advanced Text Properties
| Property | Description |
|----------|-------------|
| `text-combine-upright` | Combines multiple characters into single character space |
| `text-emphasis` | Shorthand for emphasis marks (color and style) |
| `text-orientation` | Text orientation in a line (sideways, upright, etc.) |
| `text-shadow` | Adds shadow effects to text |

## Text Overflow and Wrapping Properties

| Property | Values | Description |
|----------|--------|-------------|
| `text-overflow` | `clip`, `ellipsis` | Overflow behavior of text within container |
| `word-wrap` | `normal`, `anywhere`, `break-word` | Word wrapping behavior (alias for overflow-wrap) |
| `word-break` | `normal`, `break-all`, `keep-all`, `break-word` | Word breaking behavior for long words |
| `writing-mode` | `horizontal-tb`, `vertical-lr`, `vertical-rl` | Text direction (horizontal or vertical) |

## Practical Examples

### Basic Text Transformations
```css
.uppercase {
    text-transform: uppercase;
}

.capitalize {
    text-transform: capitalize;
}

.bold {
    font-weight: bold;
}

.italic {
    font-style: italic;
}
```

### Text Decorations
```css
.underlined {
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-style: wavy;
}

.strikethrough {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
}

.overline {
    text-decoration: overline;
    text-decoration-style: double;
}
```

### Text Alignment
```css
.centered {
    text-align: center;
}

.justified {
    text-align: justify;
    text-justify: inter-word;
}

.indented {
    text-indent: 2em;
}

.right-aligned {
    text-align: right;
}
```

### Text Shadow Effects
```css
.simple-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.multiple-shadows {
    text-shadow: 
        1px 1px 2px red,
        0 0 1em blue,
        0 0 0.2em blue;
}

.glow-effect {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
    color: #fff;
}
```

### Text Overflow Handling
```css
.ellipsis {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.break-word {
    word-wrap: break-word;
    word-break: break-all;
}

.no-wrap {
    white-space: nowrap;
}
```

### Vertical Text
```css
.vertical-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
}

.sideways-text {
    writing-mode: vertical-lr;
    text-orientation: sideways;
}
```

### Advanced Text Effects
```css
.emphasis-marks {
    text-emphasis: filled circle;
    text-emphasis-color: red;
}

.combined-effects {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}
```

### Responsive Text
```css
.responsive-text {
    font-size: clamp(1rem, 4vw, 2rem);
    line-height: 1.4;
    text-align: center;
}

@media (max-width: 768px) {
    .responsive-text {
        text-align: left;
        font-size: 1rem;
    }
}
```

## Common Text Effect Combinations

### Elegant Headings
```css
.elegant-heading {
    font-family: 'Georgia', serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    color: #333;
}
```

### Highlighted Text
```css
.highlight {
    background: linear-gradient(120deg, #a8e6cf 0%, #dcedc1 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
}

.highlight:hover {
    background-size: 100% 88%;
}
```

### Typewriter Effect
```css
.typewriter {
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
}
```

# CSS Properties
## CSS Properties
CSS properties are used to define the styles of the selected elements. They are used in conjunction with CSS selectors to apply styles to the selected elements.
### Color Properties
| Property | Description |
| --- | --- |
| `color` | Sets the color of the text |
| `background-color` | Sets the background color of the element |
### Font Properties
| Property | Description |
| --- | --- |
| `font-family` | Sets the font family of the text |
| `font-size` | Sets the font size of the text |
| `font-style` | Sets the font style of the text |
### Layout Properties
| Property | Description |
| --- | --- |
| `width` | Sets the width of the element |
| `height` | Sets the height of the element |
| `margin` | Sets the margin of the element |
### Background Properties
| Property | Description |
| --- | --- |
| `background-image` | Sets the background image of the element |
| `background-repeat` | Sets the background repeat of the element |
### Border Properties
| Property | Description |
| --- | --- |
| `border-width` | Sets the border width of the element |
| `border-style` | Sets the border style of the element |
### Positioning Properties
| Property | Description |
| --- | --- |
| `position` | Sets the position of the element |
### Display Properties
| Property | Description |
| --- | --- |
| `display` | Sets the display of the element |

# Text effects
| Property | Values | Description |
| -------- | ------ | ----------- |
| `Text-transform` | None, uppercase, lowercase, capitalize, full-width | Modify text properties |
| `Font-style` | Normal, italic, oblique | Font styling option such as italics |
| `Font-weight` | Normal, weight, lighter, bolder, 100-900 | Other font styling options like change of emphasis such as making text bold |
| `Text-decoration` | None, underline, overline, line-through | Shorthand for auxiliary elements added to text using other properties such as text-decoration-line |

### Additional Text Effect Properties

| Property                | Description                                                        |
|-------------------------|--------------------------------------------------------------------|
| `text-align`            | Horizontal alignment of text                                       |
| `text-align-last`       | Alignment for the last line when text is justified                 |
| `text-combine-upright`  | Combines multiple characters into a single upright character space |
| `text-decoration-color` | Color configuration of text decoration                             |
| `text-decoration-line`  | Line type for text decoration (underline, overline, etc.)          |
| `text-decoration-style` | Style for decoration lines (wavy, dotted, etc.)                    |
| `text-decoration-thickness` | Thickness of the decoration line                               |
| `text-emphasis`         | Shorthand for emphasis marks (color and style)                     |
| `text-indent`           | Indentation of the first line                                      |
| `text-justify`          | Justification method when text-align is "justify"                  |
| `text-orientation`      | Orientation of text in a line (sideways, upright, etc.)            |
| `text-shadow`           | Adds shadow effects to text                                        |
| `text-underline-position` | Position of underline decoration                                 |

### Text Overflow and Wrapping Properties

| Property         | Values                                 | Description                                         |
|------------------|----------------------------------------|-----------------------------------------------------|
| `text-overflow`  | `clip`, `ellipsis`                     | Overflow behavior of text within container          |
| `word-wrap`      | `normal`, `anywhere`, `break-word`     | Word wrapping behavior (alias for overflow-wrap)    |
| `word-break`     | `normal`, `break-all`, `keep-all`, `break-word` | Word breaking behavior for long words      |
| `writing-mode`   | `horizontal-tb`, `vertical-lr`, `vertical-rl` | Text direction (horizontal or vertical)      |