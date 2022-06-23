import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";
import Attribute from "./Attribute";
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
        <DateInput />
      </div>
      <div style={{ padding: "10px 0" }}>
        <CustomizationContainer userData={userData} />
      </div>
    </div>
  );
};

export default Preferences;
