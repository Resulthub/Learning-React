import React, {Component} from "react"

class Welcome extends Component{
    constructor(){
        super()
        this.state={
            text: 'State Text'
        }
    }

    change(){
        this.setState({
            text: 'State Changed'
        })
    }

    render(){
        return (
            <div>
                <h1> {this.state.text}</h1>
                <button onClick={()=>this.change()}>change Text</button>
            </div>
            
        )
    }
}
export default Welcome