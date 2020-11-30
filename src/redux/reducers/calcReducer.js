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
  REMOVE
} from "../types";

const initialState = { values: [{ payload: "", type: INIT }] };

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGN:
      return setSign();
    case ADD_NUMBER:
      return setNumber();
    case CHANGE_STATE:
      return changeValue();
    case EQUALLY:
      return setResult();
    case COMMA:
      return setSign();
    case CLEAR:
      return clearValues();
    case LEFT_BRACKET:
      return setLeftBracket();
    case RIGHT_BRACKET:
      return setRightBracket();
    case POSITIVE_OR_NEGATIVE:
      return changeLastVal();
    case REMOVE:
      return removeLastValue();
    default:
      return state;
  }

  function clearValues() {
    return { ...state, values: [], result: "" };
  }

  function setSign() {
    return setValue();
  }

  function setLeftBracket() {
    return setSign();
  }

  function setRightBracket() {
    if (state.values.some(item => item.payload === LEFT_BRACKET_VALUE)) {
      return setSign();
    }
    return state;
  }

  function setNumber() {
    return setValue();
  }


  function setValue() {
    return { ...state, values: [...state.values, action.payload] };
  }

  function changeValue() {
    state.values.splice(-1, 1);
    return setValue();
  }

  function setResult() {
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
  }

  function changeLastVal() {
    let lastVal = state.values[state.values.length - 1];
    if (lastVal.type !== INIT && lastVal.type !== SIGN) {
      lastVal.payload = (lastVal.payload * -1).toString();
    }
    return { ...state };
  }

  function removeLastValue() {
    state.values.splice(-1, 1);
    return { ...state };
  }

  function evalResult(fn) {
    return new Function('return ' + fn)();
  }
};
