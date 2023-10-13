import React, { useState } from "react";
import Cards from "../../components/cards/index";
import "./index.css";
import SearchBar from "../../components/searchBar/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscBellDot } from "react-icons/vsc";
import UserData from "../../components/userdata/index";
import Proof from "../../components/proof/index";

const Users = () => {
  const [showCustomerDetail, setShowCustomerDetail] = useState(false);
  const [showOtherDocuments, setShowOtherDocuments] = useState(false);

  function handleDocuments() {
    setShowOtherDocuments(true);
  }

  const num = [1, 2, 3, 4];

  const filterMenu = ["Active", 'Inactive']

  return (
    <div style={{ width: "100%" }} className="users">
      <Row>
        <Col
          style={{ backgroundColor: "#161617", borderRadius: "16px" }}
          sm={9}
        >
          <div className="searchBar">
            <div className="search">
              <SearchBar dropdownMenu = {filterMenu} />
            </div>
            <div>
              <VscBellDot
                style={{
                  color: "#5f5f5f",
                  fontSize: "30px",
                  margin: "13px 30px 0px 0px",
                }}
              />
              {/* <img src="./assets/icons/bell.png" /> */}
            </div>
          </div>
          <div
            style={{ margin: "0px", padding: "0px" }}
            className="userPage m-3"
          >
            <div style={{ padding: "10px 0 0 30px" }}>
              <h5>Users</h5>
            </div>
            <div className="cards">
              {/* <Row>
            <Col xs={3}>
              <Cards />
            </Col>
            <Col xs={3}>
              <Cards />
            </Col>
            <Col xs={3}>
              <Cards />
            </Col>
            <Col xs={3}>
              <Cards />
            </Col>
          </Row> */}

              <div
                style={{
                  display: showOtherDocuments ? "none" : "block",
                  // padding: "20px",
                  // background: 'pink'
                  // boxSizing: "border-box",
                }}
                className="dashboardData"
              >
                <div>
                  <Row>
                    <Col xs={3}>
                      <div
                        onClick={(e) => {
                          setShowCustomerDetail(true);
                          console.log("customerDetail => ", showCustomerDetail);
                        }}
                      >
                        <Cards />
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div
                        onClick={(e) => {
                          setShowCustomerDetail(true);
                          console.log("customerDetail => ", showCustomerDetail);
                        }}
                      >
                        <Cards />
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div
                        onClick={(e) => {
                          setShowCustomerDetail(true);
                          console.log("customerDetail => ", showCustomerDetail);
                        }}
                      >
                        <Cards />
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div
                        onClick={(e) => {
                          setShowCustomerDetail(true);
                          console.log("customerDetail => ", showCustomerDetail);
                        }}
                      >
                        <Cards />
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div
                        onClick={(e) => {
                          setShowCustomerDetail(true);
                          console.log("customerDetail => ", showCustomerDetail);
                        }}
                      >
                        <Cards />
                      </div>
                    </Col>
                  </Row>
                  {/* <Row style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px",
                      padding: "0px",
                    }}>
                    {num?.map(() => (
                      <Col style={{margin: '0px', padding: '0px'}} xs={3}>
                        <Cards />
                      </Col>
                    ))}
                  </Row> */}
                </div>
              </div>
              <div
                style={{ display: showOtherDocuments ? "block" : "none" }}
                className="proofSection"
              >
                <Proof />
                <p>
                  These are the image proofs (documents) share by user and also
                  had passed the{" "}
                  <span
                    style={{
                      color: "#00A3FF",
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}
                  >
                    biometrical verification.
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                display: showOtherDocuments ? "none" : "block",
                paddingLeft: "30px",
              }}
            >
              <h6>Showing 12 users of 15</h6>
            </div>
          </div>
        </Col>

        <Col sm={3}>
          <div
            style={{
              height: "96vh",
              background: "#161617",
              // background: "wheat",
              borderRadius: "16px",
            }}
          >
            <div className="superAdmin">
              <img src="./assets/images/man.png" />
              <h4>Super Admin</h4>
            </div>
            <hr />
            <div className="userData">
              <div
                style={{ display: showCustomerDetail ? "none" : "flex" }}
                className="nodata"
              >
                <h5>No data</h5>
              </div>
              <div
                style={{ display: showCustomerDetail ? "block" : "none" }}
                className="userDataStyle"
              >
                <UserData
                  changeScreens={handleDocuments}
                  hideButton={showOtherDocuments}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
