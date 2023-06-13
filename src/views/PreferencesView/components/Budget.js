import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { debounce } from "lodash";
import "../../../App.css";

const Budget = ({ userData, setUserData }) => {

  const [value, setValue] = useState(userData.Budget);

  const onChangeDebounced = debounce((value) => {
    setUserData({
      ...userData,
      Budget: parseInt(value),
    });
  }, 1000);

  return (
    <Form>
      <p style={{ textAlign: "left" }}>Budget</p>
      <Row>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"Low (< €250 per week)"}
          </p>
        </Col>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"Medium (ca. €750 per week)"}
          </p>
        </Col>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"High (> €1250 per week)"}
          </p>
        </Col>
      </Row>
      <Row>
        <Form.Range
          style={{ padding: "0 15px" }}
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            onChangeDebounced(event.target.value)
          }
          }
        />
      </Row>
    </Form>
  );
};

export default Budget;
