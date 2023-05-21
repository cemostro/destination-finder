import React, {useMemo} from "react";
import { TravelMonthScore } from "../../SharedComponents/TravelMonthScore";

const indexToMonth = (index) => {
  switch (index) {
    case 0:
      return "JANUARY";
    case 1:
      return "FEBRUARY";
    case 2:
      return "MARCH";
    case 3:
      return "APRIL";
    case 4:
      return "MAY";
    case 5:
      return "JUNE";
    case 6:
      return "JULY";
    case 7:
      return "AUGUST";
    case 8:
      return "SEPTEMBER";
    case 9:
      return "OCTOBER";
    case 10:
      return "NOVEMBER";
    case 11:
      return "DECEMBER";
    default:
      return "JANUARY";
  }
}

export const TravelMonthsComponent = ({ countryName, travelMonths, userData }) => {
  console.log(userData);
  
  const bestTravelMonth = useMemo(() => {
    let bestMonth = "JANUARY";
    let maxScore = 0;
    for (let i = 0; i < travelMonths.length; i++) {
      if (userData.Months[i] === 0) continue;
      let monthScore = 100 - Math.abs(userData.Months[i] - travelMonths[i]);
      if (monthScore > maxScore) {
        maxScore = monthScore;
        bestMonth = indexToMonth(i);
      }
    }
    return { bestMonth, maxScore };
  }, [travelMonths, userData]);

  return (
    <div>
      <p style={{ fontSize: "x-small" }}>
        The best travel months for {countryName} are listed below.
        Your best matching travel month is {bestTravelMonth.bestMonth} with a score of {bestTravelMonth.maxScore}%. 
      </p>
      <TravelMonthScore travelMonths={travelMonths} />
    </div>
  );
};
