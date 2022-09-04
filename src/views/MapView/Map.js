import React, { useRef, useEffect } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/Map.css";

const position = [51.0967884, 5.9671304];

const Map = ({ countries }) => {
  const geoJsonLayer = useRef(null);

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(countries);
    }
  });
  const onEachCountry = (country, layer) => {
    var score = country.properties.score;
    layer.options.fillColor = getColor(score);
    layer.bindPopup(country.properties.country + "-" + country.properties.name);
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  const countryStyle = {
    fillOpacity: 1,
    color: "#868686",
    weight: 1,
  };

  const highlightFeature = (e) => {
    var layer = e.target;
    layer.setStyle({
      weight: 5,
      color: "white",
      fillOpacity: 0.7,
    });
  };

  const resetHighlight = (e) => {
    var layer = e.target;
    layer.setStyle({
      fillOpacity: 1,
      color: "#868686",
      weight: 1,
    });
  };

  const getColor = (d) => {
    return d > 90
      ? "#109146"
      : d > 70
      ? "#7CBA43"
      : d > 60
      ? "#FFCC06"
      : d > 50
      ? "#F58E1D"
      : d >= 0
      ? "#BF1E24"
      : "#fff";
  };

  return (
    <div>
      <MapContainer
        style={{ height: "100vh", width: "auto" }}
        zoom={4}
        center={position}
        // zoomControl={false}
        // touchZoom={false}
        // doubleClickZoom={false}
        // scrollWheelZoom={false}
        // boxZoom={false}
        // keyboard={false}
      >
        <GeoJSON
          ref={geoJsonLayer}
          style={countryStyle}
          data={countries}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
