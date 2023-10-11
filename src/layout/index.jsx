import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserData from "../components/userdata/index";
import SideBar from "../components/sidebar";
import Users from "../pages/dashboard/users";
import UserVerifications from "../pages/dashboard/usersVerifications";
import AddAdmin from "../pages/dashboard/addAdmin";
import UserBlocked from "../pages/dashboard/blocked";
import Login from "../pages/auth/login";
import UserMemberships from "../pages/dashboard/memberships";
import UpdateRequests from "../pages/dashboard/updateRequests";
import "./index.css";
import { Link, NavLink, Route, Routes, Outlet } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  RiUserFollowLine,
  RiUserForbidLine,
  RiUserAddLine,
} from "react-icons/ri";
import { BiCommentAdd } from "react-icons/bi";
import { MdCardMembership, MdLogout } from "react-icons/md";

function ResponsiveExample() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000000",
        padding: "16px",
        margin: "0px",
        boxSizing: "border-box",
      }}
      className="text-light"
    >
      <Row>
        <Col xs={6} md={2}>
          <div
            style={{
              height: "96vh",
              background: "#161617",
              borderRadius: "16px",
              overFlow: "hidden",
            }}
          >
            <div>
              <img
                style={{ margin: "16px 0 0 16px" }}
                src="./assets/images/Khandaani.png"
                alt="Sorry!"
              />
            </div>
            <div class="mainSidebar">
              <div style={{ marginTop: "16px" }}>
                <ul className="sidebarMenu">
                  <li>
                    <NavLink className="menu" to="allusers">
                      <HiOutlineUserGroup
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/users.png" /> */}
                      <p>Users</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="menu" to="user-verifications">
                      <RiUserFollowLine
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img
                        className="icons"
                        src="./assets/icons/userverifications.png"
                      /> */}
                      <p>Users Verifications</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="menu" to="user-memberships">
                      <MdCardMembership
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/members.png" /> */}
                      <p>Users Memberships</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="menu" to="update-requests">
                      <BiCommentAdd
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/update.png" /> */}
                      <p>Update Requests</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="menu" to="user-blocked">
                      <RiUserForbidLine
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/blocked.png" /> */}
                      <p>Blocked Users</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="menu" to="add-admin">
                      <RiUserAddLine
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/add.png" /> */}
                      <p>Add Admin</p>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="logout">
                  <li>
                    <NavLink className="logoutBtn" to="/">
                      <MdLogout
                        style={{
                          fontSize: "19px",
                          transform: "rotate(180deg)",
                        }}
                      />
                      {/* <img className="icons" src="./assets/icons/logout.png" /> */}
                      <p>Logout</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={8}>
          <div
            style={{
              height: "96vh",
              backgroundColor: "#161617",
              borderRadius: "16px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {/* <h1>User Page</h1> */}
            <Outlet />
            {/* <Users /> */}
            {/* <Route path="/user" element={<Users />}> */}

            {/* <Users /> */}
          </div>
        </Col>
        <Col xs={6} md={2}>
          <div
            style={{
              height: "96vh",
              background: "#161617",
              borderRadius: "16px",
            }}
          >
            <div className="superAdmin">
              <img src="./assets/images/man.png" />
              <h4>Super Admin</h4>
            </div>
            <hr />
            <div className="userData">
              {/* <h5  >No data</h5> */}
              <div className="userDataStyle">
                <UserData />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ResponsiveExample;
