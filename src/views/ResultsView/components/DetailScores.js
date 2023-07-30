import React from "react";
import { AttributeScore } from "./AttributeScore";

export const DetailScores = ({ scores, userData }) => {
  const getUserData = (attrName) => {
    var key = attrName.charAt(0).toUpperCase() + attrName.slice(1);
    return userData.Attributes[key];
  };
  return (
    <div style={{ padding: "0px 10px" }}>
      {scores.filter((entry) => getUserData(entry.name).weight !== 0).map((entry, index) => (
        <AttributeScore
          score={entry}
          index={index}
          key={index}
          userPref={getUserData(entry.name).score}
        />
      ))}
    </div>
  );
};
