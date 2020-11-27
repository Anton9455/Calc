import { connect } from "react-redux";
import { INIT } from "../redux/types";
import Input from "./Input";

const InputSet = ({ input, inputSet }) => {
  debugger;
  return <Input input={input} value={inputSet} />;
};

const mapStateToProps = (state) => {
  debugger;
  let inputSet = state.calc.values
    .reduce((sum, val) => {
      debugger;
      if (val.type !== INIT) {
        return sum + val.payload;
      }
      return sum;
    }, 0);
    inputSet = inputSet ? inputSet.substring(1): inputSet;
  return {
    inputSet: inputSet,
  };
};

export default connect(mapStateToProps, null)(InputSet);
