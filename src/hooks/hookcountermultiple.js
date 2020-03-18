import React, {useState} from 'react';

function HookCounterMultiple(){

    const initialCounter = 0
    const [counter, changeCounter] = useState(initialCounter)

    const incrementFour = () =>{
        for(let i=0; i<4; i++){
            changeCounter(previousCounter => previousCounter + 1)
        }
        
    }

return(

    <div>
        <button onClick={()=> changeCounter(c => c+1)} >Increment {counter} </button>
        <button onClick={()=> changeCounter(c => c-1)} >Decrement {counter} </button>
        <button onClick={()=> changeCounter(initialCounter)} >Reset {counter} </button>
        <button onClick={incrementFour}>Increment 4</button>
    </div>
)


}

export default HookCounterMultiple