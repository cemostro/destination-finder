import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Row, Col } from "react-bootstrap";
import Map from "../MapView/Map";
import Preferences from "../PreferencesView/Preferences";
import { Results } from "../ResultsView/Results";

const TravelRecommender = ({ countries, userData, setUserData }) => {
  return (
    <div className="App">
      <Row>
        <Col>
          <Preferences
            userData={userData}
            setUserData={setUserData}
          ></Preferences>
        </Col>
        <Col xs={6}>
          <Map countries={countries} />
        </Col>
        <Col>
          <Results />
        </Col>
      </Row>
    </div>
  );
};

export default TravelRecommender;
