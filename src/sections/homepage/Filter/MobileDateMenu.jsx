import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { format, parseISO } from "date-fns";
import "./DateMenuStyles.scss";
import { MarsContext } from "@/context/marsRoverContext";

const HiddenInput = React.forwardRef((props, ref) => (
  <input {...props} ref={ref} style={{ display: "none" }} />
));

const DateMenuMobile = () => {
  const { earthDate, handleDateChange, toggleMobileDateMenu } =
    useContext(MarsContext);

  const selectedDate = earthDate ? parseISO(earthDate) : null;

  const onDateChange = (date) => {
    if (date) {
      handleDateChange(format(date, "yyyy-MM-dd"));
      toggleMobileDateMenu(false);
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
        previousMonthButtonLabel="<"
        previousMonthAriaLabel="<"
        nextMonthButtonLabel=">"
        nextMonthAriaLabel=">"
        customInput={<HiddenInput />}
        onClickOutside={() => {
          toggleMobileDateMenu();
        }}
      />
    </div>
  );
};

export default DateMenuMobile;
