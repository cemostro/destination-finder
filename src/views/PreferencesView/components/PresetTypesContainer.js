import React, { useMemo } from "react";
import * as myConstant from "../../../data/constantData";
import { Row, Col, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faTree, faLandmark, faPersonHiking, faPersonSkiing, faUmbrellaBeach, faToriiGate, faFilm, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const icons = [faTree, faLandmark, faPersonHiking, faPersonSkiing, faUmbrellaBeach, faToriiGate, faBurger, faFilm, faBagShopping]

export const PresetTypesContainer = ({ userData, setUserData }) => {

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
                            style={{ backgroundColor: userData.PresetType === Object.keys(userData.Attributes)[i * 3 + j] ? myConstant.COLORS[i * 3 + j] : undefined }}
                            onClick={() => {
                                setUserData({
                                    ...userData,
                                    PresetType: Object.keys(userData.Attributes)[i * 3 + j],
                                });
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
            {presetTypesRows}
        </div>
    );
};
