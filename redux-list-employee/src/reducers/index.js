'use strict';
import {combineReducers} from 'redux';
import employees from './app';

const appReducer = combineReducers({
    employees : employees
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
