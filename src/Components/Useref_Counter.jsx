import React, { useState, useRef } from 'react';

const Useref_Counter = () => {
  // State counter
  const [stateCounter, setStateCounter] = useState(0);

  // Ref counter
  const refCounter = useRef(0);

  // Function to increment the state counter
  const incrementStateCounter = () => {
    setStateCounter(prevCount => prevCount + 1);
  };

  // Function to increment the ref counter
  const incrementRefCounter = () => {
    refCounter.current += 1;
    console.log('Ref Counter:', refCounter.current);
  };

  return (
    <div>
      <h1>Counter Example</h1>

      <div>
        <h2>State Counter</h2>
        <p>{stateCounter}</p>
        <button onClick={incrementStateCounter}>Increment State Counter</button>
      </div>

      <div>
        <h2>Ref Counter</h2>
        <p>{refCounter.current}</p>
        <button onClick={incrementRefCounter}>Increment Ref Counter</button>
      </div>
    </div>
  );
};

export default Useref_Counter;
