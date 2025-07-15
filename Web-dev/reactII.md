# Navigation

## Traditional vs Single-Page Applications

### Before Single-Page Apps

**Traditional Multi-Page Applications:**

- User clicks link → Browser navigates to new webpage
- Browser sends request to web server
- Server responds with full webpage
- New page displayed in browser

**Problems with Traditional Apps:**

- **Resource intensive** on web server
- **CPU time** spent rendering dynamic pages
- **Network bandwidth** used sending entire webpages
- **Slow user experience** especially on poor connections

### Single-Page Apps (SPAs)

**Examples you use daily:**

- Social networks (Facebook, Twitter)
- Email providers (Gmail, Outlook)
- Map applications (Google Maps)
- Video platforms (YouTube, Netflix)
ll
**How SPAs Work:**

- User interacts without downloading entire new webpages
- Rewrites current webpage as user interacts
- Application feels faster and more responsive

## SPA Implementation Approaches

### 1. Bundling

```
Browser requests application
↓
Return ALL necessary HTML, CSS, JavaScript immediately
↓
Application runs with all resources loaded
```

### 2. Lazy Loading (Code Splitting)

```
Browser requests application
↓
Return MINIMUM HTML, CSS, JavaScript needed
↓
Additional resources downloaded as required
```

## Traditional vs SPA Examples

### Example 1: Movie Button

**Traditional Website:**

```
User clicks button → POST request to server → Server returns NEW webpage → Browser renders new page
```

**Single Page Application:**

```
User clicks button → POST request to server → Server returns JSON object → App updates label with movie name
```

### Example 2: Navigation Between Pages

**Traditional Website:**

```
User clicks Profile link → Browser sends request → Server generates HTML → Browser renders new page
```

**Single Page Application:**

```
User clicks Profile link → Browser sends request → Server sends JSON → Browser updates page with template + data
```

## React Navigation Concepts

### Why Regular Anchor Tags Don't Work in SPAs

```jsx
// ❌ DON'T DO THIS in React SPA
<a href="/profile">Go to Profile</a>
// This would refresh the entire page, breaking SPA behavior
```

**Problem:** Default anchor tag behavior:

- Loads another HTML file from server
- Refreshes the page
- Breaks SPA functionality

### React Router Solution

```jsx
// ✅ DO THIS instead
import { Link } from "react-router-dom";

<Link to="/profile">Go to Profile</Link>;
// This gives illusion of different pages while staying in SPA
```

## React Router Setup

### Installation

```bash
npm install react-router-dom
```

### Basic Setup

```jsx
// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
```

### Component Examples

```jsx
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Profile() {
  return <h1>User Profile</h1>;
}
```

## Advanced React Router Features

### Dynamic Routes

```jsx
// Route with parameter
<Route path="/user/:id" element={<UserProfile />} />;

// Using the parameter in component
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

### Nested Routes

```jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout component with Outlet
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>Navigation here</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
```

### Programmatic Navigation

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic here
    navigate("/dashboard"); // Navigate programmatically
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

## Navigation Hooks

### useNavigate

```jsx
import { useNavigate } from "react-router-dom";

function Component() {
  const navigate = useNavigate();

  // Navigate to different routes
  navigate("/home"); // Go to home
  navigate(-1); // Go back
  navigate(1); // Go forward
  navigate("/profile", { replace: true }); // Replace current entry
}
```

### useLocation

```jsx
import { useLocation } from "react-router-dom";

function Component() {
  const location = useLocation();

  console.log(location.pathname); // Current path
  console.log(location.search); // Query string
  console.log(location.hash); // Hash fragment
}
```

### useParams

```jsx
import { useParams } from "react-router-dom";

// Route: /users/:userId/posts/:postId
function BlogPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h1>User: {userId}</h1>
      <h2>Post: {postId}</h2>
    </div>
  );
}
```

## Navigation Best Practices

### 1. Route Organization

```jsx
// routes.js - Centralized route definitions
export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROFILE: "/profile",
  USER_DETAIL: "/users/:id",
};

// Usage
<Link to={routes.ABOUT}>About</Link>;
```

### 2. Protected Routes

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Usage
<Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuthenticated={user.isLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  }
/>;
```

### 3. Loading States

```jsx
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

## Common Navigation Patterns

### 1. Breadcrumbs

```jsx
import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={name}> / {name}</span>
        ) : (
          <span key={name}>
            {" / "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </nav>
  );
}
```

### 2. Active Navigation Links

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "blue",
        })}
      >
        About
      </NavLink>
    </nav>
  );
}
```

### 3. Modal Routes

```jsx
function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/img/:id" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}
```

## Class Notes Summary

```
📋 NAVIGATION KEY POINTS:

✓ SPAs don't refresh pages - they update components
✓ Use React Router instead of regular <a> tags
✓ Link component for navigation, useNavigate for programmatic navigation
✓ Dynamic routes use :parameter syntax
✓ Protected routes check authentication before rendering
✓ Nested routes use <Outlet /> component

🎯 REMEMBER:
- Traditional apps = full page reload
- SPAs = component updates only
- React Router = SPA navigation solution
```

## Quick Reference

```jsx
// Basic Setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Navigation Components
<Link to="/path">Link Text</Link>
<NavLink to="/path">Active Link</NavLink>

// Hooks
const navigate = useNavigate();        // Programmatic navigation
const location = useLocation();        // Current location info
const params = useParams();            // Route parameters

// Route Patterns
<Route path="/users/:id" element={<User />} />     // Dynamic
<Route path="/admin/*" element={<Admin />} />      // Wildcard
<Route index element={<Home />} />                 // Index route
```

