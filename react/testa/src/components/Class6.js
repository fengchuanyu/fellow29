import React, { Component } from 'react'
import store from '../stroe'

const add =()=>{
  console.log("add");
  return {
    type:"ADD"
  }
}
export default class Class6 extends Component {
  addHandle(){
    store.dispatch(add())
  }
  render() {
    return (
      <div>
        <h1>0</h1>
        <div><button onClick={this.addHandle.bind(this)}>add</button></div>
      </div>
    )
  }
}
