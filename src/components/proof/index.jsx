import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './proof.css'

const Proof = () => {
  return (
    <div className="proof">
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <h5>Passport: </h5>
            </Col>
            <Col xs={6}>
              <div className="imageSection">
                <h5>Image</h5>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <h5>License: </h5>
            </Col>
            <Col xs={6}>
              <div className="imageSection">
                <h5>Image</h5>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <h5>Education: </h5>
            </Col>
            <Col xs={6}>
              <div className="imageSection">
                <h5>Image</h5>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <h5>Employee: </h5>
            </Col>
            <Col xs={6}>
              <div className="imageSection">
                <h5>Image</h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Proof;
