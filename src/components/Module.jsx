
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
    projectList: state.meta.projectList
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
        // postSignUpData
    }, dispatch)
});

class Module extends Component {

  render() {
    return (
      <div class="card">
        <div class="card-header">
          创建活动
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colspan="4" className="text-center">
                  <a href="#">
                    <i className="fa fa-plus"></i>新增项目
                  </a>
                </td>
              </tr>             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Module);
