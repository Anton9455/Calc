import React from "react";
import ButtonsRow from "./ButtonsRow";
import { REMOVE_VALUE, CLEAR_VALUE, RIGHT_BRACKET_VALUE, LEFT_BRACKET_VALUE, POSITIVE_OR_NEGATIVE_VALUE } from "../redux/types";
import { size } from "../utils/utils";


const _buttons = [
  [
    { text: "%", size: size.defaultBtn },
    { text: "/", size: size.defaultBtn },
    { text: "*", size: size.defaultBtn },
    { text: "-", size: size.defaultBtn },
  ],
  [
    { text: "7", size: size.defaultBtn },
    { text: "8", size: size.defaultBtn },
    { text: "9", size: size.defaultBtn },
    { text: "+", size: size.defaultBtn },
  ],
  [
    { text: "4", size: size.defaultBtn },
    { text: "5", size: size.defaultBtn },
    { text: "6", size: size.defaultBtn },
    { text: "=", size: size.defaultBtn },
  ],
  [
    { text: "1", size: size.defaultBtn },
    { text: "2", size: size.defaultBtn },
    { text: "3", size: size.defaultBtn },
  ],
  [
    { text: "0", size: size.extraBtn },
    { text: ",", size: size.defaultBtn },
  ],
];

const _additional = [
  [
    { text: REMOVE_VALUE, size: size.additionalBtn },
    { text: CLEAR_VALUE, size: size.additionalBtn },
    { text: LEFT_BRACKET_VALUE, size: size.additionalBtn },
    { text: RIGHT_BRACKET_VALUE, size: size.additionalBtn },
    { text: POSITIVE_OR_NEGATIVE_VALUE, size: size.additionalBtn },
  ],
];

export default ({ isAdditional }) => {
  let buttons = isAdditional ? _additional : _buttons;
  return (
    <div className={size[isAdditional ? "containerDefautBtn": "containerAdditionalBtn"]}>
      {buttons.map((row, index) => {
        return <ButtonsRow key={index} row={row} isAdditional={isAdditional} />;
      })}
    </div>
  );
};
