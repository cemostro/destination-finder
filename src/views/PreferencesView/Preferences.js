import React from "react";
import "../../App.css";
import Budget from "./components/Budget";
import { CustomizationContainer } from "./components/CustomizationContainer";
import { PresetTypesContainer } from "./components/PresetTypesContainer";
import { Tabs, Tab } from "react-bootstrap";
import AdditionalInfo from "./components/AdditionalInfo";
import TravelMonths from "./components/TravelMonths";

const Preferences = ({ userData, setUserData }) => {
  return (
    <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <div style={{ padding: "10px 0" }}>
        <Budget userData={userData} setUserData={setUserData} />
      </div>
      <div>
        <AdditionalInfo userData={userData} setUserData={setUserData} />
      </div>
      <div>
        <TravelMonths userData={userData} setUserData={setUserData} />
      </div>
      <div style={{ padding: "10px 0" }}>
        <Tabs
          defaultActiveKey="novice"
          id="mode"
          className="mb-3"
        >
          <Tab eventKey="novice" title="Preset Travel Types (Novice)">
            <PresetTypesContainer userData={userData} setUserData={setUserData}></PresetTypesContainer>
          </Tab>
          <Tab eventKey="advanced" title="Advanced Preferences">
            <CustomizationContainer userData={userData} setUserData={setUserData} />
          </Tab>
        </Tabs>

      </div>
    </div>
  );
};

export default Preferences;
