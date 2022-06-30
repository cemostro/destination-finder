import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";
import Budget from "./Budget";
import { CustomizationContainer } from "./CustomizationContainer";
import DateInput from "./DateInput";

const Preferences = ({ userData, setUserData }) => {
  return (
    <div>
      <div style={{ padding: "10px 0" }}>
        <Budget />
      </div>
      <div>
        <DateInput userData={userData} setUserData={setUserData} />
      </div>
      <div style={{ padding: "10px 0" }}>
        <CustomizationContainer userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default Preferences;
