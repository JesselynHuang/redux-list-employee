import { fork } from 'redux-saga/effects';
import { watchAddEmp } from './app';

//File index ---> file parent
//yield --> generator function & return new value

export default function* rootSaga() {
    yield [
        yield fork(watchAddEmp),
    ];
}