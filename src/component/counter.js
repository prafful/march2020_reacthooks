import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }

        //this.incrementCounter = this.incrementCounter.bind(this)
    }

  /*   incrementCounter = function(){
        this.setState({counter: this.state.counter + 1})
    }
 */
/*     incrementCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }
 */

       incrementCounter =()=>this.setState({counter:this.state.counter+1})



    render() { 
        return ( 
            <div>
                <button onClick={this.incrementCounter}> 
                    Increment Counter {this.state.counter}
                </button>
                <br /><br />
                <button onClick={() => this.setState({counter:this.state.counter+1})}> 
                    One More Increment Counter {this.state.counter}
                </button>

            </div>
         );
    }
}
 
export default Counter;