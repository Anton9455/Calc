import { useDispatch } from "react-redux";
import { evalResult } from "../redux/actions";

export default ({ input, defalutValue, value }) => {
  const dispatch = useDispatch();

  const inputChangedHandler = (event) => {
    event.preventDefault();
    dispatch(evalResult(event.currentTarget.value));
  }

  return (
    <div className={input.style}>
      <input
        type="text"
        disabled={input.disabled ? input.disabled : ""}
        className="form-control"
        id={input.id}
        defaultValue={defalutValue}
        value={value}
        onChange={(event) => inputChangedHandler(event)}
      />
    </div>
  );
};
