import React, { Component } from 'react'

export class PureComp extends Component {
  render() {
    console.log('Pure comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp