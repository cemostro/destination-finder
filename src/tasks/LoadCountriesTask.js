import papa from "papaparse";
import mapData from "../data/countries.json";

class LoadCountriesTask {
  countryScoresUrl =
    "https://raw.githubusercontent.com/assalism/europe-travel-data/main/europe.csv";
  mapCountries = mapData.features;
  load = (setFileRetrieved) => {
    papa.parse(this.countryScoresUrl, {
      download: true,
      header: true,
      complete: (result) => {
        setFileRetrieved(result.data);
      },
    });
    // setState(mapData);
  };
  processCountries = (countryScores, userData, setCountries) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];
      const scoreCountry = countryScores.find(
        (c) => c.ISO3 === mapCountry.properties.ISO3
      );
      if (scoreCountry != null) {
        // calculate the score for nature
        const natureScore = this.calculateAttributeScore(
          scoreCountry.nature,
          userData.Attributes.Nature
        );
        const architectureScore = this.calculateAttributeScore(
          scoreCountry.architecture,
          userData.Attributes.Architecture
        );
        const hikingScore = this.calculateAttributeScore(
          scoreCountry.hiking,
          userData.Attributes.Hiking
        );
        const wintersportsScore = this.calculateAttributeScore(
          scoreCountry.wintersports,
          userData.Attributes.Wintersports
        );
        const beachScore = this.calculateAttributeScore(
          scoreCountry.beach,
          userData.Attributes.Beach
        );
        const cultureScore = this.calculateAttributeScore(
          scoreCountry.culture,
          userData.Attributes.Culture
        );
        const culinaryScore = this.calculateAttributeScore(
          scoreCountry.culinary,
          userData.Attributes.Culinary
        );
        const entertainmentScore = this.calculateAttributeScore(
          scoreCountry.entertainment,
          userData.Attributes.Entertainment
        );
        const shoppingScore = this.calculateAttributeScore(
          scoreCountry.shopping,
          userData.Attributes.Shopping
        );

        const priceScore = this.calculatePriceScore(
          scoreCountry.costPerWeek,
          userData
        );

        mapCountry.properties.score =
          (natureScore +
            hikingScore +
            shoppingScore +
            beachScore +
            wintersportsScore +
            entertainmentScore +
            culinaryScore +
            cultureScore +
            architectureScore +
            priceScore) /
          10;
        console.log("price score:" + priceScore);
      }
    }
    setCountries(this.mapCountries);
  };
  calculateAttributeScore = (countryScore, userScore) => {
    let numScore;
    switch (countryScore) {
      case "--":
        numScore = 0;
        break;
      case "-":
        numScore = 25;
        break;
      case "o":
        numScore = 50;
        break;
      case "+":
        numScore = 75;
        break;
      case "++":
        numScore = 100;
        break;
      default:
        numScore = 50;
    }
    return 100 - Math.abs(userScore - numScore);
  };
  calculatePriceScore = (countryPrice, userData) => {
    //change price per week to # days that user going to stay
    const price = (countryPrice * userData.Stay) / 7;
    const maxBudget = this.getBudgetCeiling(userData.Budget);
    if (price <= maxBudget) {
      return 100;
    }
    const pGroup = this.getPriceGroup(price);
    return 100 - 25 * (pGroup - userData.Budget);
  };

  calculateTimingScore = (country, userData) => {};
  getPriceGroup = (price) => {
    if (price <= 100) {
      return 1;
    } else if (price > 100 && price <= 300) {
      return 2;
    } else if (price > 300 && price <= 500) {
      return 3;
    } else if (price > 500 && price <= 1000) {
      return 4;
    } else if (price > 1000 && price <= 2000) {
      return 5;
    } else {
      return 6;
    }
  };
  getBudgetCeiling = (budget) => {
    let maxBudget = 0;
    console.log("budget:" + budget);
    switch (budget) {
      case 1:
        maxBudget = 100;
        break;
      case 2:
        maxBudget = 300;
        break;
      case 3:
        maxBudget = 500;
        break;
      case 4:
        maxBudget = 1000;
        break;
      case 5:
        maxBudget = 2000;
        break;
      case 6:
        maxBudget = Number.MAX_VALUE;
        break;
      default:
        break;
    }
    return maxBudget;
  };
}

export default LoadCountriesTask;
