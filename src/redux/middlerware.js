import { getType, prepareCalc } from "../utils/utils";
import { addSing, addNum, changeState } from "./actions";
import {
  CALC,
  CHANGE_STATE,
  NUMBER,
  SIGN,
} from "./types";

export function switchMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
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
