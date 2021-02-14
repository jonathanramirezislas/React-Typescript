import React from 'react';
import { Counter } from './components/Counter';
import { Timer } from './components/Timer';
import { User } from './components/User';
import { CounterReducer } from './components/CounterReducer';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>useState!!</h2>
      <Counter/>
      <hr/>
      <User/>
      <hr/>
      <h2>useEffect!!</h2>
      <Timer/>
      <hr/>
      <h2>useReducer!!</h2>
      <CounterReducer/>
      <hr/>
    </>
  );
}

export default App;