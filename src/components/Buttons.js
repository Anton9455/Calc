import React from "react";

import ButtonsRow from "./ButtonsRow";

export default ({ buttons, isAdditional }) => {
  return (
    <div className="col">
      {buttons.map((row, index) => {
        return <ButtonsRow key={index} row={row} isAdditional={isAdditional} />;
      })}
    </div>
  );
};
