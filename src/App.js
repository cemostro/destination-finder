import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TravelRecommender from "./components/TravelRecommender";
import LoadCountriesTask from "./tasks/LoadCountriesTask";
import Loading from "./components/Loading";

const App = () => {
  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };
  useEffect(load, [countries]);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <TravelRecommender countries={countries} />
      )}
    </div>
  );
};

export default App;
