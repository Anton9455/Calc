import {put, takeEvery} from 'redux-saga/effects'
import { equally } from '../actions';
import { EQUALLY } from '../types'

export function* resultSagaWatcher(){
    debugger;
    //yield takeEvery(EQUALLY, resultSagaWorker);
}

function* resultSagaWorker(){
    debugger;
    yield put(equally());
}