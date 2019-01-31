
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProjectData,
  addProject,
  editProject,
  deleteProject
} from '../actions/action.js';


// 自动监听 state -> pros
const mapStateToProps = state => ({
    projectList: state.meta.projectList
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
      getProjectData,
      addProject,
      editProject,
      deleteProject
    }, dispatch)
});

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inpStatus: false,
      editId: null,
      addStatus: false
    };
  }
  componentDidMount() {
    this.props.actions.getProjectData();
  }
  addItem = (event) => {
    this.setState((prevState, props) => ({
      value: '',
      inpStatus: !prevState.inpStatus
    }));
  }
  addItem = (event) => {
    this.setState({
      value: '',
      inpStatus: true,
      editId: null,
      addStatus: true     
    }, () => {
      this.refs.myInput.focus();
    });
  }
  editClick(_id, name, event) {
    this.setState({
      value: name,
      inpStatus: true,
      editId: _id,
      addStatus: false
    }, () => {
      this.props.actions.editProject({
        _id,
        name: this.state.value
      });
    });
  }  
  deleteClick(_id, event) {
    this.props.actions.deleteProject({
      _id
    });
  }  
  handleChange = (event) => {
    this.setState({
      value: event.target.value 
    });
  }
  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
        if (this.state.editId && !this.state.addStatus) { // 编辑
          this.props.actions.editProject({
            name: this.state.value,
            _id: this.state.editId
          }).then(() => {
            this.setState({
              value: '',
              inpStatus: false
            });
          });
        } else if(!this.state.editId && this.state.addStatus) {
          this.props.actions.addProject({ // 新增
            name: this.state.value
          }).then(() => {
            this.setState({
              value: '',
              inpStatus: false
            });
          });
        }
    }
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">项目列表</li>
        {
          this.props.projectList.map(item => {
            return (
              <li className="list-group-item" key={item._id}>
                <div className="row">
                  <div className="col-sm-2">
                    <a href={`/module?_id=${item._id}`}>{item.name}</a>
                  </div>
                  <div className="col-sm-2 offset-sm-8 clearfix">
                    <a href="javascript:void(0);" 
                      className="float-left fa fa-pencil" 
                      onClick={this.editClick.bind(this, item._id, item.name)}>编辑</a>
                    <a href="javascript:void(0);" 
                      className="float-right fa fa-minus" 
                      onDoubleClick={this.deleteClick.bind(this, item._id)}>双击删除</a>
                  </div>
                </div>
              </li>
            )
          })
        }
        {
          this.state.inpStatus &&
          <li className="list-group-item bg-light" >
            <div className="form-group col-sm-4">
              <label htmlFor="projectName">项目名称:</label>
              <input type="text" 
                className="form-control" 
                id="projectName" 
                ref="myInput"
                value={this.state.value} 
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange} />
            </div>
          </li>
        }
        <li className="list-group-item text-center text-success bg-light" onClick={this.addItem}>
          <i className="fa fa-plus"></i>增加项目
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
