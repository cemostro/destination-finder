import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Map from "./Map";
import Preferences from "./Preferences";

const TravelRecommender = ({ countries }) => {
  const [userData, setUserData] = useState({
    Nature: 50,
    Architecture: 50,
    Hiking: 50,
    Wintersports: 50,
    Beach: 50,
    Nightlife: 50,
    Culture: 50,
    Culinary: 50,
    Entertainment: 50,
    Shopping: 50,
  });
  return (
    <div className="App">
      <Row>
        <Col>
          <Preferences userData={userData}></Preferences>
        </Col>
        <Col xs={6}>
          <Map countries={countries} />
        </Col>
        <Col>
          <Preferences userData={userData}></Preferences>
        </Col>
      </Row>
    </div>
  );
};

export default TravelRecommender;
