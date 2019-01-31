
import React, { Component } from 'react';
import { getUrlParam } from '../util/util';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getModuleData,
  addModule,
  editModule,
  deleteModule,

  deleteInterface,
  editInterface,
} from '../actions/module.js';


// 自动监听 state -> pros
const mapStateToProps = state => ({
    moduleList: state.module.moduleList
});

// dispatch->props
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({
      getModuleData,
      addModule,
      editModule,
      deleteModule,
      deleteInterface,
      editInterface,
    }, dispatch)
});

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpStatus: false,
      value: ''
    };
  }
  componentDidMount() {
    const _id = getUrlParam('_id');
    this.pid = _id;
    this.props.actions.getModuleData({
      pid: _id
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    nextProps.moduleList.forEach(item => {
      this.setState({
        [`${item._id}name`]: item.name,
        [`${item._id}showName`]: item.name,
        [`${item._id}status`]: false
      })
    });
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value 
    });
  }
  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.props.actions.addModule({
        name: this.state.value,
        pid: this.pid
      }).then(() => {
        this.setState({
          value: '',
          inpStatus: false
        });
      });
    }
  } 
  addModuleClick = () => {
    this.setState({
      inpStatus: true,
      value: ''
    }, () => {
      this.refs.myInput.focus();
    });
  }  



  editClick = (_id) => {

  }

  deleteClick = (mid, _id) => {
    this.props.actions.deleteInterface({
      mid,
      _id
    });
  }  


  moduleEdit = (_id) => {
    this.setState({
      [`${_id}status`]: true
    });
  }
  submitEdit = (_id) => {
    this.props.actions.editModule({
      _id,
      pid: this.pid,
      name: this.state[`${_id}showName`]
    });
  }
  cancelEdit = (_id) => {
    this.setState({
      [`${_id}showName`]: this.state[`${_id}name`],
      [`${_id}status`]: false
    });
  }
  moduleDelete = (_id) => {
    this.props.actions.deleteModule({
      _id
    });
  }
  moduleInpChange = (e) => {
    this.setState({
      [`${e.target.dataset.moduleid}showName`]: e.target.value
    });
  }
  render() {
    console.log(this.props.moduleList)
    return (
      <React.Fragment>
        {
          this.props.moduleList.map((item) => {
            return (
              <div className="card" key={item._id}>
                <div className="card-header">
                  {
                    this.state[`${item._id}status`] ?
                    (
                      <div className="col-sm-3">
                        <input type="text" 
                          className="form-control"
                          value={this.state[`${item._id}showName`]}
                          onChange={this.moduleInpChange}
                          data-moduleid={item._id} />
                          <button type="button" className="btn btn-primary" onClick={this.submitEdit.bind(this, item._id)}>提交</button>
                          <button type="button" className="btn btn-secondary" onClick={this.cancelEdit.bind(this, item._id)}>取消</button>
                      </div>
                    ) :
                    <span>{item.name}</span> 
                  }
                  <a href="javascript:void(0);" 
                    className="float-right fa fa-minus" 
                    onDoubleClick={this.moduleDelete.bind(this, item._id)}>双击删除</a>  
                  <a href="javascript:void(0);" 
                    className="float-right fa fa-pencil" 
                    onClick={this.moduleEdit.bind(this, item._id)}>编辑</a>                                    
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">接口名称（版本）</th>
                        <th scope="col">请求路径</th>
                        <th scope="col">请求方式</th>
                        <th scope="col">修改者</th>
                        <th scope="col">修改日期</th>
                        <th scope="col">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        item.interfaces && item.interfaces.map((intface) => {
                          return (
                            <tr key={intface._id}>
                              <td>{intface.name}</td>
                              <td>{intface.url}</td>
                              <td>{intface.method}</td>
                              <td>{intface.author}</td>
                              <td>{intface.updateDate}</td>
                              <td>
                                <a href="javascript:void(0);" 
                                  className="fa fa-pencil" 
                                  onClick={this.editClick.bind(this, intface._id, intface.name)}>编辑</a>
                                <a href="javascript:void(0);" 
                                  className="fa fa-minus" 
                                  onDoubleClick={this.deleteClick.bind(this, item._id, intface._id)}>双击删除</a>
                              </td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <td colSpan="6" className="text-center">
                          <a target="_blank" href={`/interface?pid=${this.pid}&mid=${item._id}`}>
                            <i className="fa fa-plus"></i>新增项目
                          </a>
                        </td>
                      </tr>             
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })

        }
        <div className="card">
          <div className="card-header text-center">
            <span className="text-success" onClick={this.addModuleClick}>
              <i className="fa fa-plus"></i>
              新增模块
            </span>                                 
          </div>
          {
            this.state.inpStatus && (<div className="card-body">
              <div className="form-group col-sm-4">
                <label htmlFor="moduleName">模块名称:</label>
                <input type="text" 
                  className="form-control" 
                  id="moduleName" 
                  ref="myInput"
                  value={this.state.value} 
                  onKeyUp={this.handleKeyUp}
                  onChange={this.handleChange} />
              </div>
            </div>)            
          }
        </div>       
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Module);
