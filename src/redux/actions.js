import {
  ADD_NUMBER,
  NUMBER,
  CALC,
  ADD_SIGN,
  SIGN,
  CHANGE_STATE,
  EQUALLY,
} from "./types";

export function calc(value) {
  return { type: CALC, payload: value };
}

export function addSing(value) {
  debugger;
  return { type: ADD_SIGN, payload: { payload: value, type: SIGN } };
}

export function addNum(value) {
  return { type: ADD_NUMBER, payload: { payload: value, type: NUMBER } };
}

export function changeState(value, type) {
  return { type: CHANGE_STATE, payload: { payload: value, type: type } };
}

export function equally() {
  return { type: EQUALLY };
}

function switchSign(val) {
  switch (val) {
    case "=":
      return { type: EQUALLY };
    case ",":
      break;
    case "C":
      break;
    case "AC":
      break;
    case "(":
      break;
    case ")":
      break;
    case "+/-":
      break;
    default:
      return;
  }
}
