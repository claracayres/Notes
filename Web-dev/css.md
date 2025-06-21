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
    grid-column: span 8;             /* Main content */
}

.sidebar {
    grid-column: span 4;             /* Sidebar */
}

.feature {
    grid-column: 1 / -1;             /* Full width */
    grid-row: span 2;                /* Double height */
}
```
e { grid-area: aside; }
.footer { grid-area: footer; }
```

### Complex Grid with Overlapping

```css
.gall
