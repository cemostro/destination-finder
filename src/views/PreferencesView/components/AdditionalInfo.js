import React from "react";
import { Form } from "react-bootstrap";
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
    </div>
  );
};

export default AdditionalInfo;
