import React, {useMemo} from "react";
import * as myConstant from "../../../data/constantData";
import { Card, Row, Col } from "react-bootstrap";
import culinary from "../../../images/culinary.png";

export const PresetTypesContainer = ({ userData, setUserData }) => {
    console.log(userData.Attributes)

    const presetTypesRows = useMemo(() => {
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let cols = [];
            for (let j = 0; j < 3; j++) {
                cols.push(
                    <Col>
                        <Card
                            className="mb-3"
                            style={{ alignItems: "center", backgroundColor: myConstant.COLORS[i * 3 + j] }}
                            onClick={() => console.log("Clicked!")}
                        >
                            <Card.Img variant="top" src={culinary} style={{ height: "100px", width: "100px" }} />
                            <Card.Body>
                                <Card.Text style={{ color: "white" }}>{Object.keys(userData.Attributes)[i * 3 + j]}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            }
            rows.push(
                <Row>
                    {cols}
                </Row>
            );
        }
        return rows;
    }, [userData.Attributes]);


    return (
        <>
            {presetTypesRows}
        </>
    );
};
