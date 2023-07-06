import React from "react";
import { Row, Col } from "react-bootstrap";
import { BarChart } from "../../SharedComponents/BarChart";
import * as myConstant from "../../../data/constantData";

export const NoviceAttributeScores = ({ score, index }) => {
  return (
    <Row>
      <Col xs={4} style={{ textAlign: "left", fontSize: "small" }}>
        {score.name}
      </Col>
      <Col xs={5}>
        <BarChart
          score={score}
          color={myConstant.COLORS[index % myConstant.COLORS.length]}
          showBenchmark={false}
        />
      </Col>
      <Col xs={1} style={{ textAlign: "right", fontSize: "small" }}>
        {score.value}%
      </Col>
    </Row>
  );
};