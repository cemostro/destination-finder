import React, { useState, useCallback } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { debounce } from "lodash";
import "../../../App.css";
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";

const Budget = () => {
  const { userData, setUserData } = useTravelRecommenderStore();
  const [value, setValue] = useState(userData.Budget);

  const onChange = (value) => {
    setUserData({ ...userData, Budget: value });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeDebounced = useCallback(debounce(onChange, 500), [userData]);

  return (
    <Form>
      <p style={{ textAlign: "left" }}>Budget</p>
      <Row>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"Low"}
          </p>
        </Col>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"Medium"}
          </p>
        </Col>
        <Col>
          <p style={{ opacity: "0.7", fontSize: "0.8em" }}>
            {"High"}
          </p>
        </Col>
      </Row>
      <Row>
        <Form.Range
          style={{ padding: "0 15px" }}
          min={10}
          max={100}
          step={10}
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
