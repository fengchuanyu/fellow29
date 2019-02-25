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

 const MenuLink = ({to,lable}) =>{
   return(
    <Route
      path={to}
      children={({match})=>{
        console.log(match);
        
        return(
          <div>
            <Link to={to}>
              {match?">":""}{lable}
            </Link>
          </div>
        )
      }}
    />
   )
 }
 const Home = ()=>{
   return(
     <h1>home</h1>
   )
 }
 const About = ()=>{
  return(
    <h1>about</h1>
  )
}
export default class Class4 extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    let url = this.props.match.url
    return (
      <div>
        <Router>
          <div>
            <MenuLink to={`${url}/home`} lable="home"/>
            <MenuLink to={`${url}/about`} lable="about"/>
            <Route path={`${url}/home`} component={Home} />
            <Route path={`${url}/about`} component={About} />
          </div>
        </Router>
      </div>
    )
  }
}
