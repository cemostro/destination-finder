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

        mapCountry.properties.score =
          (natureScore +
            hikingScore +
            shoppingScore +
            wintersportsScore +
            entertainmentScore +
            culinaryScore +
            cultureScore +
            architectureScore) /
          8;
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
  calculatePriceScore = () => {};
}

export default LoadCountriesTask;
