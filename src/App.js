import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Register></Register>
        <Login></Login>
      </div>
    );
  }
}

export default App;
