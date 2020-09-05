import { combineReducers } from 'redux';
import listings from './listings';
import users from './users'

export default combineReducers({
  listings,
  users
});
