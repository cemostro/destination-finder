import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../data/countries.json";
import "leaflet/dist/leaflet.css";

const position = [51.0967884, 5.9671304];

class Map extends Component {
  state = {};
  render() {
    return (
      <div>
        <MapContainer
          style={{ height: "100vh", width: "auto" }}
          zoom={5}
          center={position}
        >
          <GeoJSON data={mapData.features} />
        </MapContainer>
      </div>
    );
  }
}
export default Map;
