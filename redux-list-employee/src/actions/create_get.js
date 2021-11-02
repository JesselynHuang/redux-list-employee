export const ADD_EMPLOYEE = args => {
    return { type: 'ADD_EMPLOYEE', args};
};

export const GET_EMPLOYEE = args => {
    return { type: 'GET_EMPLOYEE', args};
};

//fetch dummy api data
export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const getUsersFetch = () => {
    return { type: 'GET_USERS_FETCH'}
}