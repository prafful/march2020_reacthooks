import React, {useState} from 'react';

function HookObject(){

    const [fullname, setName] = useState({firstName:'Prafful', lastName:'Daga'})


    return(
        <div>
            <form>
                First Name: 
                <input type="text" 
                       value={fullname.firstName}
                       onChange={e => setName({...fullname, firstName: e.target.value})}/>
                <br />
                Last Name: 
                <input type="text" 
                       value={fullname.lastName}
                       onChange={e => setName({...fullname, lastName: e.target.value})}/>
                <br />
                <h2>First Name: {fullname.firstName} </h2>
                <h2>Last Name: {fullname.lastName}</h2>
                {JSON.stringify(fullname)}
            </form>
        </div>
    )
}

export default HookObject;