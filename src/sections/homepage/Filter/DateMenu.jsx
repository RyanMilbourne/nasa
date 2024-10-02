import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { format, parseISO } from "date-fns";
import "./DateMenuStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";

const HiddenInput = React.forwardRef((props, ref) => (
  <input {...props} ref={ref} style={{ display: "none" }} />
));

const DateMenu = () => {
  const { earthDate, handleDateChange, roverData } = useContext(MarsContext);

  const selectedDate = earthDate ? parseISO(earthDate) : null;

  const onDateChange = (date) => {
    if (date) {
      handleDateChange(format(date, "yyyy-MM-dd"));
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="yyyy-MM-dd"
      className="datepicker"
      open={true}
      customInput={<HiddenInput />}
      previousMonthButtonLabel="<"
      previousMonthAriaLabel="<"
      nextMonthButtonLabel=">"
      nextMonthAriaLabel=">"
      aria-label="datepicker"
    ></DatePicker>
  );
};

export default DateMenu;
