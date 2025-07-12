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
