import { createStore, combineReducers } from 'redux';
import { timerReducer } from './timerReducer';
import { lapReducer } from './lapReducer';

const rootReducer = combineReducers(
  { laps: lapReducer, timer: timerReducer }
)

const store = createStore(
  rootReducer,
);

export * from './timerReducer';
export * from './lapReducer';
export default store;