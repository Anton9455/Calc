import { getType } from "../../utils/utils";
import {
  ADD_SIGN,
  ADD_NUMBER,
  INIT,
  CHANGE_STATE,
  EQUALLY,
  COMMA,
  CLEAR,
  LEFT_BRACKET,
  RIGHT_BRACKET,
  POSITIVE_OR_NEGATIVE,
  LEFT_BRACKET_VALUE,
  SIGN,
  REMOVE,
  PRE_EQUALLY,
  TOGGLE_PRE_RESULT,
  ADD_VALUES_BY_INPUT
} from "../types";

const initialState = { values: [{ payload: "", type: INIT }] };

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGN:
      return _setSign();
    case ADD_NUMBER:
      return _setNumber();
    case CHANGE_STATE:
      return _changeValue();
    case EQUALLY:
      return _setResult();
    case COMMA:
      return _setSign();
    case CLEAR:
      return _clearValues();
    case LEFT_BRACKET:
      return _setLeftBracket();
    case RIGHT_BRACKET:
      return _setRightBracket();
    case POSITIVE_OR_NEGATIVE:
      return _changeLastVal();
    case REMOVE:
      return _remove();
    case PRE_EQUALLY:
      return _preResult();
    case TOGGLE_PRE_RESULT:
      return _changeFlagPreResult();
    case ADD_VALUES_BY_INPUT:
      return _setValuesByInput();
    default:
      return state;
  }

  function _clearValues() {
    return { ...state, values: [], result: "" };
  }

  function _setValuesByInput() {
    const values = action.payload.split("");
    state.values = values.map((item) => {
      return { payload: item, type: getType(item) }
    });
    return _preResult();
  }

  function _setSign() {
    return setValue();
  }

  function _setLeftBracket() {
    return _setSign();
  }

  function _setRightBracket() {
    if (state.values.some(item => item.payload === LEFT_BRACKET_VALUE)) {
      return _setSign();
    }
    return state;
  }

  function _setNumber() {
    return setValue();
  }


  function setValue() {
    return { ...state, values: [...state.values, action.payload] };
  }

  function _changeValue() {
    state.values.splice(-1, 1);
    return setValue();
  }

  function _setResult() {
    try {
      const result = state.values.reduce((sum, val) => {
        if (val.type !== INIT) {
          return sum + val.payload;
        }
        return sum;
      }, 0).substring(1);
      return {
        ...state,
        result: evalResult(result),
      };
    } catch (error) {
      return { ...state };
    }
  }

  function _preResult() {
    if (state.preResult) {
      return _setResult();
    }
    return { ...state };
  }

  function _changeLastVal() {
    let lastVal = state.values[state.values.length - 1];
    if (lastVal.type !== INIT && lastVal.type !== SIGN) {
      lastVal.payload = (lastVal.payload * -1).toString();
    }
    return { ...state };
  }

  function _remove() {
    state.values.splice(-1, 1);
    return { ...state };
  }

  function _changeFlagPreResult() {
    state.preResult = !state.preResult
    return { ...state };
  }

  function evalResult(fn) {
    return new Function('return ' + fn)();
  }
};
