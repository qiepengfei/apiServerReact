
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    postSignUpData
} from '../actions/action.js';


// 自动监听 state -> pros
const mapStateToProps = state => ({
    meta: state.meta
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
        postSignUpData
    }, dispatch)
});

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usr: '',
      pwd: '',
      pwd2: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.postSignUpData({
      name: 'zhangsan',
      age: 24
    });
  }

  render() {
    const { usr, pwd, pwd2 } = this.state;
    return (
        <form className="register-wrap" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="usr">用户名:</label>
            <input 
              type="text" 
              className="form-control" 
              id="usr" 
              value={usr} 
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">密码:</label>
            <input type="password" className="form-control" id="pwd" value={pwd} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd2">确认密码:</label>
            <input type="password" className="form-control" id="pwd2" value={pwd2} onChange={this.handleChange} />
          </div> 
          <button type="submit" className="btn btn-primary">注册</button>             
        </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
