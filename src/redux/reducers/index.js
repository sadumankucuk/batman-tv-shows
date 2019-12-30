import { combineReducers } from 'redux';
import {
  batmanShowListReducers,
  batmanShowReducers
} from './batmanShowsReducers';

const rootReducer = combineReducers({
  shows: batmanShowListReducers,
  show: batmanShowReducers
});

export default rootReducer;
