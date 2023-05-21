import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "../../../App.css";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December"];

const TravelMonths = ({ userData, setUserData }) => {

  const handleMonthChange = (index) => {
    let newMonths = [...userData.Months];
    newMonths[index] = newMonths[index] === 100 ? 0 : 100;
    setUserData({
      ...userData,
      Months: newMonths,
    });
  };

  let buttonGroups = [];
  for (let i = 0; i < 3; i++) {
    let buttons = [];
    for (let j = 0; j < 4; j++) {
      buttons.push(
        <ToggleButton
          key={`${i * 4 + j} - ${userData.Months[i * 4 + j]}`}
          id={`radio-${i * 4 + j}`}
          type="checkbox"
          style={{ width: "20%" }}
          variant="outline-primary"
          checked={userData.Months[i * 4 + j] === 100}
          onChange={(e) => handleMonthChange(i * 4 + j)}
        >
          {months[i * 4 + j]}
        </ToggleButton>
      );
    }
    buttonGroups.push(
      <ButtonGroup size="sm" style={{ width: "100%" }} key={`${i * 4}`}>
        {buttons}
      </ButtonGroup>
    );
  }


  return (
    <div style={{ margin: "10px" }}>
      {buttonGroups}
    </div>
  );
};

export default TravelMonths;
