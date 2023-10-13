import React from "react";
import "./data.css";
import { MdVerified } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsCheck2Circle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Data = () => {
  return (
    <div className="customermemberdata">
      <div className="customerImage">
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
      </div>

      <div className="mainDatasection">
        <div className="customerMainMemberData">
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
              <p style={{ fontSize: "10px", fontWeight: "600" }}>Email</p>
            </Col>
            <Col xs={6} md={6}>
              <p style={{ fontSize: "10px" }}>jw00@gmail.com</p>
            </Col>
          </Row>
          <hr sttyle={{ margin: "0px", padding: "0px" }} />
          <Row style={{ margin: "0px" }}>
            <Col xs={6} md={12}>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                Basic Memberships
              </p>
            </Col>
          </Row>
          <Row style={{ margin: "0px" }}>
            <Col md={12}>
              <p style={{ fontSize: "10px", fontWeight: "600" }}>
                <BsCheck2Circle
                  style={{ fontSize: "14px", marginRight: "16px" }}
                />
                Lorem ipsum dolor sit amet
              </p>
            </Col>
            <Col md={12}>
              <p style={{ fontSize: "10px", fontWeight: "600" }}>
                <BsCheck2Circle
                  style={{ fontSize: "14px", marginRight: "16px" }}
                />
                Lorem ipsum dolor sit amet
              </p>
            </Col>
            <Col md={12}>
              <p style={{ fontSize: "10px", fontWeight: "600" }}>
                <BsCheck2Circle
                  style={{ fontSize: "14px", marginRight: "16px" }}
                />
                Lorem ipsum dolor sit amet
              </p>
            </Col>
            <Col md={12}>
              <p style={{ fontSize: "10px", fontWeight: "600" }}>
                <BsCheck2Circle
                  style={{ fontSize: "14px", marginRight: "16px" }}
                />
                Lorem ipsum dolor sit amet
              </p>
            </Col>
            <Col md={12}>
              <p style={{ fontSize: "10px", fontWeight: "600" }}>
                <BsCheck2Circle
                  style={{ fontSize: "14px", marginRight: "16px" }}
                />
                Lorem ipsum dolor sit amet
              </p>
            </Col>
            {/* <Col xs={6} md={6}>
              <p style={{ fontSize: "10px" }}>Pakistan</p>
            </Col> */}
          </Row>
        </div>
      </div>
      <div className="dataFooter">
        {/* <div
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
                textDecoration: "underline",
                fontSize: "8px",
                margin: "0px",
              }}
            >
              Other documents
            </p>
          </div> */}
        <hr />
        <Row style={{ margin: "0px" }}>
          <Col md={12}>
            <p>Change Membership</p>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
            xs={6}
            md={12}
          >
            <Dropdown data-bs-theme="light">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="membershipDropdown"
                // style={{background: 'none', borderRadius: '8px', borderColor: '#4e4e4e'}}
              >
                Basic <RiArrowDropDownLine style={{ fontSize: "30px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">Basic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gold</Dropdown.Item>
                <Dropdown.Item href="#/action-4">VIP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                width: "150px",
              }}
              variant="dark"
            >
              Change
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
