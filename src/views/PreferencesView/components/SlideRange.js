import React, { useState } from "react";
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";

const SlideRange = ({ attrName }) => {
  const { userData, setUserData } = useTravelRecommenderStore();
  const [value, setValue] = useState(userData.Attributes[attrName]);
  return (
    <form style={{ width: "100%", display: "flex" }}>
      <input
        id="slider"
        style={{ width: "100%", height: "1.5rem" }}
        type="range"
        step={25}
        value={value}
        onChange={(e) => {
          setValue(e.target.valueAsNumber);
          setUserData({
            ...userData,
            Attributes: {
              ...userData.Attributes,
              [attrName]: {
                ...userData.Attributes[attrName],
                score: e.target.valueAsNumber
              },
            },
          });
        }}
      ></input>
    </form>
  );
};

export default SlideRange;
