import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

  render() {

    return(this.state.isLoggedIn && <div>Hello Sadik True</div>)

    // return(
    //     this.state.isLoggedIn ? <div>Hello Sadik True</div> : <div>Hello Sadik False</div>

    // )
    //   let message

    //   if(this.state.isLoggedIn){
    //       message = <div>Hello Sadik True</div>
    //   }else{
    //       message = <div>Hello Sadik False</div>
    //   }

    //   return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(<div>Hello Sadik True</div>)
        // }else{
        //     return(<div>Hello Sadik False</div>)   
        // }
      
    // return (
    // <div>
    //     <div>Hello Sadik True</div>
    //     <div>Hello Sadik False</div>
    // </div>
    // )
  }
}

export default UserGreeting;
