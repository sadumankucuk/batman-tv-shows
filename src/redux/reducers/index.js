import { combineReducers } from 'redux';
import {
  batmanShowListReducers,
  batmanShowReducers
} from './batmanShowsReducer';

const rootReducer = combineReducers({
  shows: batmanShowListReducers,
  show: batmanShowReducers
});

export default rootReducer;
