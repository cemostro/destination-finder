import React from "react";
import { AttributeScore } from "./AttributeScore";

export const DetailScores = ({ scores }) => {
  return (
    <div style={{ padding: "0px 10px" }}>
      {scores.map((entry, index) => (
        <AttributeScore score={entry} index={index} key={index} />
      ))}
    </div>
  );
};
