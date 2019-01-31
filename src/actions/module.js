
import axios from 'axios';
import { url } from '../config/config';

export const GET_MODULE_DATA = 'GET_MODULE_DATA';
export const ADD_MODULE_DATA = 'ADD_MODULE_DATA';
export const EDIT_MODULE_DATA = 'EDIT_MODULE_DATA';
export const DELETE_MODULE_DATA = 'DELETE_MODULE_DATA';

export const ADD_MODULE_CONTENT = 'ADD_MODULE_CONTENT';
export const EDIT_MODULE_CONTENT = 'EDIT_MODULE_CONTENT';
export const DELETE_MODULE_CONTENT = 'DELETE_MODULE_CONTENT';

export const DELETE_INTERFACE_DATA = 'DELETE_INTERFACE_DATA';
export const EDIT_INTERFACE_DATA = 'EDIT_INTERFACE_DATA';

export const generalActionCreator = type => data => ({ type, data });

// 获取项目列表
export const getModuleData = params => dispatch => {
    return axios.get(url.getModules, {params}).then(data => {
        dispatch(generalActionCreator(GET_MODULE_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 增加项目
export const addModule = params => dispatch => {
    return axios.post(url.addModule, params).then(data => {
        dispatch(generalActionCreator(ADD_MODULE_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 删除项目
export const deleteModule = params => dispatch => {
    return axios.delete(url.deleteModule, { params }).then(data => {
        const data1 = {
            data: data.data,
            _id: params._id
        };
        dispatch(generalActionCreator(DELETE_MODULE_DATA)(data1));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 编辑项目
export const editModule = params => dispatch => {
    return axios.put(url.editModule, params).then(data => {
        dispatch(generalActionCreator(EDIT_MODULE_DATA)(params));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}

// 删除接口
export const deleteInterface = params => dispatch => {
    return axios.delete(url.deleteInterface, { params }).then(data => {
        dispatch(generalActionCreator(DELETE_INTERFACE_DATA)(params));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
export const editInterface = params => dispatch => {
    return axios.delete(url.deleteInterface, { params }).then(data => {
        const data1 = {
            data: data.data,
            _id: params._id
        };
        dispatch(generalActionCreator(EDIT_INTERFACE_DATA)(data1));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}