import { put, select, takeEvery } from 'redux-saga/effects'
import { preEqualy } from '../actions';
import { ADD_NUMBER } from '../types'

export function* resultSagaWatcher() {
    yield takeEvery(ADD_NUMBER, resultSagaWorker);
}

function* resultSagaWorker() {
    const statePreResult = yield select(state => state.calc.preResult);
    if (statePreResult) {
        yield put(preEqualy());
    }
}