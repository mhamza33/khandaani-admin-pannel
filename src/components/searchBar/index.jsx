import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchbar.css";

function BasicExample() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="searchbar">
          <div className="searchIcon">
            <img className="icon" src="./assets/icons/search.png" />
          </div>
          <div className="inputbar">
            <input className="inputbar" type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle className="filterDropdown" id="dropdown-autoclose-true">
              <img className="filterIcon" src="./assets/icons/filter.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Active</Dropdown.Item>
              <Dropdown.Item href="#">Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
