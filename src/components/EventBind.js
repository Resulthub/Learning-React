import React, { Component } from 'react';

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: 'Hello'
      }
    }

    ClickHandler(){
        this.setState ({
            text: 'Bye-Bye !'
        })
    }
    // ChangeText(){
    //     this.setState({
    //         text: 'State Has been Changed'
    //     })
    // }
    
  render() {
    return (
        <div>
            <div>{this.state.text}</div>
            
            <button onClick={this.ClickHandler.bind(this)}>Click</button>
           
        </div>
    )
  }
}

export default EventBind;
