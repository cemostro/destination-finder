import React from "react";
import "../../App.css";
import Budget from "./components/Budget";
import { CustomizationContainer } from "./components/CustomizationContainer";
import AdditionalInfo from "./components/AdditionalInfo";

const Preferences = ({ userData, setUserData }) => {
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <div style={{ padding: "10px 0" }}>
        <Budget userData={userData} setUserData={setUserData} />
      </div>
      <div>
        <AdditionalInfo userData={userData} setUserData={setUserData} />
      </div>
      <div style={{ padding: "10px 0" }}>
        <CustomizationContainer userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default Preferences;
