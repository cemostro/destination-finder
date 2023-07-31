import React from "react";
import { AttributeScore } from "./AttributeScore";
import { TravelMonthScore } from "../../SharedComponents/TravelMonthScore";
import { Row, Col } from "react-bootstrap";

export const DetailScores = ({ scores, travelMonths, budgetLevel }) => {
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
        <div style={{ width: "100%" }}>
          <p style={{ margin: 0 }}>Budget Level: {`${(budgetLevel / 10).toFixed(0)} (${budgetLevel < 40 ? "Low" : budgetLevel < 80 ? "Medium" : "High"})`}</p>
          <hr style={{ marginBottom: "1.2rem", marginTop: 0 }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <TravelMonthScore travelMonths={travelMonths} showMatches={false} />
        </div>
        <div>
          {scores.map((entry, index) => (
            <AttributeScore score={entry} index={index} key={index} />
          ))}
        </div>
      </div>
      <div style={{ padding: "0px 10px", width: "250px" }}>
        <Row style={{ alignItems: "center", justifyContent: "end" }}>
          <Col xs={8}>
            <Row>
              <Col xs={4}>
                <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
                <div style={{ padding: "0", fontSize: "x-small" }}>0</div>
              </Col>
              <Col xs={4} style={{ textAlign: "center" }}>
                <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
                <div style={{ padding: "0", fontSize: "x-small" }}>50</div>
              </Col>
              <Col xs={4} style={{ textAlign: "end" }}>
                <div style={{ padding: "0", fontSize: "x-small" }}>.</div>
                <div style={{ padding: "0", fontSize: "x-small" }}>100</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
