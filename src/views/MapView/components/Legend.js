import L from "leaflet";
import { useEffect } from "react";
import "../styles/Map.css";
function Legend({ map }) {
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
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = [100, 90, 70, 60, 50];
        const texts = ["Excellent", "Good", "Fair", "Uncertain", "Poor"];
        let labels = [];

        for (let i = 0; i < grades.length; i++) {
          labels.push(
            '<i style="background:' + getColor(grades[i]) + '"></i> ' + texts[i]
          );
        }

        div.innerHTML = labels.join("<br>");
        return div;
      };

      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}

export default Legend;
