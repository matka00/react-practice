import logo from './logo.svg';
import './App.css';
import Timer2 from './components/Timer2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer2 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. alma
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
