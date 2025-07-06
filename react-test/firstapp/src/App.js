
import './App.css';

function Nav (props) {
  return (
    <nav className='main-nav'>
      <h1>{props.title}</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export { Nav };

function App() {
  return (
    <div className="App">
      <Nav title="My React App" />
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
      </header>
    </div>
  );
} 
export default App;