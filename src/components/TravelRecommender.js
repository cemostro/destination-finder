import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Map from "./Map";
import Preferences from "./Preferences";

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
          <Preferences
            userData={userData}
            setUserData={setUserData}
          ></Preferences>
        </Col>
      </Row>
    </div>
  );
};

export default TravelRecommender;
