import React, { useState } from "react";
import Cards from "../../components/BlockedCard";
import "./index.css";
import SearchBar from "../../components/searchBar/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscBellDot } from "react-icons/vsc";
import BlockedData from "../../components/blockeddata/index";

const Users = () => {
  const [showCustomerDetail, setShowCustomerDetail] = useState(false);

  return (
    <div style={{ width: "100%" }} className="users">
      <Row>
        <Col
          style={{ backgroundColor: "#161617", borderRadius: "16px" }}
          sm={9}
        >
          <div className="searchBar">
            <div className="search">
              <SearchBar />
            </div>
            <div>
              <VscBellDot
                style={{
                  color: "#5f5f5f",
                  fontSize: "30px",
                  margin: "13px 30px 0px 0px",
                }}
              />
            </div>
          </div>
          <div className="userPage m-3">
            <div style={{padding: '10px 0 0 30px'}}>
              <h5>Blocked Users</h5>
            </div>
            <div className="cards">
              {/* <Row> */}
              {/* <Col xs={3} >
            <Cards />
          </Col>
          <Col xs={3} >
            <Cards />
          </Col>
          <Col xs={3} >
            <Cards />
          </Col>
          <Col xs={3} >
            <Cards />
          </Col> */}
              {/* </Row> */}

              <div>
                <div
                  onClick={(e) => {
                    setShowCustomerDetail(true);
                    console.log("customerDetail => ", showCustomerDetail);
                  }}
                >
                  <Row>
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
                    <Col xs={3}>
                      <Cards />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{paddingLeft: '30px'}}>
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
                <BlockedData />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
