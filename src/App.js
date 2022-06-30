import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TravelRecommender from "./components/TravelRecommender";
import LoadCountriesTask from "./tasks/LoadCountriesTask";
import Loading from "./components/Loading";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [fileRetrieved, setFileRetrieved] = useState([]);
  const [userData, setUserData] = useState({
    StartDate: new Date(),
    Stay: 4,
    Attributes: {
      Nature: 50,
      Architecture: 50,
      Hiking: 50,
      Wintersports: 50,
      Beach: 50,
      Culture: 50,
      Culinary: 50,
      Entertainment: 50,
      Shopping: 50,
    },
  });
  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setFileRetrieved);
  };
  const calculateScores = () => {
    if (fileRetrieved.length > 0) {
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.processCountries(fileRetrieved, userData, setCountries);
    }
  };
  useEffect(load, []);
  useEffect(calculateScores, [userData, fileRetrieved]);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <TravelRecommender
          countries={countries}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </div>
  );
};

export default App;
