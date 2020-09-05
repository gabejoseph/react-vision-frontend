import { combineReducers } from 'redux';
import listings from './listings';
import cats from './cats'

export default combineReducers({
  listings,
  cats
});
