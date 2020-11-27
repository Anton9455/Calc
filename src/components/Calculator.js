import Buttons from "./Buttons";
import InputResult from "./InputResult";
import InputSet from "./InputSet";

const sizeButton = "col-3";
const sizeAdditional = "col-4";

const buttons = [
  [
    { text: "%", size: sizeButton },
    { text: "/", size: sizeButton },
    { text: "*", size: sizeButton },
    { text: "-", size: sizeButton },
  ],
  [
    { text: "7", size: sizeButton },
    { text: "8", size: sizeButton },
    { text: "9", size: sizeButton },
    { text: "+", size: sizeButton },
  ],
  [
    { text: "4", size: sizeButton },
    { text: "5", size: sizeButton },
    { text: "6", size: sizeButton },
    { text: "=", size: sizeButton },
  ],
  [
    { text: "1", size: sizeButton },
    { text: "2", size: sizeButton },
    { text: "3", size: sizeButton },
  ],
  [
    { text: "0", size: "col-6" },
    { text: ",", size: sizeButton },
  ],
];

const additional = [
  [
    { text: "C", size: sizeAdditional },
    { text: "AC", size: sizeAdditional },
    { text: "(", size: sizeAdditional },
    { text: ")", size: sizeAdditional },
    { text: "+/-", size: sizeAdditional },
  ],
];

export default () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <InputSet input={{ style: "col align-self-center", id: "inputCalc" }} />
        <InputResult
          input={{
            style: "col-4 align-self-center",
            disabled: "disabled",
            id: "inputResult",
          }}
        />
      </div>
      <div className="row justify-content-center">
        <Buttons buttons={buttons} />
        <Buttons buttons={additional} isAdditional={true} />
      </div>
    </div>
  );
};
