import React from "react";
import Attribute from "./Attribute";
import * as myConstant from "../../../data/constantData";

export const CustomizationContainer = ({ userData, setUserData }) => {
  return (
    <div>
      {Object.keys(userData.Attributes).map((item, index) => (
        <div
          style={{
            backgroundColor:
              myConstant.COLORS[index % myConstant.COLORS.length],
            borderRadius: "100",
            color: "#fff",
            textAlign: "left",
            padding: "0 5px",
            margin: "5px 0 0 0",
          }}
          key={index}
        >
          <Attribute
            attrName={item}
            userData={userData}
            setUserData={setUserData}
          />
        </div>
      ))}
    </div>
  );
};