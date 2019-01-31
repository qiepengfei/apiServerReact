
import axios from 'axios';
import { url } from '../config/config';

export const LOG_IN_DATA = 'LOG_IN_DATA';

export const SIGN_UP_DATA = 'SIGN_UP_DATA';
export const GET_PROJECT_DATA = 'GET_PROJECT_DATA';
export const ADD_PROJECT_DATA = 'ADD_PROJECT_DATA';
export const EDIT_PROJECT_DATA = 'EDIT_PROJECT_DATA';
export const DELETE_PROJECT_DATA = 'DELETE_PROJECT_DATA';

export const generalActionCreator = type => data => ({ type, data });

// 登陆
export const login = params => dispatch => {
    return axios.post(url.login, params).then(data => {
        const obj = {
            name: params.name,
            ...data.data
        };
        dispatch(generalActionCreator(LOG_IN_DATA)(obj));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 登出
export const logout = params => dispatch => {
    return axios.post(url.logout, params).then(data => {
        // dispatch(generalActionCreator(LOG_IN_DATA)(obj));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 获取概览数据
export const postSignUpData = params => dispatch => {
    return axios.get(url.signUpUrl, params).then(data => {
        dispatch(generalActionCreator(SIGN_UP_DATA)(data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 获取项目列表
export const getProjectData = params => dispatch => {
    return axios.get(url.getProjects, params).then(data => {
        dispatch(generalActionCreator(GET_PROJECT_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 增加项目
export const addProject = params => dispatch => {
    return axios.post(url.addProject, params).then(data => {
        dispatch(generalActionCreator(ADD_PROJECT_DATA)(data.data));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 编辑项目
export const editProject = params => dispatch => {
    return axios.put(url.editProject, params).then(data => {
        dispatch(generalActionCreator(EDIT_PROJECT_DATA)({
            _id: params._id,
            name: params.name
        }));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
// 删除项目
export const deleteProject = params => dispatch => {
    return axios.delete(url.deleteProject, { params }).then(data => {
        dispatch(generalActionCreator(DELETE_PROJECT_DATA)({
            _id: params._id
        }));
    }).catch(error => {
        console.log('chu cuo le!!', error)
        // GraceMessage.error(error);
    });   
}
