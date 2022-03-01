import React, { Component } from 'react';

export default class hello2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    counter() {
        this.setState({
            count: this.state.count + 1
            
        },()=>{
                console.log('Callback value', this.state.count)  
            }
        )
       
    }
    
  render() {
    return( 
        <div>
            
            <button onClick={()=>this.counter()}>Counter</button>
            <div>{this.state.count}</div>
        </div>
    )
  }
}
