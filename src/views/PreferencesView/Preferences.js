import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../../App.css";
import Budget from "./components/Budget";
import { CustomizationContainer } from "./components/CustomizationContainer";
import DateInput from "./components/DateInput";

const Preferences = ({ userData, setUserData }) => {
  return (
    <div>
      <div style={{ padding: "10px 0" }}>
        <Budget userData={userData} setUserData={setUserData} />
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
