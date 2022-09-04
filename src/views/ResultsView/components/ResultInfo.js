import React from "react";
import "../../../App.css";

const ResultInfo = ({ result }) => {
  return (
    <div className="dark-theme">
      <hr />
      <p>Overall score: {result.totalScore}/100</p>
    </div>
  );
};

export default ResultInfo;
