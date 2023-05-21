import papa from "papaparse";
import mapData from "../data/regions.json";

class LoadCountriesTask {
  allResults = [];
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
  };
  processCountries = (countryScores, userData, setCountries, setResults) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];
      const scoreCountry = countryScores.find(
        (c) => c.u_name === mapCountry.properties.u_name
      );
      if (scoreCountry != null) {
        var res = {
          country: scoreCountry.ParentRegion,
          region: scoreCountry.Region,
          uname: scoreCountry.u_name,
          price: Math.ceil((scoreCountry.costPerWeek * userData.Stay) / 7),
          qualifications: {
            nature: this.calculateQualification(scoreCountry.nature),
            architecture: this.calculateQualification(
              scoreCountry.architecture
            ),
            hiking: this.calculateQualification(scoreCountry.hiking),
            wintersports: this.calculateQualification(
              scoreCountry.wintersports
            ),
            beach: this.calculateQualification(scoreCountry.beach),
            culture: this.calculateQualification(scoreCountry.culture),
            culinary: this.calculateQualification(scoreCountry.culinary),
            entertainment: this.calculateQualification(
              scoreCountry.entertainment
            ),
            shopping: this.calculateQualification(scoreCountry.shopping),
          },
          travelMonths: [
            this.calculateTravelMonth(scoreCountry, countryScores, "jan"),
            this.calculateTravelMonth(scoreCountry, countryScores, "feb"),
            this.calculateTravelMonth(scoreCountry, countryScores, "mar"),
            this.calculateTravelMonth(scoreCountry, countryScores, "apr"),
            this.calculateTravelMonth(scoreCountry, countryScores, "may"),
            this.calculateTravelMonth(scoreCountry, countryScores, "jun"),
            this.calculateTravelMonth(scoreCountry, countryScores, "jul"),
            this.calculateTravelMonth(scoreCountry, countryScores, "aug"),
            this.calculateTravelMonth(scoreCountry, countryScores, "sep"),
            this.calculateTravelMonth(scoreCountry, countryScores, "oct"),
            this.calculateTravelMonth(scoreCountry, countryScores, "nov"),
            this.calculateTravelMonth(scoreCountry, countryScores, "dec"),
          ],
          scores: {
            totalScore: 0,
            attr: {
              nature: 0,
              architecture: 0,
              hiking: 0,
              wintersports: 0,
              beach: 0,
              culture: 0,
              culinary: 0,
              entertainment: 0,
              shopping: 0,
            },
          },
        };
        var budgetScore = this.calculatePriceScore(res.price, userData);
        var travelMonthScore = this.calculateTravelMonthScore(res.travelMonths, userData.Months);
        var isAffordable = !userData.isPriceImportant || budgetScore === 100;
        mapCountry.properties.country = scoreCountry.ParentRegion;
        mapCountry.properties.name = scoreCountry.Region;
        // calculate the score for nature
        res.scores.attr.nature = this.calculateAttributeScore(
          res.qualifications.nature,
          userData.Attributes.Nature
        );
        res.scores.attr.architecture = this.calculateAttributeScore(
          res.qualifications.architecture,
          userData.Attributes.Architecture
        );
        res.scores.attr.hiking = this.calculateAttributeScore(
          res.qualifications.hiking,
          userData.Attributes.Hiking
        );
        res.scores.attr.wintersports = this.calculateAttributeScore(
          res.qualifications.wintersports,
          userData.Attributes.Wintersports
        );
        res.scores.attr.beach = this.calculateAttributeScore(
          res.qualifications.beach,
          userData.Attributes.Beach
        );
        res.scores.attr.culture = this.calculateAttributeScore(
          res.qualifications.culture,
          userData.Attributes.Culture
        );
        res.scores.attr.culinary = this.calculateAttributeScore(
          res.qualifications.culinary,
          userData.Attributes.Culinary
        );
        res.scores.attr.entertainment = this.calculateAttributeScore(
          res.qualifications.entertainment,
          userData.Attributes.Entertainment
        );
        res.scores.attr.shopping = this.calculateAttributeScore(
          res.qualifications.shopping,
          userData.Attributes.Shopping
        );

        var totalScore = isAffordable
          ? +((res.scores.attr.nature +
              res.scores.attr.architecture +
              res.scores.attr.hiking +
              res.scores.attr.wintersports +
              res.scores.attr.beach +
              res.scores.attr.culture +
              res.scores.attr.culinary +
              res.scores.attr.entertainment +
              res.scores.attr.shopping +
              budgetScore +
              travelMonthScore) /
            11).toFixed(2)
          : 0;

        res.scores.totalScore = totalScore;
        mapCountry.properties.result = res;
        this.allResults.push(res);
      }
    }
    this.mapCountries.sort(
      (a, b) =>
        b.properties.result.scores.totalScore -
        a.properties.result.scores.totalScore
    );
    setCountries(this.mapCountries);
    this.allResults.sort((a, b) => b.scores.totalScore - a.scores.totalScore);
    this.allResults = this.allResults.filter((a) => a.scores.totalScore > 0);
    setResults(this.allResults.slice(0, 10));
  };
  calculateQualification = (qualification) => {
    let numScore;
    switch (qualification) {
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
    return numScore;
  };
  calculateTravelMonth = (scoreCountry, countryScores, month) => {
    let numScore;
    switch (scoreCountry[month]) {
      case "":
        if (scoreCountry.ParentRegion === "") {
          numScore = 0;
          break;
        }
        let parent = countryScores.find((c) => c.Region === scoreCountry.ParentRegion);
        numScore = this.calculateTravelMonth(parent, countryScores, month);
        break;
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
    return numScore;
  };
  calculateAttributeScore = (countryScore, userScore) => {
    return 100 - Math.abs(userScore - countryScore);
  };
  calculateTravelMonthScore = (countryTravelMonths, userTravelMonths) => {
    let maxScore = 0;
    for (let i = 0; i < countryTravelMonths.length; i++) {
      if (userTravelMonths[i] === 0) continue;
      let monthScore = 100 - Math.abs(userTravelMonths[i] - countryTravelMonths[i]);
      if (monthScore > maxScore) {
        maxScore = monthScore;
      }
    }
    return maxScore;
  };
  calculatePriceScore = (countryPrice, userData) => {
    //change price per week to # days that user going to stay
    const maxBudget = this.getBudgetCeiling(userData.Budget);
    if (countryPrice <= maxBudget) {
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
