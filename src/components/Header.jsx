
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    // postSignUpData
} from '../actions/action.js';


// 自动监听 state -> pros
const mapStateToProps = state => ({
    // projectList: state.meta.projectList
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
        // postSignUpData
    }, dispatch)
});

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">username</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">账号管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">登出</a>
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
