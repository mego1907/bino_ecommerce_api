import { combineReducers } from 'redux';
import shoppingReducer from './shopping/shoppingReducer';

const rootReducer = combineReducers({
  shopping: shoppingReducer
})

export default rootReducer;