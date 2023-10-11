import React from "react";
import "./auth.css";
import Button from "react-bootstrap/Button";
import { BiEnvelope } from "react-icons/bi";
import { VscUnlock } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../../Khandaani.png";

const Login = () => {
  return (
    <div className="loginPage">
      {/* <h1 style={{background: 'orange'}}>Login</h1>  */}

      <div className="logoSection">
        <img src={logo} alt="sorry!" />
      </div>
      <div className="loginBox">
        <div className="loginSection">
          <div className="loginText text-light">
            <h4>Administration Login</h4>
            <div className="emailfield">
              <BiEnvelope className="loginIcon" />
              <input className="loginEmail" type="email" placeholder="Email" />
            </div>
            <div className="passwordfield">
              <VscUnlock className="passwordIcon" />
              <input
                className="loginPassword"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <Button className="loginBtn" variant="dark">
                <NavLink className="loginBtnLink" to="/user/allusers">
                  Login
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
