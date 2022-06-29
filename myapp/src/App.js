import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'
import { useState } from 'react'

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
        {showTimer ? <Timer /> : <div>no timer</div>}
        <button onClick={() => {setShowTimer(false)}}>hide</button>

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
