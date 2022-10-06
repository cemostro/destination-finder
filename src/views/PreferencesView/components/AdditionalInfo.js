import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Row, Col, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";

const AdditionalInfo = ({ userData, setUserData }) => {
  return (
    <Row>
      <Col>
        <p style={{ textAlign: "left" }}>Maximum # of days:</p>
        <input
          type="number"
          className="stay-days"
          defaultValue={userData.Stay}
          onChange={(e) => setUserData({ ...userData, Stay: e.target.value })}
        />
      </Col>
      <Col>
        <hr style={{ marginBottom: "1.2rem" }} />
        <Form>
          <Form.Check
            type="checkbox"
            id="custom-switch"
            label="Price is crucial"
            onChange={(e) =>
              setUserData({ ...userData, isPriceImportant: e.target.checked })
            }
          />
        </Form>
      </Col>
    </Row>
  );
};

export default AdditionalInfo;
