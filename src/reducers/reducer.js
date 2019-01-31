import { combineReducers } from 'redux';
import {
    SIGN_UP_DATA,
    GET_PROJECT_DATA,
    ADD_PROJECT_DATA,
    EDIT_PROJECT_DATA,
    DELETE_PROJECT_DATA,
    LOG_IN_DATA,
} from '../actions/action.js';
import {
    GET_MODULE_DATA,
    ADD_MODULE_DATA,
    EDIT_MODULE_DATA,
    DELETE_MODULE_DATA,

    DELETE_INTERFACE_DATA,
    EDIT_INTERFACE_DATA
} from '../actions/module.js';

const userData = (state = {
    name: '',
    token: '',
    url: ''
}, action) => {
    switch (action.type) {
        case LOG_IN_DATA:
            return {
                ...state,
                ...action.data
            };  
        default:
            return state;              
    }
    return state;
}

const meta = (state = {
    projectList: [
        // { _id: 12345, name: 'project1' },
        // { _id: 34563, name: 'project2' },
        // { _id: 12765, name: 'project3' }
    ]
}, action) => {
    switch (action.type) {
        case SIGN_UP_DATA:
            return {
                projectList: action.data.data.content.data
            };
        case GET_PROJECT_DATA:
            return {
                projectList: action.data
            };
        case ADD_PROJECT_DATA:
            const list = JSON.parse(JSON.stringify(state.projectList));
            list.push(action.data);
            return {
                projectList: list
            };
        case EDIT_PROJECT_DATA:
            let projectList1 = JSON.parse(JSON.stringify(state.projectList));
            projectList1.forEach((item) => {
                if (item._id === action.data._id) {
                    item.name = action.data.name;
                }
            })
            return {
                projectList: projectList1
            };            
            return state;
        case DELETE_PROJECT_DATA:
            let projectList = JSON.parse(JSON.stringify(state.projectList));
            return {
                projectList: projectList.filter((item) => {
                    return item._id !== action.data._id
                })
            };                        
        default:
            return state;
    }
};

const module = (state = {
    moduleList: [
        // { _id: 12345, name: 'project1' },
        // { _id: 34563, name: 'project2' },
        // { _id: 12765, name: 'project3' }
    ]
}, action) => {
    switch (action.type) {
        case GET_MODULE_DATA:
            return {
                moduleList: action.data.modules
            };
        case ADD_MODULE_DATA:
            let moduleListNew = JSON.parse(JSON.stringify(state.moduleList));
            moduleListNew.push(action.data);
            return {
                moduleList: moduleListNew
            };            
        case EDIT_MODULE_DATA:
            const list = JSON.parse(JSON.stringify(state.moduleList));
            list.forEach(item => {
                if (item._id === action.data._id) {
                    item.name = action.data.name;
                }
            });
            return {
                moduleList: list
            };
        case DELETE_MODULE_DATA:
            let moduleListNew1 = JSON.parse(JSON.stringify(state.moduleList)).filter((item) => {
                return item._id !== action.data._id;
            });
            return {
                moduleList: moduleListNew1
            };
        case DELETE_INTERFACE_DATA:
            let delModuleList = JSON.parse(JSON.stringify(state.moduleList));
            delModuleList.forEach(item => {
                if (item._id === action.data.mid) {
                    item.interfaces = item.interfaces.filter(intface => intface._id !== action.data._id);
                }
            });
            return {
                moduleList: delModuleList
            };                             
        default:
            return state;
    }
};

const rootReducer = combineReducers({ userData, meta, module });

export default rootReducer;
