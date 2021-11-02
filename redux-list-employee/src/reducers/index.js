'use strict';
import {combineReducers} from 'redux';
import employees from './app';

import app from './app';
const appReducer = combineReducers({
    employees : employees,
    app
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
