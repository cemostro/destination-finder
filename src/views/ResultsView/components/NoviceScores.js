import React from "react";
import { NoviceAttributeScores } from "./NoviceAttributeScores";
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";

export const NoviceScores = ({ scores }) => {
    const { userData } = useTravelRecommenderStore();
    const getCountryData = (attrName) => {
        var key = attrName.charAt(0).toLowerCase() + attrName.slice(1);
        return scores.find((c) => c.name === key);
    };
    return (
        <div style={{ padding: "0px 10px" }}>
            {userData.PresetType.map((attrName, index) => (
                <NoviceAttributeScores
                    score={getCountryData(attrName)}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
};
