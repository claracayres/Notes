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
