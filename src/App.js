
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Register from './components/Register';
import Login from './components/Login';
import Project from './components/Project';
import Module from './components/Module';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Header></Header>
          </div>
          <div className="row">
            <div className="col-sm-3">
                <nav className="navbar bg-light">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">注册页面</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">登陆页面</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/project">项目列表页</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module">module列表页</Link>
                    </li>                    
                  </ul>
                </nav>
            </div>
            <div className="col-sm-9">
                <Route exact={true} path="/register" component={Register}></Route>
                <Route exact={true} path="/login" component={Login}></Route>
                <Route exact={true} path="/project" component={Project}></Route>
                <Route exact={true} path="/module" component={Module}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
