import React from "react";
import Attribute from "./Attribute";
import * as myConstant from "../../../data/constantData";

export const CustomizationContainer = ({ userData, setUserData }) => {
  return (
    <div>
      <p style={{ textAlign: "start", fontSize: "small" }}>
        Rate the topics according to their importance to you:
      </p>
      {Object.keys(userData.Attributes).map((item, index) => (
        <div
          style={{
            backgroundColor:
              userData.Attributes[item].weight === 0 ? "gray" :  myConstant.COLORS[index % myConstant.COLORS.length],
            borderRadius: "100",
            color: "#fff",
            textAlign: "left",
            padding: "0 5px",
            margin: "5px 0 0 0",
            height: "40px",
            alignItems: "center",
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
