import papa from "papaparse";
import mapData from "../data/regions.json";

class LoadCountriesTask {
  countryScoresUrl =
    "https://raw.githubusercontent.com/assalism/travel-data/main/regionmodel.csv";
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
  processCountries = (countryScores, userData, setCountries, setResults) => {
    var results = [];
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];
      const scoreCountry = countryScores.find(
        (c) => c.u_name === mapCountry.properties.u_name
      );
      if (scoreCountry != null) {
        var res = {
          totalScore: 0,
          price: 0,
          country: scoreCountry.ParentRegion,
          region: scoreCountry.Region,
          attr: {
            nature: 0,
            architecture: 0,
            hiking: 0,
            winterSports: 0,
            beach: 0,
            culture: 0,
            culinary: 0,
            entertainment: 0,
            shopping: 0,
            budget: 0,
          },
        };
        mapCountry.properties.country = scoreCountry.ParentRegion;
        mapCountry.properties.name = scoreCountry.Region;
        // calculate the score for nature
        const natureScore = this.calculateAttributeScore(
          scoreCountry.nature,
          userData.Attributes.Nature
        );
        res.attr.nature = natureScore;
        const architectureScore = this.calculateAttributeScore(
          scoreCountry.architecture,
          userData.Attributes.Architecture
        );
        res.attr.architecture = architectureScore;
        const hikingScore = this.calculateAttributeScore(
          scoreCountry.hiking,
          userData.Attributes.Hiking
        );
        res.attr.hiking = hikingScore;
        const wintersportsScore = this.calculateAttributeScore(
          scoreCountry.wintersports,
          userData.Attributes.Wintersports
        );
        res.attr.winterSports = wintersportsScore;
        const beachScore = this.calculateAttributeScore(
          scoreCountry.beach,
          userData.Attributes.Beach
        );
        res.attr.beach = beachScore;
        const cultureScore = this.calculateAttributeScore(
          scoreCountry.culture,
          userData.Attributes.Culture
        );
        res.attr.culture = cultureScore;
        const culinaryScore = this.calculateAttributeScore(
          scoreCountry.culinary,
          userData.Attributes.Culinary
        );
        res.attr.culinary = culinaryScore;
        const entertainmentScore = this.calculateAttributeScore(
          scoreCountry.entertainment,
          userData.Attributes.Entertainment
        );
        res.attr.entertainment = entertainmentScore;
        const shoppingScore = this.calculateAttributeScore(
          scoreCountry.shopping,
          userData.Attributes.Shopping
        );
        res.attr.shopping = shoppingScore;
        const priceScore = this.calculatePriceScore(
          scoreCountry.costPerWeek,
          userData
        );
        res.price = Math.ceil((scoreCountry.costPerWeek * userData.Stay) / 7);
        var totalScore =
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
        mapCountry.properties.score = totalScore;
        res.totalScore = totalScore;
        results.push(res);
      }
    }
    setCountries(this.mapCountries);
    results.sort((a, b) => b.totalScore - a.totalScore);
    // results = results.filter(
    //   (a) => a.price <= this.getBudgetCeiling(userData.Budget)
    // );
    setResults(results.slice(0, 10));
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
    // const pGroup = this.getPriceGroup(price);
    return 0;
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
