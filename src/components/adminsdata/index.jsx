import React from "react";
import "./data.css";
import { MdVerified } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Data = () => {
  return (
    <div className="admindata">
      <div className="mainAdminData">
        <div className="customerImage">
          <img src="./assets/images/person.png" alt="sorry!" />
        </div>
        <div style={{marginTop: '20px'}} className="mainDatasection">
          <div className="customerMainData">
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Name</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>Admin Name</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Email</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>admin123@gmail.com</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Password</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>123456789</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }} className="dataFooter">
        <Row style={{ margin: "0px" }}>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            xs={6}
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
              Delete
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
