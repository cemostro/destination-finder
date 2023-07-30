import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../../../App.css";
import * as myConstant from "../../../data/constantData";

const Donut = ({ scores, label }) => {
  let donutState = {
    innerRadius: 30,
    outerRadius: 50,
  };

  const centerLabel = (
    <text
      x={donutState.outerRadius + 15}
      y={donutState.outerRadius}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontWeight: "bold" }}
      fontSize={20}
    >
      {label}
    </text>
  );

  return (
    <PieChart
      width={(donutState.outerRadius + 15) * 2}
      height={donutState.outerRadius * 2}
    >
      {centerLabel}
      <Pie
        data={scores.map((score) => {
          return {
            name: score.name,
            value: score.value * score.weight,
          };
        })}
        innerRadius={donutState.innerRadius}
        outerRadius={donutState.outerRadius}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        isAnimationActive={false}
      >
        {scores.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={myConstant.COLORS[index % myConstant.COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Donut;
