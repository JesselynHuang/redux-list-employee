'use strict';
//import { Record } from 'immutable';
//immutable --> library tambahan
import * as actionTypes from '../actions/create_get';

// const objectRecord = new Record({
//     name: '',
// });

const initialState = [];
//[]--> array

const app = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:
            // Object.assign({}, action.name)
            // return state.set('name', action.args);
            return [
                ...state, // ... --> spread attributes
                Object.assign({}, action.employee)
            ];
        default:
            return state;
    }
};

export default app;