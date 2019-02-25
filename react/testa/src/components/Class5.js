import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
  withRouter,
  Prompt,
  NavLink
 } from "react-router-dom";

const One = ()=><h1>one</h1>
const Two = ()=><h1>Two</h1>

const PreventingTransitionsExample =()=>{
  return(
    <div>
      <Router>
          <div>
            <Link to="/one">one</Link>
            <Link to="/two">two</Link>
            <Link to="/form">Form</Link>
            <Route path="/one" component={One}/>
            <Route path="/two" component={Two}/>
            <Route path="/form" component={Form}/>
          </div>
        </Router>
      </div>
  )
}
 class Form extends Component {
   constructor(props) {
     super(props);
     this.state={
       val:''
     }
   }
   
  change(event){
    this.setState({
      val:event.target.value
    })
  }
  render() {
    return (
      <div>
        <Prompt when={this.state.val.length?true:false} message="确定离开？"/>
        <input type="text" onChange={this.change.bind(this)}/>
        <button>reset</button>
      </div>
    )
  }
}
export default PreventingTransitionsExample
