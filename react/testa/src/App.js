import React, { Component } from 'react';
import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import {
   BrowserRouter as Router,
   Route,  
   Link,
   Switch,
   Redirect
  } from "react-router-dom";
const Test =({match}) => {
  console.log(match.params.id);
  
  return (
    <div>
      <h1>这是一个测试组件</h1>
    </div>
  )
}
class App extends Component {
  render() {

    return (
      <div className="App">
      <Router>
        <div>
          <Link to="/">Class1</Link>|
          <Link to="/class2/100">Class2</Link>|
          <Link to="/test/101">test</Link>|
          <Link to="/render">render</Link>
          <Switch>
            <Route path={'/class2/:id'} component={Class2}/>
            <Route path={'/test/:id'} component={Test}/>
            <Route path={'/render'} render={()=><Redirect to="/"/>}/>
            <Route path={'/'} component={Class1}/>
            
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
