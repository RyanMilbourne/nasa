import React, { useContext } from "react";
import "./ColumnMenuStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded";

const ColumnMenuMobile = () => {
  const { handleColumnChange, columns } = useContext(MarsContext);

  const columnValues = [1, 2, 3];

  const iconStyle = {
    transform: "rotateZ(90deg) scaleX(1.5)",
    width: "1rem",
  };

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
          {Array.from({ length: numColumns }, (_, index) => (
            <RectangleRoundedIcon key={index} style={iconStyle} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColumnMenuMobile;
