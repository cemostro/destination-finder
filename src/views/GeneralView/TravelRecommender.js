import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Row, Col } from "react-bootstrap";
import Map from "../MapView/Map";
import Preferences from "../PreferencesView/Preferences";
import { Results } from "../ResultsView/Results";
import { Tooltip } from 'react-tooltip'

const TravelRecommender = ({ countries, userData, setUserData, results }) => {
  const [activeResult, setActiveResult] = useState(0);
  return (
    <div className="App">
      <Row style={{ height: "100%" }}>
        <Col style={{ height: "100%" }}>
          <Preferences
            userData={userData}
            setUserData={setUserData}
          ></Preferences>
        </Col>
        <Col xs={6} style={{ height: "100%" }}>
          <Map countries={countries} setActiveResult={setActiveResult} />
        </Col>
        <Col style={{ height: "100%" }}>
          <Results
            results={results}
            stay={userData.Stay}
            activeResult={activeResult}
            userData={userData}
          />
        </Col>
      </Row>
      <Tooltip id="prio-switch-tooltip" style={{width : "300px"}} />
      <Tooltip id="additional-info-tooltip" style={{width : "300px"}} place="bottom" />
      <Tooltip id="barchart-tooltip" style={{width : "300px"}} place="bottom" />
    </div>
  );
};

export default TravelRecommender;
