import {
  ADD_SIGN,
  ADD_NUMBER,
  INIT,
  CHANGE_STATE,
  EQUALLY
} from "../types";

const initialState = { values: [{ payload: "", type: INIT }] };

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGN:
      return setValue();
    case ADD_NUMBER:
      return setValue();
    case CHANGE_STATE:
      return changeValue();
    case EQUALLY:
      return setResult();
    default:
      return state;
  }

  function setValue() {
    debugger;
    return { ...state, values: [...state.values, action.payload] };
  }

  function changeValue() {
    debugger;
    state.values.splice(-1, 1);
    return { ...state, values: [...state.values, action.payload] };
  }

  function setResult() {
    debugger;
    const  result = state.values.reduce((sum, val) => {
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

  function evalResult(fn) {
    return new Function('return ' + fn)();
  }
};
