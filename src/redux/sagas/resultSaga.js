import { put, takeEvery } from 'redux-saga/effects'
import { equally } from '../actions';
import { EQUALLY } from '../types'

export function* resultSagaWatcher() {
    //yield takeEvery(EQUALLY, resultSagaWorker);
}

function* resultSagaWorker() {
    yield put(equally());
}