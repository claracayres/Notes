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

# Data flow in React

### Main Concept

- **Unidirectional flow**: Data in React always flows from parent to child
- It's like a "one-way street" - data can only go in one direction
- Starts at the root component and can flow through multiple levels of nesting

### Why Unidirectional Flow?

**Main benefits:**

1. **Faster comprehension** - Easier to understand application logic
2. **Simplified flow** - Data doesn't "fly around" everywhere

### How It Works in Practice

#### Parent-Child Data Flow

```jsx
// Parent Component
function Dog() {
  return <Puppy name="Max" bowlShape="square" bowlStatus="full" />;
}

// Child Component
function Puppy(props) {
  return (
    <div>
      {props.name} has{" "}
      <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowlStatus} />
    </div>
  );
}

// Grandchild Component
function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
}
```

### Component Tree Structure

```
App (Root Component)
├── Header
│   ├── Navigation
│   └── Logo
├── Main
│   ├── Sidebar
│   │   ├── UserProfile
│   │   └── Menu
│   └── Content
│       ├── Post
│       └── Comments
└── Footer
```

**Data flow paths:**

- Root → Header → Navigation
- Root → Main → Sidebar → UserProfile
- Root → Main → Content → Post

### Important Props Characteristics

#### ✅ Props are Immutable

```jsx
// ❌ WRONG - We cannot modify props
function ChildComponent({ name }) {
  name = "New Name"; // This doesn't work!
  return <h1>{name}</h1>;
}

// ✅ CORRECT - Props are read-only
function ChildComponent({ name }) {
  return <h1>{name}</h1>; // Just use the value
}
```

### Detailed Example - Blog System

```jsx
// Root Component
function BlogApp() {
  const blogData = {
    title: "My React Blog",
    author: "John Silva",
    posts: [
      { id: 1, title: "Learning React", content: "React is amazing!" },
      { id: 2, title: "Props in React", content: "Props make life easier!" },
    ],
  };

  return (
    <div>
      <BlogHeader title={blogData.title} author={blogData.author} />
      <BlogContent posts={blogData.posts} />
    </div>
  );
}

// Second level components
function BlogHeader({ title, author }) {
  return (
    <header>
      <BlogTitle title={title} />
      <AuthorInfo author={author} />
    </header>
  );
}

function BlogContent({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </main>
  );
}

// Third level components
function BlogTitle({ title }) {
  return <h1>{title}</h1>;
}

function AuthorInfo({ author }) {
  return <p>By: {author}</p>;
}

function BlogPost({ post }) {
  return (
    <article>
      <PostTitle title={post.title} />
      <PostContent content={post.content} />
    </article>
  );
}

// Fourth level components
function PostTitle({ title }) {
  return <h2>{title}</h2>;
}

function PostContent({ content }) {
  return <p>{content}</p>;
}
```

### Visualizing Data Flow

```
BlogApp (blogData)
    ↓
┌─────────────────────────────────────┐
│ BlogHeader                          │
│ ← title, author                     │
│   ↓                                 │
│   BlogTitle ← title                 │
│   AuthorInfo ← author               │
└─────────────────────────────────────┘
    ↓
┌─────────────────────────────────────┐
│ BlogContent                         │
│ ← posts[]                           │
│   ↓                                 │
│   BlogPost ← post                   │
│     ↓                               │
│     PostTitle ← title               │
│     PostContent ← content           │
└─────────────────────────────────────┘
```

### Example with State - Counter

```jsx
function CounterApp() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      <CounterDisplay
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
        onReset={() => setCount(0)}
      />
    </div>
  );
}

function ThemeToggle({ currentTheme, onThemeChange }) {
  return (
    <button
      onClick={() => onThemeChange(currentTheme === "light" ? "dark" : "light")}
    >
      Switch to {currentTheme === "light" ? "dark" : "light"} theme
    </button>
  );
}

function CounterDisplay({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <CountValue value={count} />
      <CounterControls
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </div>
  );
}

function CountValue({ value }) {
  return <h2>Counter: {value}</h2>;
}

function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
```

### Passing Complex Data

```jsx
function ShoppingApp() {
  const userData = {
    name: "Maria",
    email: "maria@email.com",
    preferences: {
      currency: "USD",
      language: "en-US",
    },
  };

  const cartData = {
    items: [
      { id: 1, name: "Laptop", price: 999, quantity: 1 },
      { id: 2, name: "Mouse", price: 25, quantity: 2 },
    ],
    total: 1049,
  };

  return (
    <div>
      <UserPanel user={userData} />
      <ShoppingCart cart={cartData} userPreferences={userData.preferences} />
    </div>
  );
}

function UserPanel({ user }) {
  return (
    <div>
      <UserGreeting name={user.name} />
      <UserSettings preferences={user.preferences} />
    </div>
  );
}

function ShoppingCart({ cart, userPreferences }) {
  return (
    <div>
      <CartItems items={cart.items} />
      <CartTotal total={cart.total} currency={userPreferences.currency} />
    </div>
  );
}

function UserGreeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function UserSettings({ preferences }) {
  return (
    <div>
      <p>Language: {preferences.language}</p>
      <p>Currency: {preferences.currency}</p>
    </div>
  );
}

function CartItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartItem({ item }) {
  return (
    <li>
      {item.name} - Qty: {item.quantity} - Price: ${item.price}
    </li>
  );
}

function CartTotal({ total, currency }) {
  return (
    <h3>
      Total: {currency === "USD" ? "$" : "€"} {total}
    </h3>
  );
}
```

