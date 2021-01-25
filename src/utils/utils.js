import { CHANGE_STATE, INIT, NUMBER, SIGN } from "../redux/types";

export function getType(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str)) ? NUMBER : SIGN;
}

export function prepareInput(val) {
  return +val || isNaN(+val) ? val : "";
}

export function prepareCalc(current, last) {
  const additional = ["=", ",", "C", "AC", "(", ")", "+/-"];

  if (last.type === INIT && current.type !== NUMBER) {
    return;
  } else if (isChange(last, current)) {
    return CHANGE_STATE;
  } else {
    return current.type;
  }

  function isChange(last, current) {
    return (
      last.type === current.type &&
      last.type === SIGN &&
      !additional.includes(current.payload) &&
      !additional.includes(last.payload)
    );
  }
}

export function concatValues(values) {
  return values.reduce((sum, val) => {
    if (val.type !== INIT) {
      return sum + val.payload;
    }
    return sum;
  }, 0);
}

export const size = {
  defaultBtn: "col-3",
  additionalBtn: "col",
  containerDefautBtn: "col-2",
  containerAdditionalBtn: "col",
  extraBtn: "col-6",
};
