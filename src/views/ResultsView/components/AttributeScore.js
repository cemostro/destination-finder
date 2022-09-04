import React from "react";
import { Row, Col } from "react-bootstrap";
import * as myConstant from "../../../data/constantData";

export const AttributeScore = ({ score, index }) => {
  return (
    <Row>
      <Col xs={1}>
        <div
          style={{
            height: "15px",
            width: "15px",
            backgroundColor:
              myConstant.COLORS[index % myConstant.COLORS.length],
          }}
        ></div>
      </Col>
      <Col style={{ textAlign: "left", fontSize: "small" }}>{score.name}</Col>
      <Col style={{ textAlign: "right", fontSize: "small" }}>
        {score.value}/100
      </Col>
    </Row>
  );
};
