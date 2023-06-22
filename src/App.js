import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TravelRecommender from "./views/GeneralView/TravelRecommender";
import LoadCountriesTask from "./tasks/LoadCountriesTask";
import Loading from "./views/GeneralView/Loading";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [fileRetrieved, setFileRetrieved] = useState([]);
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState({
    isPriceImportant: false,
    Budget: 50,
    Months: Array(12).fill(0),
    PresetType: "None",
    Attributes: {
      Nature: {
        weight: 1,
        score: 50,
      },
      Architecture: {
        weight: 1,
        score: 50,
      },
      Hiking: {
        weight: 1,
        score: 50,
      },
      Wintersports: {
        weight: 1,
        score: 50,
      },
      Beach: {
        weight: 1,
        score: 50,
      },
      Culture: {
        weight: 1,
        score: 50,
      },
      Culinary: {
        weight: 1,
        score: 50,
      },
      Entertainment: {
        weight: 1,
        score: 50,
      },
      Shopping: {
        weight: 1,
        score: 50,
      },
    },
  });
  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setFileRetrieved);
  };
  const calculateScores = () => {
    if (fileRetrieved.length > 0) {
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.processCountries(
        fileRetrieved,
        userData,
        setCountries,
        setResults
      );
    }
  };
  useEffect(load, []);
  useEffect(calculateScores, [userData, fileRetrieved]);

  return (
    <div style={{ height: "100vh" }}>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <TravelRecommender
          countries={countries}
          userData={userData}
          setUserData={setUserData}
          results={results}
        />
      )}
    </div>
  );
};

export default App;
