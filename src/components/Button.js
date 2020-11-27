import React from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import { calc, equally } from "../redux/actions";
import { CALC, EQUALLY } from '../redux/types';



const Button = ({ button }) => {
    const dispatch = useDispatch();
    const clickHandler = (event) =>{
        debugger;
        switchBtn(event.target.textContent);
    }

    const switchBtn = (val) => {
        switch (val) {
          case "=": return dispatch(equally());
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

const mapDispatchToProps = {
    calc
}

export default connect(null, mapDispatchToProps)(Button)