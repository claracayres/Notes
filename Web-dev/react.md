# React

React is a popular JavaScript library for building user interfaces, particularly web applications. It's maintained by Facebook (Meta) and has a large community of developers.

## What is React?

React is a **component-based** library that allows you to build encapsulated components that manage their own state, then compose them to make complex UIs. React uses a **virtual DOM** for efficient rendering and follows a **declarative** programming paradigm.

### Key Features

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient diffing algorithm for optimal performance
- **JSX**: JavaScript syntax extension that looks similar to HTML
- **Unidirectional Data Flow**: Data flows down, actions flow up
- **Learn Once, Write Anywhere**: Can be used for web, mobile (React Native), and more

## Getting Started

### Installation

#### Create React App (Traditional)

```bash
npx create-react-app my-app
cd my-app
npm start
```

#### Vite (Modern, Faster)

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

#### Next.js (Full-Stack Framework)

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

## Core Concepts

### 1. Components

#### Functional Components (Modern Approach)

```jsx
// Simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function component
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// With destructuring
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

#### Class Components (Legacy, but still used)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### 2. JSX (JavaScript XML)

JSX allows you to write HTML-like syntax in JavaScript:

```jsx
const element = <h1>Hello, world!</h1>;

// JSX with expressions
const name = "John";
const element = <h1>Hello, {name}!</h1>;

// JSX with attributes
const element = <img src={user.avatarUrl} alt={user.name} />;

// JSX with children
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

#### JSX Rules

- Must return a single parent element (use `<div>` or `<React.Fragment>` or `<>`)
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Close all tags (self-closing: `<input />`)
- Use camelCase for attributes

### 3. Props

Props are read-only data passed from parent to child components:

```jsx
// Parent component
function App() {
  return (
    <div>
      <Welcome name="Sara" age={25} />
      <Welcome name="Cahal" age={30} />
    </div>
  );
}

// Child component
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Default props
Welcome.defaultProps = {
  name: "Guest",
  age: 0,
};

// Props validation (requires prop-types package)
import PropTypes from "prop-types";

Welcome.propTypes = {
  name: PropTypes.string.required,
  age: PropTypes.number,
};
```

### 4. State with useState Hook

State allows components to manage and update data:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 5. Event Handling

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  const handleMouseOver = () => {
    console.log("Mouse over!");
  };

  return (
    <button onClick={handleClick} onMouseOver={handleMouseOver}>
      Click me
    </button>
  );
}

// Passing parameters
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build an app" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

## React Hooks

### 1. useEffect Hook

Handle side effects like API calls, subscriptions, timers:

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect runs after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // Effect runs only once (on mount)
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array

  // Effect runs when specific values change
  useEffect(() => {
    document.title = `Data: ${data?.length || 0} items`;
  }, [data]); // Runs when data changes

  // Cleanup effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup
    };
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Data ({data?.length || 0} items)</h2>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### 2. useContext Hook

Share data between components without prop drilling:

```jsx
import React, { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </header>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
```

### 3. Custom Hooks

Create reusable stateful logic:

```jsx
// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using custom hooks
function UserProfile({ userId }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { data: user, loading, error } = useApi(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`profile ${theme}`}>
      <h2>{user.name}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## Best Practices & Tips

### 1. Component Organization

```jsx
// ✅ Good: Small, focused components
function UserCard({ user }) {
  return (
    <div className="user-card">
      <UserAvatar src={user.avatar} alt={user.name} />
      <UserInfo name={user.name} email={user.email} />
      <UserActions userId={user.id} />
    </div>
  );
}

