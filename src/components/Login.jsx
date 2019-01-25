
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {
    render() {
        return (
            <form className="register-wrap">
              <div className="form-group">
                <label htmlFor="usr">用户名:</label>
                <input type="text" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">密码:</label>
                <input type="password" className="form-control" id="pwd" />
              </div>
              <button type="submit" className="btn btn-primary">登陆</button>             
            </form>
        );
    }
}

export default Login;
