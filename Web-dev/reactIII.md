# Advanced React

## Filtering

Creates a copy of the array, filtered down to just the elements from the original array that pass the test. It will return a new list with just the elements that fulfil the condition.
```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```
## Sorting

Sorts the elements of an array based on a comparison functional provided.
```js
const fruits = ['banana', 'apple', 'cherry'];
const sortedFruits = fruits.sort();

console.log(sortedFruits); // Output: ['apple', 'banana', 'cherry']

const numbers = [10, 2, 5, 1];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 5, 10]
```

## Mapping

Mapping usually means using JavaScript's .map() function to transform an array of data into an array of React elements. This is a common way to render lists dynamically.

Example
Suppose you have an array of names and want to display each name in a list:

Key points:

.map() takes each item in the array and returns a new `<li>` element.
The key prop helps React track each item for efficient updates.
This is the standard way to render lists in React using mapping.