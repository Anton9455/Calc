import { connect } from "react-redux";
import Input from "./Input";

const Result = ({ input, result }) => {
  return (
    <div className="col-2">
      <div className="row">
        <Input input={input} value={result} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ result: state.calc.result || 0 })

export default connect(mapStateToProps, null)(Result);