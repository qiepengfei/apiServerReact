
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getInterfaceData,
  addInterface,
  editInterface,
  deleteInterface
} from '../actions/interface.js';


// 自动监听 state -> pros
const mapStateToProps = state => ({
    moduleList: state.module.moduleList
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
      getInterfaceData,
      addInterface,
      editInterface,
      deleteInterface
    }, dispatch)
});

// 获取参数
const getUrlParam = (name) => {
  const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  return r[2];
};

class Interface extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pid: getUrlParam('pid'),
      mid: getUrlParam('mid'),
      author: 'qpf',
      createDate: '20180818',
      name: '',
      url: '',
      method: 'get',
      inObject: '',
      outObject: ''
    }
  }

  saveClick = (e) => {
    e.preventDefault();
    this.props.actions.addInterface({
      ...this.state
    });
  }
  changeClick = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    const { name, url, method, inObject, outObject } = this.state;
    return (
      <form onSubmit={this.saveClick}>
        <div className="form-group">
          <label htmlFor="name">接口名称:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={this.changeClick} />
        </div>
        <div className="form-group">
          <label htmlFor="url">请求路径:</label>
          <input type="text" className="form-control" id="url" value={url} onChange={this.changeClick} />
        </div>
        <div className="form-group">
          <label htmlFor="method">请求方法:</label>
          <select className="form-control" id="method" value={method} onChange={this.changeClick}>
            <option value="get">get</option>
            <option value="post">post</option>
            <option value="put">put</option>
            <option value="delete">delete</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="inObject">请求参数:</label>
          <textarea className="form-control" rows="3" id="inObject" value={inObject} onChange={this.changeClick}></textarea>
        </div>   
        <div className="form-group">
          <label htmlFor="outObject">返回值:</label>
          <textarea className="form-control" rows="5" id="outObject" value={outObject} onChange={this.changeClick}></textarea>
        </div>               
        <button type="submit" className="btn btn-primary">保存</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
