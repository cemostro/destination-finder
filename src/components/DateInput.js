import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const DateInput = ({ userData, setUserData }) => {
  return (
    <Row>
      <Col>
        <p style={{ textAlign: "left" }}>Start at:</p>
        <DatePicker
          selected={userData.StartDate}
          onChange={(date) => setUserData({ ...userData, StartDate: date })}
          dateFormat="yyyy/MM/dd"
        />
      </Col>
      <Col>
        <p style={{ textAlign: "left" }}>Maximum # of days:</p>
        <input
          type="number"
          className="stay-days"
          defaultValue={userData.Stay}
          onChange={(e) => setUserData({ ...userData, Stay: e.target.value })}
        />
      </Col>
    </Row>
  );
};

export default DateInput;
