import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchbar.css";

function BasicExample({ dropdownMenu }) {
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
            <Dropdown.Toggle
              className="filterDropdown"
              id="dropdown-autoclose-true"
            >
              <img className="filterIcon" src="./assets/icons/filter.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdownMenu?.map((menu) => (
                <Dropdown.Item href="#">{menu}</Dropdown.Item>
              ))}
              {/* <Dropdown.Item href="#">Inactive</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
