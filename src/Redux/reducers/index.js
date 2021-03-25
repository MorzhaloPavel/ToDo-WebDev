import { combineReducers } from 'redux';
import {tasks} from './tasks'
import {filter} from './filters'

const rootReducer = combineReducers({ tasks, filter });

export default rootReducer;