import React from "react";
import { Row, Col } from "react-bootstrap";
import * as myConstant from "../../../data/constantData";
import { BarChart } from "../../SharedComponents/BarChart";
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";

export const AttributeScore = ({ score, index }) => {
  const userData = useTravelRecommenderStore((state) => state.userData);
  const getUserData = (attrName) => {
    var key = attrName.charAt(0).toUpperCase() + attrName.slice(1);
    return userData.Attributes[key];
  };
  return (
    <Row>
      <Col xs={4} style={{ textAlign: "left", fontSize: "small" }}>
        {score.name}
      </Col>
      <Col xs={8}>
        <BarChart
          score={score}
          benchmark={getUserData(score.name).score}
          showBenchmark={userData.PresetType.length === 0}
          color={myConstant.COLORS[index % myConstant.COLORS.length]}
        />
      </Col>
    </Row>
  );
};
