import React, { useState, useCallback } from "react";
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";
import { debounce } from "lodash";

const SlideRange = ({ attrName }) => {
  const { userData, setUserData } = useTravelRecommenderStore();

  const [value, setValue] = useState(userData.Attributes[attrName]);

  const onChange = (value) => {
    setUserData({
      ...userData,
      Attributes: {
        ...userData.Attributes,
        [attrName]: {
          ...userData.Attributes[attrName],
          score: value,
        },
      },
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeDebounced = useCallback(debounce(onChange, 500), []);

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
          onChangeDebounced(e.target.valueAsNumber);
        }}
      ></input>
    </form>
  );
};

export default SlideRange;
