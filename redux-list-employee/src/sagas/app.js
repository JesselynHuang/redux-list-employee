import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../actions/create_get";

//File sagas for save Action saga
export function* handleAddEmp(action) {
    const { args } = action;
    yield put({ type: 'SET_ADD', args});
}

//function '*' ---> generator
export function* watchAddEmp() {
    yield takeEvery('ADD_EMPLOYEE', handleAddEmp);
}

//saga for get dummy api data
const url = 'http://jsonplaceholder.typicode.com/users';

function userFetch() {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
      .catch((error) => { throw error })
}

function* workGetUserFetch(action) {
    //yield call ---> for calling API nya
    try {
        const users = yield call(userFetch);
        yield put({ type: GET_USERS_SUCCESS, users});
    }
    catch (e) {
        yield put({ message: e.message });
    }
}

export function* myAPI() {
    yield takeEvery(GET_USERS_FETCH, workGetUserFetch);
}