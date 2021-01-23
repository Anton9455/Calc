import React from 'react'
import { connect, useDispatch } from "react-redux";
import { calc, clear, comma, equally, leftBracket, positiveOrNegative, removeValue, rightBracket } from "../redux/actions";
import { CLEAR_VALUE, COMMA_VALUE, COMMA_VALUE_ALTERNATIVE, EQUALLY_VALUE, LEFT_BRACKET_VALUE, POSITIVE_OR_NEGATIVE_VALUE, REMOVE_VALUE, RIGHT_BRACKET_VALUE } from '../redux/types';



const Button = ({ button }) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    switchBtn(event.target.textContent);
  }

  const switchBtn = (val) => {
    switch (val) {
      case EQUALLY_VALUE: return dispatch(equally());
      case COMMA_VALUE:
      case COMMA_VALUE_ALTERNATIVE: return dispatch(comma());
      case CLEAR_VALUE: return dispatch(clear())
      case LEFT_BRACKET_VALUE: return dispatch(leftBracket())
      case RIGHT_BRACKET_VALUE: return dispatch(rightBracket());
      case POSITIVE_OR_NEGATIVE_VALUE: return dispatch(positiveOrNegative())
      case REMOVE_VALUE: return dispatch(removeValue());
      default:
        return dispatch(calc(val));
    }
  }

  return (
    <div className={button.size}>
      <button type="button" className="btn btn-info btn-block" onClick={clickHandler}>
        {button.text}
      </button>
    </div>
  );
};

const mapDispatchToProps = {calc}

export default connect(null, mapDispatchToProps)(Button)