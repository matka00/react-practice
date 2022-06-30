import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'
import { useState } from 'react'
import Timer2 from './components/Timer2';

function App() {

  const [showTimer, setShowTimer] = useState(true)

/*   const state = useState(true)
  console.log(state)
  const showTimer = state[0]
  const setShowTimer = state[1]
 */
  //ez az első sor hosszabban megírva; a showTimer az állapotot adja vissza, a setShowTimer pedig az állapot változtatására alkalmas függvény


  return (
    <div className="App">
      <header className="App-header">
        <Timer2 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          alma
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
