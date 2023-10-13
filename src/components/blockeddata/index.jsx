import React from "react";
import "./data.css";
import { MdVerified } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Data = () => {
  return (
    <div className="blockedCustomerdata">
      <div className="blockedCustomerImage">
        <p
          style={{
            margin: "5px 0 10px 20px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            // justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          Basic Memberships
        </p>
        <img src="./assets/images/person.png" alt="sorry!" />

        <div style={{marginTop: '10px'}} className="blockedMainDatasection">
          <div className="blockedCustomerMainData">
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Name</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>James Walter</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>ID</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>0000 0000 0000</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Contact</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>+00 123 456 789</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Email</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>jw00@gmail.com</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Religion</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Non-Muslim</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Country</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Pakistan</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Hometown</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>City</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Study</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>PhD</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Job Title</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Professor</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Workplace</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Company Name</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>DOB</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>1 Sept, 2000</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Gender</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Male</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Height</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>5' 4" FT</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="blockedDataFooter">
        <hr />
        <Row style={{ margin: "0px", height: "70%" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            // xs={6}
            md={12}
          >
            <Button
              style={{
                borderRadius: "50px",
                background: "black",
                border: "none",
                padding: "10px 0",
                width: "150px",
              }}
              variant="dark"
            >
              Unblock
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
