import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import papa from "papaparse";
import mapData from "../data/countries.json";

class LoadCountriesTask {
  countryScoresUrl =
    "https://raw.githubusercontent.com/assalism/europe-travel-data/main/europe.csv";
  mapCountries = mapData;
  load = (setState) => {
    papa.parse(this.countryScoresUrl, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result);
        processCountries(result.data);
      },
    });

    const processCountries = (countries) => {
      for (let i = 0; i < this.mapCountries.length; i++) {
        const mapCountry = this.mapCountries[i];
        // const scoreCountry = countries.find((c)=>c.)
      }
    };
    setState(mapData);
  };
}
//MarlboroGold2402!

export default LoadCountriesTask;
