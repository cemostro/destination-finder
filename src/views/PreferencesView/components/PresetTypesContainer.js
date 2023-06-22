import React, { useMemo } from "react";
import * as myConstant from "../../../data/constantData";
import { Card, Row, Col } from "react-bootstrap";
import culinary from "../../../images/culinary.png";

export const PresetTypesContainer = ({ userData, setUserData }) => {

    const presetTypesRows = useMemo(() => {
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let cols = [];
            for (let j = 0; j < 3; j++) {
                cols.push(
                    <Col xs={4} s="auto" key={`preset-col-${i * 3 + j}`}>
                        <Card
                            id={`preset-${i * 3 + j}`}
                            key={`${i * 3 + j} - ${userData.PresetType}`}
                            border={userData.PresetType === Object.keys(userData.Attributes)[i * 3 + j] ? "primary" : undefined}
                            className="mb-3"
                            style={{ alignItems: "center", backgroundColor: myConstant.COLORS[i * 3 + j], cursor: "pointer" }}
                            onClick={() => {
                                setUserData({
                                    ...userData,
                                    PresetType: Object.keys(userData.Attributes)[i * 3 + j],
                                });
                            }}
                        >
                            <Card.Img variant="top" src={culinary} style={{ height: "100px", width: "100px" }} />
                            <Card.Body>
                                <Card.Text style={{ color: userData.PresetType === Object.keys(userData.Attributes)[i * 3 + j] ? "blue" : "white" }}>{Object.keys(userData.Attributes)[i * 3 + j]}</Card.Text>
                            </Card.Body>
                        </Card>
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
