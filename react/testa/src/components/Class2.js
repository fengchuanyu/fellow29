import React, { Component } from 'react'

export default class Class2 extends Component {
  render() {
    console.log(this.props.match.params.id);
    
    return (
      <div>
        <h1>Class2</h1>
      </div>
    )
  }
}

