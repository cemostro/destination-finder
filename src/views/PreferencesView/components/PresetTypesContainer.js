import React, { useMemo } from "react";
import * as myConstant from "../../../data/constantData";
import { Row, Col, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faTree, faLandmark, faPersonHiking, faPersonSkiing, faUmbrellaBeach, faToriiGate, faFilm, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import useTravelRecommenderStore from "../../../store/travelRecommenderStore";

const icons = [faTree, faLandmark, faPersonHiking, faPersonSkiing, faUmbrellaBeach, faToriiGate, faBurger, faFilm, faBagShopping]

export const PresetTypesContainer = () => {
    const { userData, setUserData } = useTravelRecommenderStore();

    const presetTypesRows = useMemo(() => {
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let cols = [];
            for (let j = 0; j < 3; j++) {
                cols.push(
                    <Col xs={4} s="auto" key={`preset-col-${i * 3 + j}`}>
                        <div
                            className="preset-badge"
                            id={`preset-${i * 3 + j}`}
                            key={`${i * 3 + j} - ${userData.PresetType}`}
                            style={{ backgroundColor: userData.PresetType.includes(Object.keys(userData.Attributes)[i * 3 + j]) ? myConstant.COLORS[i * 3 + j] : undefined }}
                            onClick={() => {
                                const index = userData.PresetType.indexOf(Object.keys(userData.Attributes)[i * 3 + j]);
                                if (index !== -1) {
                                    setUserData({
                                        ...userData,
                                        PresetType: userData.PresetType.slice(0, index).concat(userData.PresetType.slice(index + 1)),
                                    });
                                } else {
                                    setUserData({
                                        ...userData,
                                        PresetType: userData.PresetType.concat([Object.keys(userData.Attributes)[i * 3 + j]]),
                                    });
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={icons[i * 3 + j]} />
                            {Object.keys(userData.Attributes)[i * 3 + j]}
                        </div>
                    </Col>
                );
            }
            rows.push(
                <Row key={`preset-row-${i * 3}`}>
                    {cols}
                </Row>
            );
        }
        return rows;
    }, [userData, setUserData]);


    return (
        <div>
            <p style={{ textAlign: "start", fontSize: "small" }}>
                Choose the topics that interest you the most:
            </p>
            {presetTypesRows}
        </div>
    );
};
