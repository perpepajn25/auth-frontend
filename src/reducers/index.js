import { combineReducers } from 'redux';
import authReducer from './authReducer'
import secretReducer from './secretReducer'
//import top level reducers

const rootReducer = combineReducers({
  authState: authReducer,
  secretState: secretReducer
})

export default rootReducer;
