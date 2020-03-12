import { combineReducers } from 'redux';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
  blogState: blogReducer,
});

export default rootReducer;
