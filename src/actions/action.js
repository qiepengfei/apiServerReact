
import axios from 'axios';
import { url } from '../config/config';

const pre = 'http://apimock.dev.bid.jd.com';

export const SIGN_UP_DATA = 'SIGN_UP_DATA';

export const generalActionCreator = type => data => ({ type, data });

// 获取概览数据
export const postSignUpData = params => dispatch => {
    return axios.post(pre + url.signUpUrl, params).then(data => {
        dispatch(generalActionCreator(SIGN_UP_DATA)(data));
    }).catch(error => {
        console.log('chu cuo le!!')
        // GraceMessage.error(error);
    });   
}

