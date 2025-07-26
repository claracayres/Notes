# Advanced React

## Filtering

- Use `.filter()` to create a new array with only the elements that pass a test.
- Example:
  ```js
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  // evenNumbers: [2, 4]
  ```

## Sorting

- Use `.sort()` to order array elements.
- For strings, default sort works:
  ```js
  const fruits = ['banana', 'apple', 'cherry'];
  fruits.sort(); // ['apple', 'banana', 'cherry']
  ```
- For numbers, provide a compare function:
  ```js
  const numbers = [10, 2, 5, 1];
  numbers.sort((a, b) => a - b); // [1, 2, 5, 10]
  ```

## Mapping

- Use `.map()` to transform arrays, often to React elements.
- Example: render a list from an array of names.
  ```jsx
  const names = ['Alice', 'Bob', 'Charlie'];
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
  ```
- Always use a unique `key` prop for list items.

## Key

- `key` prop helps React track list items for efficient updates.
- Prefer unique values (like IDs or names) over array indexes.
  ```jsx
  const desserts = [
    { name: "Tiramisu", calories: 300 },
    { name: "Pudding", calories: 250 },
  ];
  <ul>
    {desserts.map((dessert) => (
      <li key={dessert.name}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ))}
  </ul>
  ```

## Controlled vs. Uncontrolled Components

### Controlled

- Input value managed by React state.
- Enables instant validation, disabling buttons, enforcing formats.
  ```jsx
  const [value, setValue] = useState("");
  <input value={value} onChange={e => setValue(e.target.value)} />
  ```

### Uncontrolled

- Input value managed by the DOM.
- Access value via `ref`, good for simple forms.
  ```jsx
  const inputRef = useRef(null);
  // inputRef.current.value
  ```

### File Inputs

- Always uncontrolled; access files via `ref`.

### Feature Comparison

| Feature                                   | Uncontrolled | Controlled |
|--------------------------------------------|:------------:|:----------:|
| One-time value retrieval                   |      ✔️      |     ✔️     |
| Validating on submit                       |      ✔️      |     ✔️     |
| Instant field validation                   |      ❌      |     ✔️     |
| Conditionally disabling submit button      |      ❌      |     ✔️     |
| Enforcing input format                     |      ❌      |     ✔️     |
| Several inputs for one piece of data       |      ❌      |     ✔️     |
| Dynamic inputs                             |      ❌      |     ✔️     |

- Controlled: use for advanced features.
- Uncontrolled: fine for basic forms.
- Choose based on needs.

### Working with complex data in useState

When using `useState` with objects, always update state immutably.  
  - **Correct:** Copy the old state object (using the spread operator) and update only the necessary properties.
   ```jsx
   setGreeting(prevState => ({
     ...prevState,
     place: "World-Wide Web"
   }));
   ```
 - **Incorrect:** Directly mutate or reassign the state object. This can cause bugs or errors, and React may not re-render.

 **Summary:**  
 - Use the spread operator to copy and update state objects.
 - Never mutate state directly.
 - Arrow functions with `setState` help update specific properties while keeping others unchanged.

## UseEffect

### What is the useEffect hook?

The `useEffect` hook lets you perform side effects in React components, such as data fetching, subscriptions, or manually changing the DOM. Effects run after the component renders.

#### Dependency Array

- By default, effects run after every render.
- Pass a dependency array as the second argument to control when the effect runs:
  - `[]`: Runs only once after initial mount.
  - `[value]`: Runs when `value` changes.

```jsx
useEffect(() => {
  document.title = 'Little Lemon';
}, []); // Runs once

useEffect(() => {
  document.title = `Little Lemon, v${version}`;
}, [version]); // Runs when version changes
```

#### Multiple Effects

You can use multiple `useEffect` hooks in a component to separate unrelated logic:

```jsx
function MenuPage({ id }) {
  useEffect(() => {
    document.title = 'Little Lemon';
  }, []);

  useEffect(() => {
    fetch(`https://littlelemon/menu/${id}`)
      .then(response => response.json())
      // handle data
  }, [id]);
}
```

#### Cleanup

Return a function from `useEffect` to clean up resources (e.g., subscriptions) when the component unmounts or before the effect runs again:

```jsx
useEffect(() => {
  LemonChat.subscribeToMessages(chatId, () => setStatus('online'));

  return () => {
    setStatus('offline');
    LemonChat.unsubscribeFromMessages(chatId);
  };
}, [chatId]);
```

#### Summary

- Use the dependency array to control when effects run.
- Split unrelated logic into separate effects.
- Return a cleanup function to avoid memory leaks.
- Effects run after render and cleanup runs before unmount or re-run.

### Data Fetching Using Hooks (Easy Explanation)

Fetching data from an API in React is a side-effect, so you use the `useEffect` hook. This ensures your data fetch runs after the component renders.

**Basic Example:**

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(jsonData => setBtcData(jsonData.bpi.USD))
      .catch(error => console.log(error));
  }, []);
}
```

