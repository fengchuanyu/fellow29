import React, { Component } from 'react'
import store from '../store'
import {connect} from 'react-redux'

const add = (num) => {
  return {
    type:"ADD",
    step:num
  }
}
class Class3 extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }
  

  addHandle(){
    this.props.add(10)
  }
  render() {
    
    
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.addHandle.bind(this)}>add</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    count:state.count
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    add:(num)=>dispatch(add(num))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Class3) 
