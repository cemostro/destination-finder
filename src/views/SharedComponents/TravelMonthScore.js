import React, { useMemo } from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";
import useTravelRecommenderStore from "../../store/travelRecommenderStore";

const scoreToColor = (score) => {
  if (score < 15) return "red";
  if (score < 40) return "orange";
  if (score < 65) return "yellow";
  if (score < 90) return "lightgreen";
  return "green";
}

const indexToMonth = (index) => {
  switch (index) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
}

export const TravelMonthScore = ({ travelMonths, showMatches }) => {
  const { userData } = useTravelRecommenderStore();

  const travelMonthMatchCols = useMemo(() => {
    let cols = [];
    if (userData?.Months) {
      for (let i = 0; i < userData.Months.length; i++) {
        cols.push(
          <Col key={i} xs={1} style={{padding: 0}}>
            {userData.Months[i] === 100 ? "+" : ""}
          </Col>
        );
      }
    }
    return cols;
  }, [userData?.Months]);

  return (
    <div>
      <ProgressBar>
        {travelMonths.map((entry, index) => (
          <ProgressBar
            style={{ backgroundColor: scoreToColor(entry) }}
            now={8.333}
            key={index}
            label={<p style={{ color: "black", fontSize: "10px", margin: 0 }}>{indexToMonth(index)}</p>}
          />
        ))}
      </ProgressBar>
      {userData?.Months && showMatches && (
        <Row style={{ alignItems: "center", padding: "0px 10px" }}>
          {travelMonthMatchCols}
        </Row>
      )}
    </div>
  );
};
