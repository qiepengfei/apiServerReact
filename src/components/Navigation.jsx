
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Navigation extends Component {
    render() {
        return (
          <nav className="navbar bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">注册页面</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">登陆页面</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">项目列表页</a>
              </li>
            </ul>
          </nav>
        );
    }
}

export default Navigation;
