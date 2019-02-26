import React, { Component } from 'react';
import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import Class3 from './components/Class3';
import Class4 from './components/Class4';
import Class5 from './components/Class5';
import Class6 from './components/Class6';
import Class7 from './components/Class7';
import {
   BrowserRouter as Router,
   Route,  
   Link,
   Switch,
   Redirect
  } from "react-router-dom";
  import {Provider} from 'react-redux'
  import store from './stroe'
const Test =({match}) => {
  console.log(match.params.id);
  
  return (
    <div>
      <h1>这是一个测试组件</h1>
    </div>
  )
}
const Error404 = ()=><h1>404</h1>
class App extends Component {
  render() {

    return (
      <div className="App">
      <Provider store={store}>
      <Router>
        <div>
          {/* <Link to="/">Class1</Link>|
          <Link to="/class2/100">Class2</Link>|
          <Link to="/class3">Class3</Link>| */}
          <Link to="/class4">Class4</Link>|
          <Link to="/class5">Class5</Link>|
          <Link to="/class6">Class6</Link>|
          <Link to="/class7">Class7</Link>|
          {/* <Link to="/test/101">test</Link>|
          <Link to="/render">render</Link>
          <Link to="/abcd">abcd</Link> */}
          <Switch>
            <Route path={'/class2/:id'} component={Class2}/>
            <Route path={'/class3'} component={Class3}/>
            <Route path={'/class4'} component={Class4}/>
            <Route path={'/class5'} component={Class5}/>
            <Route path={'/class6'} component={Class6}/>
            <Route path={'/class7'} component={Class7}/>
            <Route path={'/test/:id'} component={Test}/>
            <Route path={'/render'} render={()=><Redirect to="/"/>}/>
            <Route exact path={'/'} component={Class1}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
