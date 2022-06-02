import React, { useState } from 'react';
import '../css/App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((oldCounterValue) => oldCounterValue + 1);
  }

  function decrease() {
    setCounter(function (oldCounterValue) {
      return oldCounterValue - 1;
    });
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5'>{counter}</h2>
            <button className='btn btn-success mx-3' onClick={increase}>
              Increment
            </button>
            <button className='btn btn-primary mx-3' onClick={decrease}>
              Decrement
            </button>
            <button className='btn btn-danger mx-3' onClick={reset}>
              Reset
            </button>
          </div>
          {/* <h1>Counter : {counter}</h1>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