// ✅ Good: Separate concerns
function UserAvatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function UserInfo({ name, email }) {
  return (
    <div className="user-info">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
```

### 2. State Management Tips

```jsx
// ✅ Use functional updates for state that depends on previous state
const [count, setCount] = useState(0);
setCount((prevCount) => prevCount + 1);

// ✅ Use multiple useState for unrelated state
const [name, setName] = useState("");
const [email, setEmail] = useState("");

// ✅ Use useReducer for complex state logic
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

### 3. Performance Optimization

```jsx
import React, { memo, useMemo, useCallback } from "react";

// ✅ Memoize expensive calculations
function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Total: {expensiveValue}</div>;
}

// ✅ Memoize event handlers
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

// ✅ Memoize components to prevent unnecessary re-renders
const TodoItem = memo(({ todo, onToggle, onDelete }) => {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);

  return (
    <li>
      <span
        onClick={handleToggle}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
});
```

### 4. Error Handling

```jsx
import React, { Component } from "react";

// Error Boundary Class Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
}
```

### 5. Code Splitting & Lazy Loading

```jsx
import React, { Suspense, lazy } from "react";

// Lazy load components
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}
```

## Common Patterns

### 1. Conditional Rendering

```jsx
function UserGreeting({ user }) {
  return (
    <div>
      {/* Conditional rendering with && */}
      {user && <h1>Welcome back, {user.name}!</h1>}

      {/* Conditional rendering with ternary */}
      {user ? <UserDashboard user={user} /> : <LoginForm />}

      {/* Multiple conditions */}
      {user ? user.isAdmin ? <AdminPanel /> : <UserPanel /> : <GuestPanel />}
    </div>
  );
}
```

### 2. Lists and Keys

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {" "}
          {/* Always use unique keys */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// ❌ Don't use array index as key for dynamic lists
{
  todos.map((todo, index) => (
    <li key={index}>{todo.text}</li> // Bad!
  ));
}

// ✅ Use stable, unique identifiers
{
  todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li> // Good!
  ));
}
```

### 3. Form Handling

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
```

## Essential Tips

### 1. Development Tips

- **Use React Developer Tools**: Essential browser extension for debugging
- **Enable Strict Mode**: Helps identify potential problems

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### 2. File Organization

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   └── Modal/
│   └── pages/
├── hooks/
├── context/
├── services/
├── utils/
└── styles/
```

### 3. Naming Conventions

- **Components**: PascalCase (`UserProfile`, `NavigationBar`)
- **Files**: Match component name (`UserProfile.jsx`)
- **Props**: camelCase (`userName`, `isActive`)
- **Event handlers**: `handle` prefix (`handleClick`, `handleSubmit`)
- **State**: descriptive names (`isLoading`, `userList`)

### 4. Common Mistakes to Avoid

```jsx
// ❌ Don't mutate state directly
const [todos, setTodos] = useState([]);
todos.push(newTodo); // Wrong!

// ✅ Use spread operator or array methods
setTodos([...todos, newTodo]); // Correct!
setTodos(todos.concat(newTodo)); // Also correct!

// ❌ Don't call hooks conditionally
if (condition) {
  const [state, setState] = useState(); // Wrong!
}

// ✅ Always call hooks at the top level
const [state, setState] = useState();
if (condition) {
  // Use state here
}

// ❌ Don't forget dependencies in useEffect
useEffect(() => {
  fetchData(userId);
}, []); // Missing userId dependency!

// ✅ Include all dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### 5. Testing Basics

```jsx
// Example with React Testing Library
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter and increments on click", () => {
  render(<Counter />);

  const countElement = screen.getByText(/count: 0/i);
  expect(countElement).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /increment/i });
  fireEvent.click(button);

  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

## Resources for Learning

### Official Documentation

- [React Docs](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Next.js](https://nextjs.org/)

### Popular Libraries

- **Styling**: styled-components, emotion, Tailwind CSS
- **Routing**: React Router
- **State Management**: Redux Toolkit, Zustand, Jotai
- **UI Components**: Material-UI, Ant Design, Chakra UI
- **Testing**: React Testing Library, Jest

### Best Practices Summary

1. **Keep components small and focused**
2. **Use functional components and hooks**
3. **Lift state up when needed**
4. **Use TypeScript for larger projects**
5. **Implement proper error boundaries**
6. **Optimize performance with memoization**
7. **Follow consistent naming conventions**
8. **Write tests for critical functionality**
9. **Use ESLint and Prettier for code quality**
10. **Keep learning and stay updated**

## Customizing the Project

So far, you've learned about React components. Now, let's focus on how to customize your project by exploring the software development approach, including the creation of separate component files, requirements gathering, and the ideal folder structure.

### 🧱 Building a Layout

Imagine you're tasked with building a slightly more complex website layout using React. Even if you're still learning how React works, you can already create meaningful designs.

The layout in this case is simple and focused on typography, for a coding blog. No images needed — great! Your layout should include:

- **Main Navigation**
- **Promo Section** (Main Advertisement)
- **List of Blog Post Previews**
- **Footer**

### 🗂 Organizing Your Code

With the above layout in mind, how should you organize your project?

According to the React documentation, there are two common approaches:

1. **Grouping by Feature**
2. **Grouping by File Type**

They also recommend:

- Avoiding deeply nested folders
- Keeping it simple and not overthinking the structure
- Spending no more than 5 minutes setting up a project (especially if you're a beginner)

So, for a small project like this one, it's perfectly fine to just create a `components/` folder and drop all your components inside it.

### 🚀 Building the App

We'll name the app `customizing-example`. To create it, run the following code in a suitable directory on your system:

```bash
npx create-react-app customizing-example
```

This will scaffold a starter React app with the following structure:

```
src/
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
```

Now, add a `components/` folder:

```
src/
  components/
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
```

Inside `components/`, create one component for each section:

```
src/
  components/
    Nav.js
    Promo.js
    Intro1.js
    Intro2.js
    Intro3.js
    Footer.js
```

Simple and clean.

### 🧩 Building Components

Time to write each component.

#### Nav.js

```jsx
function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
```

#### Promo.js

```jsx
function Promo() {
  return (
    <div className="promo-section">
      <div>
        <h1>Don't miss this deal!</h1>
      </div>
      <div>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
      </div>
    </div>
  );
}

export default Promo;
```

#### Intro1.js

```jsx
function Intro1() {
  return (
    <div className="blog-post-intro">
      <h2>I've become a React developer!</h2>
      <div>
        <p>
          I've completed the React Basics course and I'm happy to announce that
          I'm now a Junior React Developer!
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro1;
```

#### Intro2.js

```jsx
function Intro2() {
  return (
    <div className="blog-post-intro">
      <h2>Why I love front-end web development</h2>
      <div>
        <p>
          In this blog post, I'll list 10 reasons why I love to work as a
          front-end developer.
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro2;
```

#### Intro3.js

```jsx
function Intro3() {
  return (
    <div className="blog-post-intro">
      <h2>What's the best way to style your React apps?</h2>
      <div>
        <p>
          There are so many options to choose from. Here's a high-level overview
          of the popular ones.
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro3;
```

#### Footer.js

```jsx
function Footer() {
  return (
    <div className="copyright">
      <p>Made with love by Myself</p>
    </div>
  );
}

export default Footer;
```

#### App.js (Main Component)

```jsx
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <main>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### 🔍 JSX Syntax Highlights

Some observations about the code:

#### ✅ className in JSX

React uses `className` instead of `class` because `class` is a reserved word in JavaScript. Even though JSX looks like HTML, it's still JavaScript under the hood.

```jsx
// ✅ Correct
<div className="my-class">Content</div>

// ❌ Wrong
<div class="my-class">Content</div>
```

#### ✅ Repeated Components (Intro1, Intro2, Intro3)

Why repeat components manually instead of using one reusable component? The DRY (Don't Repeat Yourself) principle matters, but for now, reusability comes later — when you learn about props.

**Better approach with props:**

```jsx
function BlogPostIntro({ title, content }) {
  return (
    <div className="blog-post-intro">
      <h2>{title}</h2>
      <div>
        <p>{content}</p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <div>
      <BlogPostIntro
        title="I've become a React developer!"
        content="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
      />
      <BlogPostIntro
        title="Why I love front-end web development"
        content="In this blog post, I'll list 10 reasons why I love to work as a front-end developer."
      />
    </div>
  );
}
```

#### ✅ Props (not used yet)

You'll start using props in the next lessons. For now, static components are okay.

#### ✅ No `<a>` tags

Links in React apps that point to internal pages should use React Router's `<Link>` component instead of `<a>`. You'll explore that soon too!

```jsx
// For external links - use <a>
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>;

// For internal navigation - use React Router's Link
import { Link } from "react-router-dom";

<Link to="/about">About Page</Link>;
```

### 💄 Adding Styles

Create a simple CSS file to style your components:

```css
/* App.css */
.App {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 20px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.main-nav li {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.main-nav li:hover {
  background-color: #e9ecef;
}

.promo-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  margin: 20px 0;
  border-radius: 12px;
  text-align: center;
}

.promo-section h1 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

.promo-section h2 {
  margin: 0;
  font-weight: 300;
  font-size: 1.2rem;
}

.blog-post-intro {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-post-intro h2 {
  color: #343a40;
  margin-top: 0;
}

.blog-post-intro p {
  color: #6c757d;
  line-height: 1.6;
}

.link {
  color: #007bff;
  cursor: pointer;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

.copyright {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 40px;
}

.copyright p {
  margin: 0;
  color: #6c757d;
}
```

### 🎯 Project Structure Best Practices

As your project grows, consider this improved structure:

```
src/
├── components/
│   ├── common/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Navigation/
│   ├── layout/
│   │   ├── BlogPost/
│   │   └── Promo/
│   └── pages/
│       ├── Home/
│       ├── About/
│       └── Contact/
├── hooks/
├── services/
├── utils/
├── styles/
│   ├── components/
│   ├── globals.css
│   └── variables.css
└── assets/
    ├── images/
    └── icons/
```

## Dissecting Props

Props (short for "properties") are one of the most fundamental concepts in React. They enable components to communicate with each other and make your components reusable and dynamic.

### 🔍 What are Props?

Props are **read-only** inputs that allow you to pass data from a parent component to a child component. Think of them as function parameters for React components.

```jsx
// Parent component passing props
function App() {
  return (
    <div>
      <Welcome name="Alice" age={25} isStudent={true} />
      <Welcome name="Bob" age={30} isStudent={false} />
    </div>
  );
}

// Child component receiving props
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      <p>Status: {props.isStudent ? "Student" : "Professional"}</p>
    </div>
  );
}
```

### 📦 Types of Props

#### 1. String Props

```jsx
<Welcome name="John" />
<Button label="Click me" />
<Image alt="Profile picture" />
```

#### 2. Number Props

```jsx
<Counter initialValue={0} />
<Progress percentage={75} />
<Temperature celsius={25} />
```

#### 3. Boolean Props

```jsx
<Button disabled={true} />
<Modal isOpen={false} />
<Input required={true} />

// Boolean props can be written shorthand
<Button disabled />        {/* Same as disabled={true} */}
<Modal isOpen />          {/* Same as isOpen={true} */}
```

#### 4. Array Props

```jsx
<TodoList items={['Learn React', 'Build app', 'Deploy']} />
<Chart data={[1, 2, 3, 4, 5]} />
<Tags list={['javascript', 'react', 'frontend']} />
```

#### 5. Object Props

```jsx
<UserCard user={{ name: 'John', email: 'john@example.com', avatar: 'url' }} />
<Settings config={{ theme: 'dark', notifications: true }} />
```

#### 6. Function Props (Event Handlers)

```jsx
<Button onClick={handleClick} />
<Form onSubmit={handleSubmit} />
<Input onChange={handleChange} />
```

### 🎯 Destructuring Props

Instead of accessing `props.name`, you can destructure props for cleaner code:

```jsx
// Without destructuring
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

// With destructuring (preferred)
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Destructuring with default values
function Welcome({ name = "Guest", age = 0 }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Destructuring with rest operator
function Button({ label, ...otherProps }) {
  return <button {...otherProps}>{label}</button>;
}
```

### 🔄 Props Flow (Unidirectional Data Flow)

Props flow **down** from parent to child. Data cannot flow upward through props alone.

```jsx
// ✅ Correct: Parent to Child
function App() {
  const userData = { name: "John", role: "Developer" };

  return <UserProfile user={userData} />; // Passing data down
}

function UserProfile({ user }) {
  return <UserDetails user={user} />; // Passing data further down
}

function UserDetails({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}

// ❌ Wrong: Child cannot directly modify parent's data
function Child({ count }) {
  // count++; // This won't work!
  return <div>{count}</div>;
}
```

### 📢 Communication from Child to Parent

To send data from child to parent, pass functions as props:

```jsx
function Parent() {
  const [message, setMessage] = useState("");

  const handleMessageFromChild = (childMessage) => {
    setMessage(childMessage);
  };

  return (
    <div>
      <p>Message from child: {message}</p>
      <Child onSendMessage={handleMessageFromChild} />
    </div>
  );
}

function Child({ onSendMessage }) {
  const sendMessage = () => {
    onSendMessage("Hello from child!");
  };

  return <button onClick={sendMessage}>Send Message</button>;
}
```

### 🎨 Practical Examples

#### 1. Reusable Button Component

```jsx
function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) {
  const className = `btn btn-${variant} btn-${size} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

// Usage
function App() {
  return (
    <div>
      <Button
        variant="primary"
        size="large"
        onClick={() => console.log("Primary")}
      >
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => console.log("Secondary")}>
        Secondary Button
      </Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}
```

#### 2. Card Component with Multiple Props

```jsx
function Card({
  title,
  subtitle,
  image,
  content,
  footer,
  onClick,
  className = "",
}) {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-content">{content}</div>
      </div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Usage
function ProductList() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      subtitle: "High Performance",
      image: "/laptop.jpg",
      content: "Perfect for development work",
      price: "$999",
    },
    {
      id: 2,
      title: "Phone",
      subtitle: "Latest Model",
      image: "/phone.jpg",
      content: "Amazing camera quality",
      price: "$699",
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
          content={product.content}
          footer={<span className="price">{product.price}</span>}
          onClick={() => console.log("Product clicked:", product.title)}
        />
      ))}
    </div>
  );
}
```

#### 3. Form Input Component

```jsx
function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  ...rest
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${error ? "input-error" : ""}`}
        {...rest}
      />

      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

// Usage
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <form>
      <Input
        label="Name"
        value={formData.name}
        onChange={handleChange("name")}
        placeholder="Enter your name"
        required
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange("email")}
        placeholder="Enter your email"
        required
        error={errors.email}
      />

      <Input
        label="Message"
        value={formData.message}
        onChange={handleChange("message")}
        placeholder="Enter your message"
        as="textarea"
        rows={4}
      />
    </form>
  );
}
```

### 🛡️ Props Validation

Use PropTypes to validate props and catch bugs early:

```jsx
import PropTypes from "prop-types";

function UserCard({ name, age, email, isActive, hobbies, onEdit }) {
  return (
    <div className={`user-card ${isActive ? "active" : "inactive"}`}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <button onClick={() => onEdit(name)}>Edit</button>
    </div>
  );
}

// Props validation
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func.isRequired,
};

// Default props
UserCard.defaultProps = {
  isActive: true,
  hobbies: [],
};
```

### 🔧 Advanced Props Patterns

#### 1. Render Props Pattern

```jsx
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading });
}

// Usage
function App() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading }) =>
        loading ? <div>Loading...</div> : <UserList users={data} />
      }
    />
  );
}
```

#### 2. Children as Props

```jsx
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is the modal content</p>
        <button>Action Button</button>
      </Modal>
    </div>
  );
}
```

#### 3. Props Spreading

```jsx
function BaseButton({ children, className = "", ...rest }) {
  return (
    <button
      className={`btn ${className}`}
      {...rest} // Spreads all other props
    >
      {children}
    </button>
  );
}

// Usage - all HTML button props are passed through
<BaseButton
  onClick={handleClick}
  disabled={isLoading}
  type="submit"
  data-testid="submit-button"
  className="btn-primary"
>
  Submit
</BaseButton>;
```

### 🎯 Props Best Practices

#### 1. Keep Props Simple

```jsx
// ✅ Good: Simple, clear props
<UserCard name="John" email="john@example.com" />

// ❌ Avoid: Too many props
<UserCard
    firstName="John"
    lastName="Doe"
    primaryEmail="john@example.com"
    secondaryEmail="john.doe@company.com"
    workPhone="123-456-7890"
    homePhone="098-765-4321"
    // ... too many props
/>

// ✅ Better: Group related data
<UserCard
    user={{
        name: 'John Doe',
        contact: {
            email: 'john@example.com',
            phone: '123-456-7890'
        }
    }}
/>
```

#### 2. Use Descriptive Names

```jsx
// ❌ Poor naming
<Button type="1" size="L" active={true} />

// ✅ Clear naming
<Button variant="primary" size="large" isActive={true} />
```

#### 3. Provide Default Values

```jsx
function Alert({ message, type = "info", dismissible = false }) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
      {dismissible && <button className="alert-close">×</button>}
    </div>
  );
}
```

### 🚨 Common Props Mistakes

#### 1. Mutating Props

```jsx
// ❌ Wrong: Never mutate props
function BadComponent({ items }) {
  items.push("new item"); // Don't do this!
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// ✅ Correct: Create new array
function GoodComponent({ items }) {
  const newItems = [...items, "new item"];
  return (
    <ul>
      {newItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

#### 2. Forgetting Key Prop in Lists

```jsx
// ❌ Wrong: Missing key prop
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}{" "}
      {/* Missing key! */}
    </ul>
  );
}

// ✅ Correct: Include unique key
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

#### 3. Props Drilling

```jsx
// ❌ Props drilling (passing props through many levels)
function App() {
  const user = { name: "John", role: "admin" };
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <UserMenu user={user} />;
}

function UserMenu({ user }) {
  return <div>Welcome, {user.name}</div>;
}

// ✅ Better: Use Context for deeply nested data
const UserContext = createContext();

function App() {
  const user = { name: "John", role: "admin" };
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function UserMenu() {
  const user = useContext(UserContext);
  return <div>Welcome, {user.name}</div>;
}
```

# Event Handling and Embedded Expressions

Event handling is a crucial part of React development, allowing components to respond to user interactions like clicks, form submissions, and input changes. React provides several ways to handle events, each with its own syntax and use cases.

## Understanding React Events

React uses **SyntheticEvents** - a wrapper around native DOM events that provides consistent behavior across different browsers. These events have the same interface as native events but work consistently across all browsers.

```jsx
function Button() {
  const handleClick = (event) => {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
    console.log("Current target:", event.currentTarget);
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

## 4 Ways to Handle Events in React

### 1. Inline Anonymous ES5 Functions

This approach allows you to directly pass an ES5 function declaration as the event handler:

```jsx
function App() {
  return (
    <button
      onClick={function () {
        console.log("ES5 inline function");
      }}
    >
      Inline ES5 Function
    </button>
  );
}
```

**Pros:**

- Simple for very basic operations
- All logic is visible inline

**Cons:**

- Not commonly used in modern React
- Poor readability for complex logic
- Creates a new function on every render (performance impact)

### 2. Inline Anonymous ES6 Functions (Arrow Functions)

This is the most common approach for simple event handlers:

```jsx
function App() {
  return (
    <div>
      <button onClick={() => console.log("Arrow function clicked")}>
        Inline Arrow Function
      </button>

      <button
        onClick={() => {
          console.log("Multi-line arrow function");
          console.log("Can execute multiple statements");
        }}
      >
        Multi-line Arrow Function
      </button>
    </div>
  );
}
```

**Pros:**

- Concise syntax
- Perfect for simple operations
- Can access component scope easily

**Cons:**

- Creates new function on every render
- Can become hard to read with complex logic

### 3. Separate Function Declarations

Declare a separate function and reference it in the event handler:

```jsx
function App() {
  function handleButtonClick() {
    console.log("Separate function declaration");
  }

  function handleComplexOperation() {
    // Complex logic that spans multiple lines
    const data = fetchSomeData();
    processData(data);
    updateUI();
    console.log("Complex operation completed");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Function Declaration</button>

      <button onClick={handleComplexOperation}>Complex Operation</button>
    </div>
  );
}
```

**Pros:**

- Good for complex logic
- Function is only created once
- Easy to test separately
- Clean JSX

**Cons:**

- Slightly more verbose
- Function is hoisted (can be called before declaration)

### 4. Separate Function Expressions

Assign a function to a variable and reference it:

```jsx
function App() {
  const handleClick = () => {
    console.log("Function expression");
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
  };

  // Multi-line function expression
  const handleComplexAction = () => {
    const timestamp = new Date().toISOString();
    console.log("Action performed at:", timestamp);

    // Additional logic here
    performValidation();
    updateState();
    sendAnalytics();
  };

  return (
    <div>
      <button onClick={handleClick}>Function Expression</button>

      <button onClick={() => handleSubmit({ name: "John", age: 30 })}>
        Submit Form
      </button>

      <button onClick={handleComplexAction}>Complex Action</button>
    </div>
  );
}
```

**Pros:**

- Modern JavaScript syntax
- Not hoisted (safer)
- Clean and readable
- Can be const (immutable)

**Cons:**

- Must be declared before use
- Slightly more memory usage than declarations

## Practical Examples

### 1. Counter Component

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // Method 1: Inline arrow function
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment (Inline)</button>

      <button onClick={() => setCount(count - 1)}>Decrement (Inline)</button>

      <button onClick={() => setCount(0)}>Reset (Inline)</button>
    </div>
  );
}

// Method 2: Separate function expressions
function CounterWithSeparateFunctions() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### 2. Form Handling

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Inline event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Separate function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Validation logic
    if (!formData.username || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // API call logic
    submitLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>

      {/* Inline handler for reset */}
      <button
        type="button"
        onClick={() => setFormData({ username: "", password: "" })}
      >
        Reset Form
      </button>
    </form>
  );
}
```

### 3. Event Delegation and Parameters

```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build an app", completed: false },
  ]);

  // Method 1: Inline arrow function with parameters
  const toggleTodoInline = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Method 2: Separate function with parameters
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Method 3: Event delegation approach
  const handleTodoAction = (e) => {
    const { action, id } = e.target.dataset;
    const todoId = parseInt(id);

    switch (action) {
      case "toggle":
        toggleTodoInline(todoId);
        break;
      case "delete":
        deleteTodo(todoId);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>Todo List</h3>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          {/* Method 1: Inline arrow function */}
          <button onClick={() => toggleTodoInline(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>

          {/* Method 2: Separate function */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>

          {/* Method 3: Event delegation */}
          <button
            data-action="toggle"
            data-id={todo.id}
            onClick={handleTodoAction}
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}
```

## Common Event Types

### Mouse Events

```jsx
function MouseEvents() {
  return (
    <div>
      <button onClick={() => console.log("Clicked")}>Click Me</button>

      <button onDoubleClick={() => console.log("Double clicked")}>
        Double Click
      </button>

      <div
        onMouseEnter={() => console.log("Mouse entered")}
        onMouseLeave={() => console.log("Mouse left")}
        onMouseMove={() => console.log("Mouse moving")}
        style={{ padding: "20px", border: "1px solid #ccc" }}
      >
        Hover over me
      </div>
    </div>
  );
}
```

### Keyboard Events

```jsx
function KeyboardEvents() {
  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key);

    if (e.key === "Enter") {
      console.log("Enter key pressed");
    }

    if (e.key === "Escape") {
      console.log("Escape key pressed");
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => console.log("Key released:", e.key)}
        placeholder="Type something..."
      />
    </div>
  );
}
```

### Form Events

```jsx
function FormEvents() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    console.log("Input focused");
  };

  const handleBlur = () => {
    console.log("Input blurred");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter text..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Best Practices for Event Handling

### 1. ✅ Use Appropriate Method for the Situation

```jsx
function EventHandlingBestPractices() {
  const [count, setCount] = useState(0);

  // ✅ Good: Simple operations inline
  const simpleIncrement = () => setCount((prev) => prev + 1);

  // ✅ Good: Complex operations in separate functions
  const complexOperation = () => {
    // Multiple lines of logic
    const timestamp = Date.now();
    const newCount = count + 1;

    // Log for analytics
    console.log("Count incremented at:", timestamp);

    // Update state
    setCount(newCount);

    // Additional side effects
    if (newCount === 10) {
      alert("You reached 10!");
    }
  };

  return (
    <div>
      {/* Simple operation - inline is fine */}
      <button onClick={() => setCount(count + 1)}>Simple Increment</button>

      {/* Complex operation - separate function is better */}
      <button onClick={complexOperation}>Complex Operation</button>
    </div>
  );
}
```

### 2. ✅ Prevent Performance Issues

```jsx
// ❌ Bad: Creates new function on every render
function BadPerformance({ items }) {
  return (
    <div>
      {items.map((item) => (
        <button key={item.id} onClick={() => console.log(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

// ✅ Good: Use useCallback for expensive operations
function GoodPerformance({ items }) {
  const handleItemClick = useCallback((id) => {
    console.log("Item clicked:", id);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <button key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
```

### 3. ✅ Handle Edge Cases

```jsx
function RobustEventHandling() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncOperation = async () => {
    // Prevent multiple clicks
    if (isLoading) return;

    try {
      setIsLoading(true);
      await someAsyncOperation();
    } catch (error) {
      console.error("Operation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.password) {
      alert("Please fill in all required fields");
      return;
    }

    // Submit form
    submitForm(data);
  };

  return (
    <div>
      <button onClick={handleAsyncOperation} disabled={isLoading}>
        {isLoading ? "Processing..." : "Start Operation"}
      </button>

      <form onSubmit={handleFormSubmit}>
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

## Summary

Event handling in React offers multiple approaches:

1. **Inline ES5 functions** - Rarely used, legacy approach
2. **Inline arrow functions** - Most common for simple operations
3. **Separate function declarations** - Good for complex logic, hoisted
4. **Separate function expressions** - Modern approach, not hoisted, preferred

### When to Use Each:

- **Inline arrow functions**: Simple operations, single statements
- **Separate functions**: Complex logic, reusable operations, better performance
- **Function expressions**: Modern codebase, when you want to avoid hoisting
- **Function declarations**: When you need hoisting or traditional function syntax

Choose the approach that best fits your use case, considering factors like:

- Complexity of the logic
- Performance requirements
- Code readability
- Team coding standards
- Reusability needs

Understanding all these approaches will help you read other developers' code and choose the most appropriate method for your specific situation.
