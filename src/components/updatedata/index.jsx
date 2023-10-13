import React, { useState } from "react";
import "./data.css";
import { MdVerified } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsDot } from "react-icons/bs";

const Data = ({ changeScreens, hideButton }) => {
  return (
    <div className="customerupdatedata">
      <div className="customerImage">
        <p
          style={{
            margin: "5px 0 4px 20px",
            width: "100%",
            display: "flex",
            fontSize: "14px",
            justifyContent: "flex-start",
            // justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          Profile Update
        </p>
        <p
          style={{
            margin: "0px 30px 10px 0px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          <BsDot style={{ color: "#45D900", fontSize: "20px" }} />
          Active
        </p>

        <img src="./assets/images/person.png" alt="sorry!" />
        <p
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Verified &nbsp;
          <span>
            {" "}
            <MdVerified
              style={{ color: "rgb(40, 125, 252)", fontSize: "16px" }}
            />{" "}
          </span>{" "}
        </p>

        <div className="mainDatasection">
          <div className="customerMainUpdateData">
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
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Contact</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>XXXXXXX</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Gender</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>XXXXX</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>Work</p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>XXXXX</p>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px", fontWeight: "600" }}>
                  University
                </p>
              </Col>
              <Col xs={6} md={6}>
                <p style={{ fontSize: "10px" }}>XXXXX</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }} className="dataFooter">
        <div
          style={{
            width: "100%",
            margin: "0px",
            display: "flex",
            justifyContent: "flex-end",
            color: "rgb(40, 125, 252)",
          }}
        >
          <p
            style={{
              display: hideButton ? "none" : "block",
              textDecoration: "underline",
              fontSize: "8px",
              margin: "0px",
              cursor: "pointer",
            }}
            onClick={() => changeScreens()}
          >
            Other documents
          </p>
        </div>
        <hr />
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
                width: "80%",
              }}
              variant="dark"
            >
              Verify
            </Button>
          </Col>
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
                margin: "12px 0",
                width: "80%",
              }}
              variant="dark"
            >
              Close
            </Button>
          </Col>
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
                width: "80%",
              }}
              variant="dark"
            >
              Reject
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
