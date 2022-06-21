import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";
import Attribute from "./Attribute";
import Budget from "./Budget";
import DateInput from "./DateInput";

const COLORS = ["#14B1B2", "#FF910B", "#04A2DF", "#F05E67"];

const CustomizationContainer = ({ userData, setUserData }) => {
  return (
    <div>
      <div style={{ padding: "10px 0" }}>
        <Budget />
      </div>
      <div style={{ padding: "10px 0" }}>
        <DateInput />
      </div>
      <div style={{ padding: "10px 0" }}>
        <Attribute />
      </div>
    </div>
  );
};

export default CustomizationContainer;
