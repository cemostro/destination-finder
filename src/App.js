import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Map from "./components/Map";
import Preferences from "./components/Preferences";

function App() {
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
          <Map />
        </Col>
        <Col>
          <Preferences userData={userData}></Preferences>
        </Col>
      </Row>
    </div>
  );
}

export default App;
