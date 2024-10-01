import React, { useContext } from "react";
import "./ColumnMenuStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";

const ColumnMenuMobile = () => {
  const { handleColumnChange, columns } = useContext(MarsContext);

  const columnValues = [1, 2, 3, 4];

  return (
    <div className="column-menu-wrapper">
      {columnValues.map((numColumns) => (
        <div
          key={numColumns}
          className={`column-option ${
            columns === numColumns ? "currentSelection" : ""
          }`}
          onClick={() => handleColumnChange(numColumns)}
        >
          {numColumns}
        </div>
      ))}
    </div>
  );
};

export default ColumnMenuMobile;
