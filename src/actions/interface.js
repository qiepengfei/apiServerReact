
import axios from 'axios';
import { url } from '../config/config';

export const GET_INTERFACE_DATA = 'GET_INTERFACE_DATA';
export const ADD_INTERFACE_DATA = 'ADD_INTERFACE_DATA';
export const EDIT_INTERFACE_DATA = 'EDIT_INTERFACE_DATA';
export const DELETE_INTERFACE_DATA = 'DELETE_INTERFACE_DATA';

export const generalActionCreator = type => data => ({ type, data });

// 获取项目列表
export const getInterfaceData = params => dispatch => {
    return axios.get(url.getModules, {params}).then(data => {
        dispatch(generalActionCreator(GET_INTERFACE_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 增加项目
export const addInterface = params => dispatch => {
    return axios.post(url.addInterface, params).then(data => {
        dispatch(generalActionCreator(ADD_INTERFACE_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 删除项目
export const deleteInterface = params => dispatch => {
    return axios.delete(url.deleteInterface, { params }).then(data => {
        const data1 = {
            data: data.data,
            _id: params._id
        };
        dispatch(generalActionCreator(DELETE_INTERFACE_DATA)(data1));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}
// 编辑项目
export const editInterface = params => dispatch => {
    return axios.get(url.editInterface, params).then(data => {
        dispatch(generalActionCreator(EDIT_INTERFACE_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
    });   
}