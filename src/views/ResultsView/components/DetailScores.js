import React from "react";
import { AttributeScore } from "./AttributeScore";

export const DetailScores = ({ scores, userData }) => {
  const getUserData = (attrName) => {
    var key = attrName.charAt(0).toUpperCase() + attrName.slice(1);
    return userData.Attributes[key];
  };
  return (
    <div style={{ padding: "0px 10px" }}>
      {scores.map((entry, index) => (
        <AttributeScore
          score={entry}
          index={index}
          key={index}
          userPref={getUserData(entry.name)}
        />
      ))}
    </div>
  );
};
