import { addSing, addNum, changeState } from "./actions";
import {
  ALL_CLEAR,
  CALC,
  CHANGE_STATE,
  CLEAR,
  COMMA,
  EQUALLY,
  INIT,
  LEFT_BRACKET,
  NUMBER,
  POSITIVE_OR_NEGATIVE,
  RIGHT_BRACKET,
  SIGN,
} from "./types";

export function switchMiddleware({ dispatch, getState }) {
  function getType(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str)) ? NUMBER : SIGN;
  }

  function prepareCalc(current, last) {
    debugger;

    const additional = ["=", ",", "C", "AC", "(", ")", "+/-"];

    if (last.type === INIT && current.type !== NUMBER) {
      return;
    } else if (
      last.type === current.type &&
      last.type === SIGN &&
      !additional.includes(current.payload)
    ) {
      return CHANGE_STATE;
    } else {
      return current.type;
    }
  }

  return function (next) {
    return function (action) {
      debugger;
      if (action.type === CALC) {
        const valuesEntered = getState().calc.values;
        let last = { ...valuesEntered[valuesEntered.length - 1] };
        let current = {
          payload: action.payload,
          type: getType(action.payload),
        };

        switch (prepareCalc(current, last)) {
          case SIGN:
            return dispatch(addSing(action.payload));
          case NUMBER:
            return dispatch(addNum(action.payload));
          case CHANGE_STATE:
            return dispatch(changeState(action.payload, current.type));
        }
      }
      return next(action);
    };
  };
}
