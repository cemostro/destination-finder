import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Row>
      <Col>
        <p style={{ textAlign: "left" }}>Start at:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
      </Col>
      <Col>
        <p style={{ textAlign: "left" }}>Maximum # of days:</p>
        <input type="number" className="stay-days" defaultValue={5} />
      </Col>
    </Row>
  );
};

export default DateInput;
