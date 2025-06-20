## Flexbox

Flexbox (Flexible Box Layout) is a CSS layout model that allows you to organize elements flexibly and efficiently, especially useful for creating responsive layouts.

### Basic Concepts

#### Flex Container
The parent element that receives `display: flex` or `display: inline-flex`.

```css
.container {
    display: flex;
}
```

#### Flex Items
The direct child elements of the flex container.

### Flexbox Axes

- **Main Axis**: The primary direction of the layout
- **Cross Axis**: Perpendicular to the main axis

### Container Properties (Flex Container)

#### flex-direction
Defines the direction of the main axis.

```css
.container {
    flex-direction: row;        /* default - horizontal */
    flex-direction: row-reverse; /* horizontal reverse */
    flex-direction: column;     /* vertical */
    flex-direction: column-reverse; /* vertical reverse */
}
```

#### flex-wrap
Defines whether items should wrap to new lines.

```css
.container {
    flex-wrap: nowrap;   /* default - no wrap */
    flex-wrap: wrap;     /* wrap lines */
    flex-wrap: wrap-reverse; /* wrap lines in reverse */
}
```

#### flex-flow
Shorthand for `flex-direction` and `flex-wrap`.

```css
.container {
    flex-flow: row wrap;
}
```

#### justify-content
Aligns items along the main axis.

```css
.container {
    justify-content: flex-start;    /* start (default) */
    justify-content: flex-end;      /* end */
    justify-content: center;        /* center */
    justify-content: space-between; /* space between items */
    justify-content: space-around;  /* space around items */
    justify-content: space-evenly;  /* even spacing */
}
```

#### align-items
Aligns items along the cross axis.

```css
.container {
    align-items: stretch;    /* stretch (default) */
    align-items: flex-start; /* start */
    align-items: flex-end;   /* end */
    align-items: center;     /* center */
    align-items: baseline;   /* baseline */
}
```

#### align-content
Aligns lines when wrapping occurs (with flex-wrap).

```css
.container {
    align-content: stretch;        /* default */
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    align-content: space-evenly;
}
```

#### gap
Defines spacing between items.

```css
.container {
    gap: 10px;           /* uniform spacing */
    row-gap: 10px;       /* spacing between rows */
    column-gap: 20px;    /* spacing between columns */
}
```

### Item Properties (Flex Items)

#### order
Defines the display order of items.

```css
.item {
    order: 0; /* default */
    order: 1; /* appears later */
    order: -1; /* appears earlier */
}
```

#### flex-grow
Defines how much the item should grow.

```css
.item {
    flex-grow: 0; /* default - doesn't grow */
    flex-grow: 1; /* grows proportionally */
    flex-grow: 2; /* grows 2x more than others */
}
```

#### flex-shrink
Defines how much the item should shrink.

```css
.item {
    flex-shrink: 1; /* default - shrinks */
    flex-shrink: 0; /* doesn't shrink */
    flex-shrink: 2; /* shrinks 2x more */
}
```

#### flex-basis
Defines the initial size of the item.

```css
.item {
    flex-basis: auto;   /* default - based on content */
    flex-basis: 200px;  /* fixed size */
    flex-basis: 20%;    /* percentage */
    flex-basis: 0;      /* no base size */
}
```

#### flex
Shorthand for `flex-grow`, `flex-shrink` and `flex-basis`.

```css
.item {
    flex: 1;           /* grow: 1, shrink: 1, basis: 0 */
    flex: 0 1 auto;    /* default values */
    flex: 2 1 200px;   /* grow: 2, shrink: 1, basis: 200px */
    flex: none;        /* grow: 0, shrink: 0, basis: auto */
}
```

#### align-self
Overrides `align-items` for a specific item.

```css
.item {
    align-self: auto;       /* default - inherits from container */
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: baseline;
    align-self: stretch;
}
```

### Practical Examples

#### 3-Column Layout
```css
.container {
    display: flex;
    gap: 20px;
}

.sidebar {
    flex: 0 0 200px; /* doesn't grow/shrink, 200px fixed */
}

.main {
    flex: 1; /* takes remaining space */
}

.aside {
    flex: 0 0 150px; /* doesn't grow/shrink, 150px fixed */
}
```

#### Vertical and Horizontal Centering
```css
.container {
    display: flex;
    justify-content: center; /* horizontal */
    align-items: center;     /* vertical */
    height: 100vh;
}
```

#### Responsive Cards
```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* grows, shrinks, minimum 300px */
    min-width: 0;    /* allows shrinking beyond content */
}
```

#### Navigation with Spacing
```css
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

### Tips and Best Practices

1. **Use `flex: 1`** for items that should take available space
2. **`min-width: 0`** allows items to shrink beyond content size
3. **`gap`** is preferable to margins for spacing between items
4. **Combine with CSS Grid** for more complex layouts
5. **Test on different screen sizes** for responsiveness

### Common Issues

#### Item doesn't shrink
```css
.item {
    min-width: 0; /* allows shrinking */
    /* or */
    overflow: hidden; /* hides overflow */
}
```

#### Centering doesn't work
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* ensures minimum height */
}
```

#### Items with different sizes
```css
.container {
    align-items: stretch; /* all same height */
    /* or */
    align-items: flex-start; /* align to top */
}
```
