import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { format, parseISO } from "date-fns";
import "./DateMenuStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";

const HiddenInput = React.forwardRef((props, ref) => (
  <input {...props} ref={ref} style={{ display: "none" }} />
));

const DateMenuMobile = ({ toggleDateMenu }) => {
  const { earthDate, handleDateChange } = useContext(MarsContext);

  const selectedDate = earthDate ? parseISO(earthDate) : null;

  const onDateChange = (date) => {
    if (date) {
      handleDateChange(format(date, "yyyy-MM-dd"));
      toggleDateMenu(false);
    }
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="mobile-date-menu" onClick={handleMenuClick}>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="yyyy-MM-dd"
        className="datepicker"
        startOpen={true}
        customInput={<HiddenInput />}
        showMonthDropdown={false}
        showYearDropdown={false}
      ></DatePicker>
    </div>
  );
};

export default DateMenuMobile;
