import { put, select, takeEvery } from "redux-saga/effects";
import { getType } from "../../utils/utils";
import { addNum, addSing, preEqualy } from "../actions";
import {
  ADD_NUMBER,
  ADD_VALUES_BY_INPUT,
  LEFT_BRACKET_VALUE,
  PRE_EQUALLY,
  REMOVE,
  RIGHT_BRACKET_VALUE,
  SIGN,
} from "../types";

let bracketOpen = false;

export function* resultSagaWatcher() {
  yield takeEvery(ADD_NUMBER, resultSagaWorker);
  yield takeEvery(ADD_VALUES_BY_INPUT, resultSagaWorker);
  yield takeEvery(REMOVE, resultSagaWorker);
}

function* resultSagaWorker({ payload }) {
  const sagaAction = { ...payload };
  let values;
  const statePreResult = yield select((state) => state.calc.preResult);
  if (statePreResult) { // условие предварительного расчета
    if (PRE_EQUALLY === sagaAction?.type) { //условие ввода с клавиатуры
      values = _parse(sagaAction.payload);
      let lastValue = values.slice(-1)[0];
      let result = _prepare(
        lastValue,
        (action) => {
          return {putEffect: put(action), isAddSing:true};
        },
        (action) => {
          if (bracketOpen) {
            return {putEffect: put(action), isAddNum:true};
          }
        },
        (action) => {
          return {putEffect: put(action), isAddRightBracket:true};
        }
      );
      if(result?.isAddRightBracket){
        yield result.putEffect
      }else if(result?.isAddNum ||result?.isAddSing){ //если расчет не нужен, просто добавляем в буфер
        yield result.putEffect
        return;
      }
    }
    yield put(preEqualy(values));
  }
}

function _parse(payload) {
  let inputValues = payload.split("");
  return inputValues.map((item) => {
    return { payload: item, type: getType(item) };
  });
}

function _prepare(lastValue, putSign, putNum, putRightBracketAndPreResult) {
  switch (lastValue.payload) {
    case RIGHT_BRACKET_VALUE:
      bracketOpen = false;
      return putRightBracketAndPreResult(addSing(lastValue.payload));
    case LEFT_BRACKET_VALUE:
      bracketOpen = true;
      break;
  }

  if (SIGN === lastValue?.type) {
    return putSign(addSing(lastValue.payload));
  } else {
    return putNum(addNum(lastValue.payload));
  }
}
