import React, { useState, useEffect } from "react";
import "../../../App.css";
import { DetailScores } from "./DetailScores";
import { NoviceScores } from "./NoviceScores";
import { PieChartComponent } from "./PieChartComponent";
import { TravelMonthsComponent } from "./TravelMonthsComponent";

const ResultInfo = ({ country, label, userData }) => {
  const [scores, setScores] = useState([]);
  const loadData = () => {
    var s = Object.keys(country.scores.attr)?.map((key) => ({
      name: key,
      value: country.scores.attr[key].score,
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
      Budget Level: {`${country.budgetLevel} (${country.budgetLevel < 4 ? "Low" : country.budgetLevel < 8 ? "Medium" : "High"})`}
      </p>
      <hr />
      <TravelMonthsComponent
        countryName={country.region}
        travelMonths={country.travelMonths}
        userData={userData} />
      <hr />
      {userData.PresetType.length === 0 ? (
        <>
          <p style={{ fontSize: "x-small" }}>
            Scores of {country.region} based on your preferences: (The bar
            demonstrates the score of the given attribute for {country.region} and
            the black line shows your preference - hover on the bars for more
            details)
          </p>
          <DetailScores
            scores={Object.keys(country.qualifications)?.map((key) => ({
              name: key,
              value: country.qualifications[key],
            }))}
            userData={userData}
          />
        </>
      ) : (
        <>
          <p style={{ fontSize: "x-small" }}>
            Scores of {country.region} based on your preset types: (The bar
            demonstrates the score of the given attribute for {country.region}.)
          </p>
          <NoviceScores
            scores={Object.keys(country.qualifications)?.map((key) => ({
              name: key,
              value: country.qualifications[key],
            }))}
            userData={userData}
          />
        </>
      ) }

      <hr />
      <p>Overall score: {country.scores.totalScore}/100</p>
    </div>
  );
};

export default ResultInfo;
