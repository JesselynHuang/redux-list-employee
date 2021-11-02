'use strict';
import { Record } from 'immutable';
//immutable --> library tambahan
import * as actionTypes from '../actions/create_get';

const objectRecord = new Record({
    employee: [],
    users: []
})

const initialState = new objectRecord();
//[]--> array

const app = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:     
        return [
                ...state.employee, // ... --> spread attributes
                Object.assign({}, action.employee)
            ];

        case actionTypes.GET_USERS_SUCCESS:
            return { ...state, users: action.users}
            
        default:
            return state;
    }
};

export default app;