### ⚠️ Problems with Bidirectional Flow (Why to avoid)

If data could flow in any direction:

```jsx
// ❌ Example of what NOT to do (chaotic flow)
function ChaoticComponent() {
  // Data coming from multiple different directions
  // Child modifying parent data
  // Sibling components communicating directly
  // State being modified from anywhere
  // VERY CONFUSING! 🤯
}
```

**Problems:**

- 🤯 **Hard to understand**: Logic becomes confusing
- 🐛 **Hard to track bugs**: Data can come from anywhere
- 🐌 **Poor performance**: Optimizations become complex
- 🔧 **Hard to maintain**: Changes affect many places

### ✅ Advantages of Unidirectional Flow

1. **Predictability**: We always know where data comes from
2. **Easier debugging**: We can trace the data path
3. **Performance**: React can optimize better
4. **Cleaner code**: Logic is more organized
5. **Reusability**: Components become more modular

### Class Notes Summary

```
📋 IMPORTANT POINTS:

✓ Data always flows parent → child
✓ Props are immutable (read-only)
✓ Use component tree for organization
✓ Unidirectional flow = easier to understand code
✓ Avoid modifying props inside components
✓ Use functions (callbacks) for child → parent communication

🎯 REMINDER: "One-way street" - data only goes one direction!
```

### Mental Exercise

**Question**: How can a grandchild component "notify" the grandparent component about a change?

**Answer**: Through callback functions passed as props:

```jsx
Grandparent → Parent (callback function) → Grandchild (executes callback)
```

# Using Hooks - Quick Summary

### What are Hooks?

- **Functions** that let you "hook into" React features
- Allow you to use state and other React features in functional components
- Start with "use" (useState, useEffect, useContext, etc.)

### useState Hook - The Basics

#### Simple Input Example

```jsx
import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </div>
  );
}
```

#### Multiple Form Fields

```jsx
import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <input
        value={form.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        placeholder="First Name"
      />
      <input
        value={form.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        placeholder="Last Name"
      />
      <input
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}
```

### useRef Hook - DOM Access

```jsx
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### Hook Rules (IMPORTANT!)

```
🚨 HOOK RULES - NEVER BREAK THESE:

1. ✅ Only call hooks at the TOP LEVEL of components
2. ❌ Never call hooks inside loops, conditions, or nested functions
3. ✅ Only call hooks from React functions (components or custom hooks)
4. ❌ Never call hooks from regular JavaScript functions

Example of WRONG usage:
❌ if (condition) { useState(0); }  // DON'T DO THIS!
❌ for (let i = 0; i < 5; i++) { useState(i); }  // DON'T DO THIS!

Example of CORRECT usage:
✅ const [state, setState] = useState(0);  // At top level
✅ if (condition) { setState(newValue); }  // Use state inside conditions, not declare
```

### State Tips

#### ✅ Local State

```jsx
// State is LOCAL to each component
function Component1() {
  const [count, setCount] = useState(0); // This count is only for Component1
  return <div>{count}</div>;
}

function Component2() {
  const [count, setCount] = useState(0); // This is a DIFFERENT count for Component2
  return <div>{count}</div>;
}
```

#### ✅ Object State

```jsx
// Better: Use object for related data
const [user, setUser] = useState({
  name: "",
  email: "",
  age: 0,
});

// Update object state correctly
setUser((prev) => ({
  ...prev,
  name: "New Name",
}));
```

### Common Hook Use Cases

```jsx
// Form handling
const [formData, setFormData] = useState({ name: "", email: "" });

// Toggle states
const [isVisible, setIsVisible] = useState(false);

// Counters
const [count, setCount] = useState(0);

// Lists
const [items, setItems] = useState([]);

// Loading states
const [isLoading, setIsLoading] = useState(true);

// DOM references
const inputRef = useRef(null);
```

### Quick Reference

```
📋 HOOKS CHEAT SHEET:

useState(initialValue) → [value, setValue]
useRef(initialValue) → { current: value }
useEffect(() => {}, [deps]) → side effects
useContext(Context) → context value

🎯 Remember: Hooks = Functions that start with "use"
```

## Prop Drilling

As you’ve learned previously, **prop drilling** is when you pass data from a parent to a child component, then to a grandchild, and so on, until it reaches a deeply nested component that actually needs it.

Here’s a simple example to illustrate prop drilling in React:

```jsx
function App() {
  return (
    <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
  );
}

function Main(props) {
  return <Header msg={props.msg} />;
}

function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke", padding: "10px" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}

function Wrapper(props) {
  return (
    <div style={{ border: "5px solid lightgray", padding: "10px" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <h3>This is the Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
}
```

**What’s happening here?**

- The `App` component passes a `msg` prop to `Main`.
- `Main` passes `msg` to `Header`.
- `Header` passes `msg` to `Wrapper`.
- `Wrapper` passes `msg` to `Button`.
- Only `Button` actually uses `msg`, but every component in the chain must pass it along.

This is called **prop drilling**. In small apps, it’s not a big deal, but as your component tree grows deeper, it can become repetitive and hard to manage. That’s why React offers solutions like Context to avoid unnecessary prop drilling.

**Takeaway:**  
Prop drilling means passing props through many layers just so a deeply nested component can use them. It’s a common pattern, but there are better ways to manage deeply shared data as your app grows.

#
