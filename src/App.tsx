import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>{show ? "show" : "no show"}</p>
      </header>
    </div>
  );
}

export default App;
