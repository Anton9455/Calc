import { connect } from "react-redux";
import Input from "./Input";

const Result = ({ input, result }) => {
  return (
    <div className="col">
      <div className="row">
        <Input input={input} value={result} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ result: state.calc.result })

export default connect(mapStateToProps, null)(Result);