import React, { useMemo, useCallback } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "../../../App.css";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December"];

const TravelMonths = ({ userData, setUserData }) => {

  const handleMonthChange = useCallback((index) => {
    let newMonths = [...userData.Months];
    newMonths[index] = newMonths[index] === 100 ? 0 : 100;
    setUserData({
      ...userData,
      Months: newMonths,
    });
  }, [userData, setUserData]);

  const buttonGroups = useMemo(() => {
    let buttonGroups = [];
    for (let i = 0; i < 3; i++) {
      let buttons = [];
      for (let j = 0; j < 4; j++) {
        buttons.push(
          <ToggleButton
            key={`${i * 4 + j} - ${userData.Months[i * 4 + j]}`}
            id={`radio-${i * 4 + j}`}
            type="checkbox"
            style={{ width: "20%", }}
            variant="outline-primary"
            checked={userData.Months[i * 4 + j] === 100}
            onChange={(e) => handleMonthChange(i * 4 + j)}
          >
            <p style={{ fontSize: "0.8rem", margin: 0, color: "white" }}>{months[i * 4 + j]}</p>
          </ToggleButton>
        );
      }
      buttonGroups.push(
        <ButtonGroup size="sm" style={{ width: "95%" }} key={`${i * 4}`}>
          {buttons}
        </ButtonGroup>
      );
    }
    return buttonGroups;
  }, [userData.Months, handleMonthChange]);


  return (
    <div>
      <hr />
      <p style={{ textAlign: "left", justifyContent: "center", marginBottom: "1.2rem" }}>
        Preferred Travel Months:
      </p>
      {buttonGroups}
      <hr />
    </div>
  );
};

export default TravelMonths;
