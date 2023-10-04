import React, { useState } from "react";
import "../../App.css";
import Budget from "./components/Budget";
import { CustomizationContainer } from "./components/CustomizationContainer";
import { PresetTypesContainer } from "./components/PresetTypesContainer";
import { Tabs, Tab } from "react-bootstrap";
import AdditionalInfo from "./components/AdditionalInfo";
import TravelMonths from "./components/TravelMonths";
import useTravelRecommenderStore from "../../store/travelRecommenderStore";

const Preferences = () => {
  const { userData, setUserData } = useTravelRecommenderStore();
  const [key, setKey] = useState('advanced');

  return (
    <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden", paddingRight: "5px" }}>
      <p style={{ textAlign: "left", paddingTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>DestiRec - Travel Destination Recommender System</p>
      <hr />
      <div style={{ padding: "10px 0" }}>
        <Budget />
      </div>
      <div>
        <AdditionalInfo />
      </div>
      <div>
        <TravelMonths />
      </div>
      <div style={{ padding: "10px 0" }}>
        <Tabs
          activeKey={key}
          id="mode"
          onSelect={(k) => { setKey(k); setUserData({ ...userData, PresetType: [] }); }}
          className="mb-3"
        >
          <Tab eventKey="novice" title="Presets (Novice)">
            <PresetTypesContainer />
          </Tab>
          <Tab eventKey="advanced" title="Advanced Preferences">
            <CustomizationContainer />
          </Tab>
        </Tabs>

      </div>
      <hr />
      <p style={{ textAlign: "left", fontSize: "0.8em" }}>(c) Asal Nesar Noubari, Cem Nasit Sarica and Wolfgang Wörndl (Technical University of Munich)</p>
    </div>
  );
};

export default Preferences;
