import React from "react";
import Cards from "../../components/cards/index";
import "./index.css";
import SearchBar from "../../components/searchBar/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Proof from "../../components/proof/index";

const Users = () => {
  return (
    <div className="users">
      <div className="searchBar">
        <div className="search">
          <SearchBar />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "./assets/icons/bell.png"} />
        </div>
      </div>
      <div className="userPage m-5">
        <div>
          <h5>User Verifications</h5>
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
            <Cards />
          </div>
        </div>
        <div>
          <h6>Showing 12 users of 15</h6>
        </div>
      </div>
      {/* <div className="proofSection">
        <Proof />
        <p>
          These are the image proofs (documents) share by user and also had
          passed the <span style={{color: '#00A3FF', fontStyle: 'italic', textDecoration: 'underline'}}>biometrical verification.</span>
        </p>
      </div> */}
    </div>
  );
};

export default Users;
