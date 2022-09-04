import React from "react";
import Donut from "./Donut";
import { Row, Col } from "react-bootstrap";

export const PieChartComponent = ({ scores, label, countryName, region }) => {
  return (
    <Row style={{ textAlign: "left" }}>
      <Col>
        <Donut scores={scores} label={label} />
      </Col>
      <Col>
        <h6>
          {countryName}
          {"\n"}
          {region}
        </h6>
        <p style={{ fontSize: "x-small" }}>
          Each parameter's effect on the recommendation
        </p>
      </Col>
    </Row>
  );
};
