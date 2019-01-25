import { combineReducers } from 'redux';
import {
    // 页面
    // GET_SUMMARY_DATA,
    // GET_TREND_DATA,
    // GET_SPIDER_DATA,
    SIGN_UP_DATA
} from '../actions/action.js';


const meta = (state = {
    projectList: [
        { _id: 12345, name: 'project1' },
        { _id: 34563, name: 'project2' },
        { _id: 12765, name: 'project3' }
    ]
}, action) => {
    switch (action.type) {
        case SIGN_UP_DATA:
            return {
                projectList: action.data.content.data
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({ meta });

export default rootReducer;
