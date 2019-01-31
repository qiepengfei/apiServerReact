
import React, { Component } from 'react';
import { getUrlParam } from '../util/util';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  login,
  logout
} from '../actions/action.js';

// 自动监听 state -> pros
const mapStateToProps = state => ({
    name: state.userData.name,
    token: state.userData.token,
    url: state.userData.url
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
      login,
      logout
    }, dispatch)
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }
  componentDidMount() {
    if (getUrlParam('logout')) {
      this.props.actions.logout({
        logout: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token && nextProps.url) {
      document.cookie = "token=" + nextProps.token;
      window.location = nextProps.url;      
    }
  }

  inpChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.actions.login({
      ...this.state
    });
  }

  render() {
    const { name, password } = this.state;
    return (
        <form className="register-wrap" onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="name">用户名:</label>
            <input type="text" 
              className="form-control" 
              id="name" 
              value={name}
              onChange={this.inpChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码:</label>
            <input type="password" 
              className="form-control" 
              id="password" 
              value={password}
              onChange={this.inpChange} />
          </div>
          <button type="submit" className="btn btn-primary">登陆</button>             
        </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

