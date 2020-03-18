import React from 'react';
import Counter from './component/counter';
import HookCounter from './hooks/hookcounter';
import HookCounterMultiple from './hooks/hookcountermultiple';
import HookObject from './hooks/hookstateobject';


function App() {
  return (
    <div >
        <h1>Hooks Beginner!</h1>
        <ol>
          <li>
            Class based components: 
            <Counter></Counter>    
          </li>
          <li>
            React Hooks:
            <HookCounter></HookCounter>
          </li>
          <li>
            Using Hook to change States:
            <HookCounterMultiple></HookCounterMultiple>
          </li>
          <li>
            Using Object in Hook:
            <HookObject></HookObject>
          </li>
        </ol>
        
    </div>
  );
}

export default App;
