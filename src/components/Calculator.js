import { useDispatch } from "react-redux";
import { togglePreResult } from "../redux/actions";
import Buttons from "./Buttons";
import InputResult from "./InputResult";
import InputSet from "./InputSet";

export default () => {
  const dispatch = useDispatch();
  return (
    <div className="container d-flex flex-column justify-content-center w-50 vh-100">
      <div className="row">
        <div className="col pre-result-check">
          <input type="checkbox" className="container-check-input" id="preResult" onClick={() => dispatch(togglePreResult())} />
          <label className="container-check-input pl-1" htmlFor="preResult">Автоматический расчет</label>
        </div>
      </div>
      <div className="row justify-content-center">
        <InputSet input={{ style: "col align-self-center", id: "inputCalc" }} />
        <InputResult
          input={{
            style: "col align-self-center",
            disabled: "disabled",
            id: "inputResult",
          }}
        />
      </div>
      <div className="row justify-content-center">
        <Buttons />
        <Buttons isAdditional={true} />
      </div>
    </div>
  );
};