This navigation system is what makes React applications feel like modern, responsive single-page applications while maintaining the illusion of traditional multi-page navigation for users.

## Applying Conditional Rendering

State is all the data your app is currently working with. With this in mind, you can decide to conditionally render specific components in your app, based on whether specific state data has specific values. React enables this using standard JavaScript syntax and concepts.

### Example: Minimal Productivity App

Suppose you want to display a different message depending on whether it's a workday or the weekend:

- **Workdays:** “Get it done”
- **Weekends:** “Get some rest”

#### Approach 1: Separate Components

You can create two components, `Workdays` and `Weekends`, and render one based on the current day:

```jsx
function Workdays() {
    return <h2>Get it done</h2>;
}

function Weekends() {
    return <h2>Get some rest</h2>;
}

function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />;
    }
    return <Weekends />;
}
```

#### Approach 2: Using Props

If you want to use a value from props (e.g., historical data or user input):

```jsx
function CurrentMessage({ day }) {
    if (day >= 1 && day <= 5) {
        return <Workdays />;
    }
    return <Weekends />;
}
```

#### Approach 3: Element Variables

You can use element variables to separate logic from rendering:

```jsx
function CurrentMessage({ day }) {
    const weekday = day >= 1 && day <= 5;
    const weekend = day === 0 || day === 6;
    let message;

    if (weekday) {
        message = <Workdays />;
    } else if (weekend) {
        message = <Weekends />;
    } else {
        message = <h2>Invalid day</h2>;
    }

    return <div>{message}</div>;
}
```

### Conditional Rendering with Logical AND (`&&`)

You can also use the logical AND operator to conditionally render elements:

```jsx
function LogicalAndExample() {
    const val = prompt("Anything but a 0");

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val && <h2>Yay, no 0 was typed in!</h2>}
        </div>
    );
}
```

If `val` is truthy, the `<h2>` will render. If `val` is falsy (e.g., `0`, `null`, `""`), nothing will render in its place.

**Summary:**  
Conditional rendering in React is a powerful pattern that lets you display different UI based on state or props, using standard JavaScript control flow and operators.

---

## Conditional Components

Have you ever visited a website that required a user account? To log in, you click a **Log in** button, and once you’ve logged in, the button changes to **Log out**. This is achieved using **conditional rendering**.

Conditional rendering lets you display different components or UI based on certain conditions—often using `if` or `switch` statements, or logical operators.

### Example: Conditional Button

Suppose you have two components: `LoginButton` and `LogoutButton`. In a parent component, you can render one or the other based on a prop or state:

```jsx
function LoginButton() {
    return <button>Log in</button>;
}

function LogoutButton() {
    return <button>Log out</button>;
}

function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LogoutButton />;
    } else {
        return <LoginButton />;
    }
}

// Usage
<LogInOutButton isLoggedIn={false} />
```

### Principle

Conditional rendering is built on the same principle as conditional logic in JavaScript:

```js
let name;
if (Math.random() > 0.5) {
    name = "Mike";
} else {
    name = "Susan";
}
```

Or with multiple conditions:

```js
let name;
let newUser = true;
if (Math.random() > 0.5 && newUser) {
    name = "Mike";
} else {
    name = "Susan";
}
```

### Summary

- Conditional rendering lets you show different UI based on props or state.
- Use `if`, `switch`, or logical operators to control what gets rendered.
- This pattern is common for authentication, toggling UI, and more in React apps.

## Bundling Assets

Earlier, you learned what assets are in React and best practices for storing them in your project folders.

### What is Bundling?

Bundling is the process of taking all the imported files in your app—JavaScript, CSS, images, and more—and combining them into one or more files called bundles. This is handled by tools like **webpack**, which is the default bundler used by Create React App.

#### Why Use a Bundler?

- **Dependency Management:** Modern apps have many dependencies and imports. Bundlers build a dependency graph and ensure everything loads in the correct order.
- **Transpiling:** Bundlers can convert modern JavaScript (ES6+) into code that older browsers understand.
- **Optimization:** Bundlers can minify code, optimize assets, and split code for faster loading.
- **Asset Handling:** They process non-JS files (like CSS, images, SVGs) so they can be imported and used in your app.

#### Example: Imports in a React App

```js
import React from 'react';
import './index.css';
import logo from './logo.svg';
import { ThemeProvider } from './contexts/theme';
```

Each import can bring in more dependencies, creating a complex graph that bundlers manage for you.

### Webpack Modes

- **Development Mode:** Fast rebuilds, source maps for debugging, optimized for local development.
- **Production Mode:** Minified, optimized bundles for fast downloads and performance in production.

### Bundling Trade-offs

- **Single Bundle:** Simple for small apps, but can slow down loading for large apps.
- **Code Splitting:** Breaks bundles into smaller chunks, loading only what's needed (lazy loading).
- **SSR (Server-Side Rendering):** Renders React components to HTML on the server for faster initial load.
- **Client-Side Rendering:** Loads a minimal HTML file and lets React render everything in the browser.

### Asset-Heavy Apps

- **Pros:** Richer user experience, more features.
- **Cons:** Larger bundles can slow down initial load, especially on slow networks.
- **Solutions:** Use code splitting, optimize images, and consider SSR for critical content.

**Summary:**  
Bundling is essential for managing dependencies, optimizing performance, and ensuring compatibility in modern React apps. Tools like webpack automate this process, but it's important to balance asset usage and bundle size for the best user experience.