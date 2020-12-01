import {
  ADD_NUMBER,
  NUMBER,
  CALC,
  ADD_SIGN,
  SIGN,
  CHANGE_STATE,
  EQUALLY,
  COMMA,
  CLEAR,
  LEFT_BRACKET,
  RIGHT_BRACKET,
  POSITIVE_OR_NEGATIVE,
  LEFT_BRACKET_VALUE,
  RIGHT_BRACKET_VALUE,
  COMMA_VALUE,
  REMOVE,
  PRE_EQUALLY,
  TOGGLE_PRE_RESULT,
  ADD_VALUES_BY_INPUT
} from "./types";

export function calc(value) {
  return { type: CALC, payload: value };
}

export function addValuesByInput(value) {
  return { type: ADD_VALUES_BY_INPUT, payload: value }
}

export function addSing(value) {
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

export function comma() {
  return { type: COMMA, payload: { payload: COMMA_VALUE, type: SIGN } };
}

export function clear() {
  return { type: CLEAR };
}

export function leftBracket() {
  return { type: LEFT_BRACKET, payload: { payload: LEFT_BRACKET_VALUE, type: SIGN } };
}

export function rightBracket() {
  return { type: RIGHT_BRACKET, payload: { payload: RIGHT_BRACKET_VALUE, type: SIGN } };
}

export function positiveOrNegative() {
  return { type: POSITIVE_OR_NEGATIVE };
}

export function removeValue() {
  return { type: REMOVE };
}

export function preEqualy() {
  return { type: PRE_EQUALLY };
}

export function togglePreResult() {
  return { type: TOGGLE_PRE_RESULT }
}