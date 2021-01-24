import { put, select, takeEvery } from "redux-saga/effects";
import { getType } from "../../utils/utils";
import { addNum, addSing, preEqualy } from "../actions";
import {
  ADD_NUMBER,
  ADD_VALUES_BY_INPUT,
  LEFT_BRACKET_VALUE,
  PRE_EQUALLY,
  RIGHT_BRACKET_VALUE,
  SIGN,
} from "../types";

let bracketOpen = false;

export function* resultSagaWatcher() {
  yield takeEvery(ADD_NUMBER, resultSagaWorker);
  yield takeEvery(ADD_VALUES_BY_INPUT, resultSagaWorker);
}

function* resultSagaWorker({ payload }) {
  const sagaAction = { ...payload };
  debugger;
  let values = [];
  const statePreResult = yield select((state) => state.calc.preResult);
  if (statePreResult) {
    if (PRE_EQUALLY === sagaAction?.type) {
      values = parseStringToObj(sagaAction.payload);
      debugger;
      let lastValue = values.slice(-1)[0];
      let signValue = prepareAddSign(lastValue);
      if (signValue) {
        yield put(addSing(signValue.payload));
        return;
      } else {
        if (bracketOpen) {
          yield put(addNum(lastValue.payload));
          return;
        }
      }
    }
    debugger;
    yield put(preEqualy(values));
  }
}

function parseStringToObj(payload) {
  let inputValues = payload.split("");
  return inputValues.map((item) => {
    return { payload: item, type: getType(item) };
  });
}

function prepareAddSign(lastValue) {
  switch (lastValue.payload) {
    case RIGHT_BRACKET_VALUE:
      bracketOpen = false;
      break;
    case LEFT_BRACKET_VALUE:
      bracketOpen = true;
      break;
  }

  if (SIGN === lastValue?.type) {
    return lastValue;
  }
  return null;
}
