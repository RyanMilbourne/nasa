import React, { useContext } from "react";
import "./ColumnMenuStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";

const ColumnMenu = () => {
  const { handleColumnChange } = useContext(MarsContext);
  return (
    <div className="column-menu-container">
      <div className="column-menu-wrapper">
        <div className="column-option" onClick={() => handleColumnChange(1)}>
          1
        </div>
        <div className="column-option" onClick={() => handleColumnChange(2)}>
          2
        </div>
        <div className="column-option" onClick={() => handleColumnChange(3)}>
          3
        </div>
        <div className="column-option" onClick={() => handleColumnChange(4)}>
          4
        </div>
      </div>
    </div>
  );
};

export default ColumnMenu;
