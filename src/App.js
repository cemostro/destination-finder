import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Map from "./components/Map";
import CustomizationContainer from "./components/Preferences";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <CustomizationContainer></CustomizationContainer>
        </Col>
        <Col xs={6}>
          <Map />
        </Col>
        <Col>
          <CustomizationContainer></CustomizationContainer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
