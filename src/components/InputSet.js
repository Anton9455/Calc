import { connect } from "react-redux";
import { concatValues } from "../utils/utils";
import Input from "./Input";

const InputSet = ({ input, inputSet }) => {
  return <Input input={input} value={inputSet} />;
};

const mapStateToProps = (state) => {
  let values = [...state.calc.values]
  let inputSet = concatValues(values)
  inputSet = inputSet ? inputSet.substring(1) : inputSet;
  return {
    inputSet: inputSet,
  };
};

export default connect(mapStateToProps, null)(InputSet);
