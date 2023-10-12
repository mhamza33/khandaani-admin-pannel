import { useState } from "react";
import AdminData from "../../components/adminsdata/index";
import AdminCards from "../../components/adminCards/index";
import AdminForm from "../../components/adminForm/index";
import "./index.css";
import SearchBar from "../../components/searchBar/index";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { VscBellDot } from "react-icons/vsc";
const Users = () => {
  const [showForm, setShowForm] = useState(false);
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
          <div className="adminPage m-3">
            <div className="adminMainCard">
              <div style={{padding: '0px 0 0 30px'}}>
                <h5>Add Admin</h5>
              </div>
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

              <div
                style={{ display: !showForm ? "block" : "none",}}
                className="allAdmins"
              >
                <div>
                  <Row>
                    <Col
                      style={{
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                      xs={12}
                    >
                      <Button
                        onClick={(e) => setShowForm(true)}
                        style={{
                          borderRadius: "50px",
                          background: "black",
                          padding: "14px 40px",
                          border: "none",
                        }}
                        variant="dark"
                      >
                        Add Admin
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0px",
                      height: '100%',
                      padding: "0px",
                    }}
                  >
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                    <Col
                      onClick={(e) => {
                        setShowCustomerDetail(true);
                        console.log("customerDetail => ", showCustomerDetail);
                      }}
                      style={{ margin: "0px", padding: "0px" }}
                      xs={6}
                      md={4}
                    >
                      <AdminCards />
                    </Col>
                  </Row>
                </div>
              </div>
              <div
                style={{
                  display: !showForm ? "none" : "block",
                  width: "100%",
                  marginTop: "0px",
                  height: '100%',
                  backgroundColor: 'wheat'
                }}
              >
                <AdminForm />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    onClick={(e) => setShowForm(false)}
                    style={{
                      borderRadius: "50px",
                      background: "black",
                      padding: "14px 40px",
                      border: "none",
                    }}
                    variant="dark"
                  >
                    Create Admin
                  </Button>
                </div>
              </div>
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
                <AdminData />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
