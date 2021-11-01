import { takeEvery, put } from "redux-saga/effects";

//File sagas for save Action saga
export function* handleAddEmp(action) {
    const { args } = action;
    yield put({ type: 'SET_ADD', args});
}

//function '*' ---> generator
export function* watchAddEmp() {
    yield takeEvery('ADD_EMPLOYEE', handleAddEmp);
}