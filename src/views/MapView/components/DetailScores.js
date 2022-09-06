import React from "react";
import { AttributeScore } from "./AttributeScore";
import { Row, Col } from "react-bootstrap";

export const DetailScores = ({ scores }) => {
  console.log(scores);
  return (
    <div>
      <div
        style={{
          padding: "10px 10px",
          width: "250px",
          backgroundColor: "white",
          color: "#000",
        }}
      >
        {scores.map((entry, index) => (
          <AttributeScore score={entry} index={index} key={index} />
        ))}
      </div>
      <div style={{ padding: "0px 10px", width: "250px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={6}>estimation*</Col>
          <Col xs={2}>
            <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
            <div style={{ padding: "0", fontSize: "x-small" }}>0</div>
          </Col>
          <Col xs={2} style={{ textAlign: "center" }}>
            <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
            <div style={{ padding: "0", fontSize: "x-small" }}>50</div>
          </Col>
          <Col xs={2} style={{ textAlign: "end" }}>
            <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
            <div style={{ padding: "0", fontSize: "x-small" }}>100</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
