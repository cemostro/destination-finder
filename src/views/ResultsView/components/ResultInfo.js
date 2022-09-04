import React, { useState, useEffect } from "react";
import "../../../App.css";
import { DetailScores } from "./DetailScores";
import { PieChartComponent } from "./PieChartComponent";

const ResultInfo = ({ country, label, stay }) => {
  const [data, setData] = useState([]);
  const loadData = () => {
    var d = [
      { name: "Nature", value: country.attr.nature },
      { name: "Architecture", value: country.attr.architecture },
      { name: "Hiking", value: country.attr.hiking },
      { name: "Winter Sports", value: country.attr.winterSports },
      { name: "Beach", value: country.attr.beach },
      { name: "Culture", value: country.attr.culture },
      { name: "Culinary", value: country.attr.culinary },
      { name: "Entertainment", value: country.attr.entertainment },
      { name: "Shopping", value: country.attr.shopping },
    ];
    setData(d);
  };
  useEffect(loadData, [country]);
  return (
    <div className="dark-theme">
      <PieChartComponent
        scores={data}
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
      <DetailScores scores={data} />
      <hr />
      <p>Overall score: {country.totalScore}/100</p>
    </div>
  );
};

export default ResultInfo;
