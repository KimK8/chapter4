//import logo from './logo.svg';
import React, { useState } from 'react'; 
import './App.css';

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count <= 10
        ? <p>You have pressed the button {count} times </p>
        : <p>You have pressed the button more than 10 times </p>
      }
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => {if (count > 0) setCount(count - 1)}}>-</button>
    <button onClick={() => setCount(0)}>Clear</button>

    {props.message.length > 10
      ? <p>Too long</p>
      : <p>{props.message}</p>
    }
  </div>
);
}

export default App;
