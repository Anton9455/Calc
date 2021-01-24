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
  RIGHT_BRACKET_VALUE
} from "../types";

const initialState = { values: [{ payload: "", type: INIT }] };

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
//-------------------------------------------------------//
            //Основные типы событий (циферблат)
//-------------------------------------------------------//
    case ADD_SIGN:
      return _setSign();
    case ADD_NUMBER:
      return _setNumber();
    case CHANGE_STATE:
      return _changeValue();
//-------------------------------------------------------//
            //Расчетные типы событий (правая колонка)
//-------------------------------------------------------//
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
      return _positiveOrNegative();
    case REMOVE:
      return _remove();
//-------------------------------------------------------//
            //Расчетные типы событий 
            //  (динамическое вычисление, 
            //  флаг динамического вычисления)
//-------------------------------------------------------//
    case PRE_EQUALLY:
      return _preResult(action.payload);
    case TOGGLE_PRE_RESULT:
      return _changeFlagPreResult();
    default:
      return state;
  }

  function _clearValues() {
    return { ...state, values: [], result: "" };
  }

  function _setSign() {
    return setValue();
  }

  function _setNumber() {
    return setValue();
  }

  function setValue(values = state.values) {
    return { ...state, values: [...values, action.payload] };
  }

  function _changeValue() {
    let values = [...state.values];
    values.splice(-1, 1);
    return setValue(values);
  }

  function _setLeftBracket() {
    return _setSign();
  }

  function _setRightBracket() {
    //добавление закрывающей скобки только при наличии открывающей
    if (state.values.some(item => item.payload === LEFT_BRACKET_VALUE)) {
      return _setSign();
    }
    return state;
  }

  function _positiveOrNegative() {
    let lastVal = state.values[state.values.length - 1];
    if (lastVal.type !== INIT && lastVal.type !== SIGN) {
      lastVal.payload = (lastVal.payload * -1).toString();
    }
    return { ...state };
  }

  function _remove() {
    let values = [...state.values];
    values.splice(-1, 1);
    return { ...state, values };
  }

  function _changeFlagPreResult() {
    return { ...state, preResult: !state.preResult };
  }

  function _setResult(values = [...state.values]) {
    //формирование результрующей строки из значений в сторе
    //и ее вычисление
    if(_invalidCalc(values)){ //проверка наличия значений и валидности скобок
      return { ...state };
    }

    try {
      const result = values
        .reduce((sum, val) => {
          if (val.type !== INIT) {
            return sum + val.payload;
          }
          return sum;
        }, 0)
        .substring(1);
      return {
        ...state,
        result: _evalResult(result),
        values
      };
    } catch (error) {
      alert("Ошибка вычисления, проверьте введенные значения");
      console.error(error);
      return { ...state };
    }

    function _invalidCalc(values) {
      return !values.length ||
             (values.length === 1 && values[0].type === INIT) ||
             (values.slice(-1)[0].type === SIGN) ||
             (values.some(item => item.payload === LEFT_BRACKET_VALUE) && !values.some(item => item.payload === RIGHT_BRACKET_VALUE))
    }

  }

  function _preResult(values = [...state.values]) {
    if (state.preResult && values) {
      return _setResult(values);
    }
    return { ...state };
  }

  function _evalResult(fn) {
    return new Function("return " + fn)();
  }
};
