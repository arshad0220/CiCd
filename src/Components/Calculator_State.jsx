import React,  {useState} from 'react';

function Calculator_State (){
    const [count, setcount] = useState(0);

    const Increment = () => {
        setcount(count + 1);
    }

    const Decrement = () => {
        setcount (Counts => Math.max(0,Counts - 1));
    }

    const Reset = () => {
        setcount(0);
    }

    return(
        <div className='Calculator_State'>
            <h1>Counter</h1>
            <p>Counter: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>reset</button>
        </div>
    )

}

export default Calculator_State;