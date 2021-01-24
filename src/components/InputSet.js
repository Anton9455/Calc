import { connect } from "react-redux";
import { INIT } from "../redux/types";
import Input from "./Input";

const InputSet = ({ input, inputSet }) => {
  return <Input input={input} value={inputSet} />;
};

const mapStateToProps = (state) => {
  let values = [...state.calc.values]
  debugger;
  let inputSet = values
    .reduce((sum, val) => {
      if (val.type !== INIT) {
        return sum + val.payload;
      }
      return sum;
    }, 0);
  inputSet = inputSet ? inputSet.substring(1) : inputSet;
  return {
    inputSet: inputSet,
  };
};

export default connect(mapStateToProps, null)(InputSet);
