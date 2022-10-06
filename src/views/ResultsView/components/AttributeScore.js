import React from "react";
import { Row, Col } from "react-bootstrap";
import { BarChart } from "./BarChart";
import * as myConstant from "../../../data/constantData";

export const AttributeScore = ({ score, index, userPref }) => {
  return (
    <Row>
      <Col xs={4} style={{ textAlign: "left", fontSize: "small" }}>
        {score.name}
      </Col>
      <Col xs={5}>
        <BarChart
          score={score}
          color={myConstant.COLORS[index % myConstant.COLORS.length]}
          benchmark={userPref}
          showBenchmark={true}
        />
      </Col>

      <Col xs={1} style={{ textAlign: "right", fontSize: "small" }}>
        {100 - Math.abs(score.value - userPref)}%
      </Col>
    </Row>
  );
};
