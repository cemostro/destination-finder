import React from "react";
import { Row, Col } from "react-bootstrap";
import * as myConstant from "../../../data/constantData";

export const AttributeScore = ({ score, index }) => {
  return (
    <Row>
      <Col xs={6} style={{ textAlign: "left", fontSize: "small" }}>
        {score.name}
      </Col>
      <Col xs={6}>
        <div
          style={{
            height: "15px",
            width: `calc(100% * (${score.value} / 100))`,
            backgroundColor:
              myConstant.COLORS[index % myConstant.COLORS.length],
          }}
        ></div>
      </Col>
    </Row>
  );
};
