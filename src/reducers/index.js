import { combineReducers } from 'redux';
import alert from './alert.reducer';
import authentication from './authentication.reducer'

export default combineReducers({
  alert,
  authentication
});
