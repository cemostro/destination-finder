import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./Styles/Map.css";

const position = [51.0967884, 5.9671304];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getColor(d) {
  return d > 80
    ? "#109146"
    : d > 60
    ? "#7CBA43"
    : d > 40
    ? "#FFCC06"
    : d > 20
    ? "#F58E1D"
    : d >= 0
    ? "#BF1E24"
    : "#fff";
}

class Map extends Component {
  state = {};

  onEachCountry = (country, layer) => {
    var score = getRandomInt(100);
    layer.options.fillColor = getColor(score);
  };
  countryStyle = {
    fillOpacity: 1,
    color: "#868686",
    weight: 1,
  };
  render() {
    return (
      <div>
        <MapContainer
          style={{ height: "100vh", width: "auto" }}
          zoom={4}
          center={position}
          zoomControl={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          boxZoom={false}
          keyboard={false}
        >
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
      </div>
    );
  }
}
export default Map;
