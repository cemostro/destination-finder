import mapData from "../data/regions.json";
import axios from 'axios';

class LoadCountriesTask {
  allResults = [];
  mapCountries = mapData.features;
  load = (setFileRetrieved) => {
    axios.get('http://localhost:1337/api/regions?populate=*')
      .then((response) => {
        setFileRetrieved(response.data.data?.map((region) => region.attributes));
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
          country: scoreCountry.ParentRegion.data.attributes.Region,
          region: scoreCountry.Region,
          uname: scoreCountry.u_name,
          price: scoreCountry.costPerWeek,
          qualifications: {
            nature: this.calculateRecursiveScore(scoreCountry, countryScores, "nature"),
            architecture: this.calculateRecursiveScore(scoreCountry, countryScores, "architecture"),
            hiking: this.calculateRecursiveScore(scoreCountry, countryScores, "hiking"),
            wintersports: this.calculateRecursiveScore(scoreCountry, countryScores, "wintersports"),
            beach: this.calculateRecursiveScore(scoreCountry, countryScores, "beach"),
            culture: this.calculateRecursiveScore(scoreCountry, countryScores, "culture"),
            culinary: this.calculateRecursiveScore(scoreCountry, countryScores, "culinary"),
            entertainment: this.calculateRecursiveScore(scoreCountry, countryScores, "entertainment"),
            shopping: this.calculateRecursiveScore(scoreCountry, countryScores, "shopping"),
          },
          travelMonths: [
            this.calculateRecursiveScore(scoreCountry, countryScores, "jan"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "feb"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "mar"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "apr"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "may"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "jun"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "jul"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "aug"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "sep"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "oct"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "nov"),
            this.calculateRecursiveScore(scoreCountry, countryScores, "dec"),
          ],
          scores: {
            totalScore: 0,
            presetTypeScore: 0,
            attr: {
              nature: {
                weight: userData.Attributes.Nature.weight,
                score: 0,
              },
              architecture: {
                weight: userData.Attributes.Architecture.weight,
                score: 0,
              },
              hiking: {
                weight: userData.Attributes.Hiking.weight,
                score: 0,
              },
              wintersports: {
                weight: userData.Attributes.Wintersports.weight,
                score: 0,
              },
              beach: {
                weight: userData.Attributes.Beach.weight,
                score: 0,
              },
              culture: {
                weight: userData.Attributes.Culture.weight,
                score: 0,
              },
              culinary: {
                weight: userData.Attributes.Culinary.weight,
                score: 0,
              },
              entertainment: {
                weight: userData.Attributes.Entertainment.weight,
                score: 0,
              },
              shopping: {
                weight: userData.Attributes.Shopping.weight,
                score: 0,
              },
            },
          },
        };
        var budgetScore = this.calculatePriceScore(res.price, userData);
        var travelMonthScore = this.calculateTravelMonthScore(res.travelMonths, userData.Months);
        var isAffordable = !userData.isPriceImportant || budgetScore === 100;
        mapCountry.properties.country = scoreCountry.ParentRegion.data.attributes.Region;
        mapCountry.properties.name = scoreCountry.Region;
        res.scores.presetTypeScore = this.calculatePresetTypeScore(userData.PresetType.toLowerCase(), res.qualifications);
        // calculate the score for nature
        res.scores.attr.nature.score = this.calculateAttributeScore(
          res.qualifications.nature,
          userData.Attributes.Nature.score
        );
        res.scores.attr.architecture.score = this.calculateAttributeScore(
          res.qualifications.architecture,
          userData.Attributes.Architecture.score
        );
        res.scores.attr.hiking.score = this.calculateAttributeScore(
          res.qualifications.hiking,
          userData.Attributes.Hiking.score
        );
        res.scores.attr.wintersports.score = this.calculateAttributeScore(
          res.qualifications.wintersports,
          userData.Attributes.Wintersports.score
        );
        res.scores.attr.beach.score = this.calculateAttributeScore(
          res.qualifications.beach,
          userData.Attributes.Beach.score
        );
        res.scores.attr.culture.score = this.calculateAttributeScore(
          res.qualifications.culture,
          userData.Attributes.Culture.score
        );
        res.scores.attr.culinary.score = this.calculateAttributeScore(
          res.qualifications.culinary,
          userData.Attributes.Culinary.score
        );
        res.scores.attr.entertainment.score = this.calculateAttributeScore(
          res.qualifications.entertainment,
          userData.Attributes.Entertainment.score
        );
        res.scores.attr.shopping.score = this.calculateAttributeScore(
          res.qualifications.shopping,
          userData.Attributes.Shopping.score
        );

        let totalAttrScore;
        if (userData.PresetType === "None") {
          totalAttrScore = this.calculateAttributeScoreAverage(res.scores.attr);
        } else {
          totalAttrScore = {score: res.scores.presetTypeScore, weight: 1};
        }
        
        var totalScore = isAffordable
          ? +((totalAttrScore.score +
            budgetScore +
            travelMonthScore) /
            (2 + totalAttrScore.weight)).toFixed(2)
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
  calculateRecursiveScore = (scoreCountry, countryScores, attribute) => {
    if (scoreCountry[attribute] === null) {
      let parent = countryScores.find((c) => c.Region === scoreCountry.ParentRegion.data.attributes.Region);
      if (!parent) return 0;
      return this.calculateRecursiveScore(parent, countryScores, attribute);
    }
    return scoreCountry[attribute];
  };
  calculateAttributeScore = (countryScore, userScore) => {
    return 100 - Math.abs(userScore - countryScore);
  };
  calculateAttributeScoreAverage = (attributes) => {
    let totalScore = 0;
    let totalWeight = 0;
    for (const attribute in attributes) {
      totalScore += attributes[attribute].score * attributes[attribute].weight;
      totalWeight += attributes[attribute].weight;
    }
    return {score : totalScore, weight : totalWeight};
  };
  calculatePresetTypeScore = (attributeName, qualifications) => {
    return qualifications[attributeName];
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
    let maxBudget = 0;
    if (userData.Budget < 100) {
      maxBudget = 250 + (userData.Budget / 100) * 1000;
    } else {
      maxBudget = Number.MAX_VALUE;
    }
    if (countryPrice <= maxBudget) {
      return 100;
    } else {
      return Math.max(0, 100 - ((countryPrice - maxBudget) / maxBudget) * 100);
    }
  };
}

export default LoadCountriesTask;
