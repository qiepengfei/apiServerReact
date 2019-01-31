
import React, { Component } from 'react';
import './App.scss';
import Register from './components/Register';
import Login from './components/Login';
import Project from './components/Project';
import Module from './components/Module';
import Interface from './components/Interface';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item nav-username">
              <span className="badge badge-pill badge-info">username</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/project">账号管理</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login?logout=true">登出</Link>
            </li>
          </ul>
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
                    <li className="nav-item">
                      <Link className="nav-link" to="/interface">新增接口页面</Link>
                    </li>                                       
                  </ul>
                </nav>
            </div>
            <div className="col-sm-9">
                <Route exact={true} path="/register" component={Register}></Route>
                <Route exact={true} path="/login" component={Login}></Route>
                <Route exact={true} path="/project" component={Project}></Route>
                <Route exact={true} path="/module" component={Module}></Route>
                <Route exact={true} path="/interface" component={Interface}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
