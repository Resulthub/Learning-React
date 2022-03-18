import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            count: 0,
            incre_5: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1,
        //     incre_5: this.state.incre_5 + 5
        // },
        // ()=>{
        //     console.log('Callback value', this.state.count)  
        // }
        // )
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  render() {
    return <div>
        <button onClick={()=> this.incrementFive()}>Increment</button>
        <div>Count - {this.state.count}</div>
        <div>Increment 5 - {this.state.incre_5}</div>
        
    </div>;
  }
}

export default Counter;
