import React from "react";
import Attribute from "./Attribute";
import * as myConstant from "../../../data/constantData";
import { Card, Button, Row, Col } from "react-bootstrap";
import culinary from "../../../images/culinary.png";

export const PresetTypesContainer = ({ userData, setUserData }) => {
    return (
        <Row>
            <Col>
                <Card className="mb-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mb-3">
                    <Card.Img variant="top" src={culinary} />
                    <Card.Body>
                        <Card.Title style={{ color: "black" }}>Culinary</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title style={{ color: "black" }}>Culinary</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
