import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../../../App.css";

const AdditionalInfo = ({ userData, setUserData }) => {
  return (
    <div>
      <Form className="filter">
        <Form.Check
          className="filter"
          type="checkbox"
          id="custom-switch"
          label="Filter out the destinations over the  budget"
          onChange={(e) =>
            setUserData({ ...userData, isPriceImportant: e.target.checked })
          }
        ></Form.Check>
        <span className="tooltip-box">
          If you select the checkbox the over-budget destinations will be
          filtered out. if it is not selected, price would have an impact on the
          recommendations just like any other attribute.
        </span>
      </Form>
      <hr style={{ marginBottom: "1.2rem" }} />
      <Row>
        <Col style={{ justifyContent: "center" }}>
          <p
            style={{
              textAlign: "left",
              justifyContent: "center",
              lineHeight: "44px",
              margin: 0,
            }}
          >
            Maximum # of days:
          </p>
        </Col>
        <Col>
          <input
            type="number"
            className="stay-days"
            defaultValue={userData.Stay}
            onChange={(e) => setUserData({ ...userData, Stay: e.target.value })}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AdditionalInfo;
