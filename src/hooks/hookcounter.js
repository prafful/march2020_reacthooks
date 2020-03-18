import React, { useState } from 'react';

function HookCounter(){

    //useState will return an array with two values
    //1. initial state value, 
    //2. function which wil update state value
    const [counter, changeCounter] = useState(0)

    return (
        <div>
            <button onClick={()=> changeCounter(counter+1)}>
                Counter {counter}
            </button>
        </div>
    )

}


export default HookCounter;