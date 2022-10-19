import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../../../App.css";

const AdditionalInfo = ({ userData, setUserData }) => {
  return (
    <div>
      <Form>
        <Form.Check
          type="checkbox"
          id="custom-switch"
          label="Filter out the destinations over the  budget"
          onChange={(e) =>
            setUserData({ ...userData, isPriceImportant: e.target.checked })
          }
        />
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
