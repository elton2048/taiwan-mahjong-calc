import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [players, setPlayers] = React.useState([
    {player1: -1},
    {player2: -1},
    {player3: -1},
    {player4: -1},
  ])

  const init = () => {
    setPlayers([
      {player1: 0},
      {player2: 0},
      {player3: 0},
      {player4: 0},
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
