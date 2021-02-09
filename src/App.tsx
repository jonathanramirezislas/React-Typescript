import React from 'react';
import { Counter } from './components/Counter';
import { Timer } from './components/Timer';
import { User } from './components/User';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>useState!!</h2>
      <Counter/>
      <User/>
      <hr/>
      <h2>useEffect!!</h2>
      <Timer/>
    </>
  );
}

export default App;