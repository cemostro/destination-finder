import React from "react";
import { Row, Col } from "react-bootstrap";
import * as myConstant from "../../../data/constantData";
import { BarChart } from "../../SharedComponents/BarChart";

export const AttributeScore = ({ score, index }) => {
  return (
    <Row>
      <Col xs={4} style={{ textAlign: "left", fontSize: "small" }}>
        {score.name}
      </Col>
      <Col xs={8}>
        <BarChart
          score={score}
          showBenchmark={false}
          color={myConstant.COLORS[index % myConstant.COLORS.length]}
        />
      </Col>
    </Row>
  );
};
