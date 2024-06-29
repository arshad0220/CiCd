import React, {useState} from 'react';

function Counter(){
    const [Count, SetCount] = useState('0');

    const Increment = () => {
        SetCount(Count + 1);
    }

    const Decrement = () => {
        SetCount(Count => Math.max(0,Count - 1));
    }

    const Reset = () => {
        SetCount(0);
    }

    return(
        <div>
            <h1>Counters Test</h1>
            <p>Count: {Count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;