- The empty array `[]` means the effect runs only once when the component mounts.
- If the fetch fails or is slow, you can show a loading message until the data arrives.

**Conditional Rendering Example:**

```jsx
return Object.keys(btcData).length > 0 ? (
  <div>
    <h1>Bitcoin Price:</h1>
    <h2>{btcData.rate}</h2>
  </div>
) : (
  <h1>Loading data...</h1>
);
```

- Show the data if it's loaded, or a loading message if not.

**Tips:**
- Always handle errors with `.catch`.
- Use conditional rendering to improve user experience.
- You can organize your fetch logic in a separate function for clarity.


## When to Choose useReducer vs useState

The `useState` hook is best for less complex data, such as strings, numbers, or booleans. While you can use `useState` with any data structure, it's most effective for primitive types and simple use cases like toggling a value.

The `useReducer` hook is ideal for managing more complex state, especially arrays or objects with multiple properties. As state grows in complexity, `useState` can become harder to maintain, while `useReducer` provides a more scalable approach.

There's no strict rule for when to switch from `useState` to `useReducer`. Consider the complexity of your state and choose the option that keeps your code simple and maintainable. `useReducer` requires more initial setup, but makes it easier to extend and manage complex state logic.

**Conclusion:**  
Choose `useState` for simple state and `useReducer` for complex or large state objects. Prioritize code clarity and maintainability.

## Custom Hooks

React provides built-in hooks like `useState` and `useRef`, but you can also create your own custom hooks to reuse logic across components.

### Why Write Custom Hooks?

Custom hooks let you extract and reuse functionality, reducing duplication and keeping your code organized. For example, if you need to log a variable's value whenever it changes, you can create a custom hook for that.

### Naming Custom Hooks

Custom hooks must start with `use`, such as `useConsoleLog`.

### Example: Logging State Changes

**useConsoleLog.js**
```js
import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;
```

**App.js**
```js
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Summary

- Custom hooks help you reuse logic in React apps.
- Name custom hooks starting with `use`.
- Extract functionality into hooks to keep components clean and maintainable.
- Use custom hooks like any other hook in your components.

## Types of Children in JSX

In JSX, the content between a component's opening and closing tags is passed as the `children` prop. There are several ways to provide children:

### String Literals

You can pass plain strings as children:

```jsx
<MyComponent>Little Lemon</MyComponent>
```

JSX trims whitespace at the start/end of lines and condenses newlines in the middle to a single space:

```jsx
<div>
  Little
  Lemon
</div>
```
All variations above render the same output.

### JSX Elements

Children can be JSX elements, allowing for nested components:

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```

You can mix strings and elements:

```jsx
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
```

#### Fragments

React Fragments let you group children without adding extra DOM nodes:

```jsx
<React.Fragment>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</React.Fragment>

// Short syntax
<>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</>
```

### JavaScript Expressions

Any JS expression can be passed as children using curly braces:

```jsx
<MyComponent>{'Little Lemon'}</MyComponent>
```

Useful for rendering lists:

```jsx
<ul>
  {desserts.map(dessert => <Item key={dessert} title={dessert} />)}
</ul>
```

You can also mix expressions with other children:

```jsx
<div>Hello {props.name}!</div>
```

### Functions as Children

You can pass functions as children for advanced patterns, such as render props.

### Booleans, Null, and Undefined

Values like `false`, `null`, `undefined`, and `true` are ignored and do not render anything:

```jsx
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

However, numbers like `0` will render:

```jsx
<div>{props.desserts.length && <DessertList desserts={props.desserts} />}</div>
```

If `props.desserts.length` is `0`, `0` will be rendered. To avoid this, ensure the expression is boolean:

```jsx
<div>{props.desserts.length > 0 && <DessertList desserts={props.desserts} />}</div>
<div>{!!props.desserts.length && <DessertList desserts={props.desserts} />}</div>
```

### Conclusion

JSX children can be strings, elements, expressions, or functions. Special values like `false`, `null`, and `undefined` are ignored, but numbers like `0` are rendered. Use boolean expressions for conditional rendering.