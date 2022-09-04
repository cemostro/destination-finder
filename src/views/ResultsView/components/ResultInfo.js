import React, { useState, useEffect } from "react";
import "../../../App.css";
import { DetailScores } from "./DetailScores";
import { PieChartComponent } from "./PieChartComponent";

const ResultInfo = ({ country, label, stay }) => {
  const [scores, setScores] = useState([]);
  const loadData = () => {
    var s = Object.keys(country.attr)?.map((key) => ({
      name: key,
      value: country.attr[key],
    }));
    setScores(s);
  };
  useEffect(loadData, [country]);
  return (
    <div className="dark-theme">
      <PieChartComponent
        scores={scores}
        label={label}
        countryName={country.country}
        region={country.region}
      />
      <p style={{ paddingTop: "10px" }}>
        Price for {stay} days: {country.price}€
      </p>
      <hr />
      <p style={{ fontSize: "x-small" }}>
        Scores of {country.region} based on your preferences:
      </p>
      <DetailScores scores={scores} />
      <hr />
      <p>Overall score: {country.totalScore}/100</p>
    </div>
  );
};

export default ResultInfo;
