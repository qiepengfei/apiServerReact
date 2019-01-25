
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

class Project extends Component {

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
      <ul className="list-group">
        <li className="list-group-item">项目列表</li>
        {
          this.props.projectList.map(item => {
            return (
              <li className="list-group-item">
                <div className="row">
                  <div className="col-sm-2">
                    <a href="#">{item.name}</a>
                  </div>
                  <div className="col-sm-2 offset-sm-8 clearfix">
                    <a href="javascript:void(0);" className="float-left fa fa-pencil">编辑</a>
                    <a href="javascript:void(0);" className="float-right fa fa-minus">双击删除</a>
                  </div>
                </div>
              </li>
            )
          })
        }
        <li className="list-group-item bg-light">
          <div class="form-group">
            <label for="projectName">项目名称:</label>
            <input type="text" class="form-control" id="projectName" />
          </div>
        </li>       
        <li className="list-group-item text-center text-success bg-light">
          <i className="fa fa-plus"></i>新增项目
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
