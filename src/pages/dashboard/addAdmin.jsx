import { useState } from "react";
// import Cards from "../../components/cards/index";
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

  return (
    <div className="users">
      <div className="searchBar">
        <div className="search">
          <SearchBar />
        </div>
        <div>
          <VscBellDot
            style={{ color: "#5f5f5f", fontSize: "30px", marginTop: "13px" }}
          />
        </div>
      </div>
      <div className="userPage m-5">
        <div className="cards">
          <div>
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
            style={{ display: !showForm ? "block" : "none" }}
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
                  justifyContent: "flex-start",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
                  <AdminCards />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
                  <AdminCards />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
                  <AdminCards />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
                  <AdminCards />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
                  <AdminCards />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} xs={6} md={4}>
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
        <div>
          <h6>Showing 12 users of 15</h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
