import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h5 style={{ textAlign: "left" }}>Start at:</h5>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
      />
      <h5 style={{ textAlign: "left" }}>Maximum # of days:</h5>
      <input type="number" className="stay-days" defaultValue={5} />
    </div>
  );
};

export default DateInput;
