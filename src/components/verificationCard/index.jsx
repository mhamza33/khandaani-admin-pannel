import React, { useState, useEffect } from "react";
import "./cards.css";
import { useParams } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";

const Cards = ({membership}) => {
  const { id } = useParams();

  const [cardData, setCardData] = React.useState(null);

  useEffect(() => {
    if (id === "/user/allusers") {
      setCardData({ text: "This is a red card." });
      console.log("card Data => ", cardData?.text);
    } else if (id === "user-verifications") {
      setCardData({ text: "This is a blue card." });
    }
  }, [id]);

  return (
    <>
      <div className="verifiedCardMain">
        {/* <img className="menuIcon" src="./assets/icons/menu.png" alt="Sorry!" /> */}
        <div className="cardData">
          <div style={{ justifyContent: "space-between", alignItems: "center" }} className="kababMenu">
            <div>
              <p style={{ marginTop: "10px" }}>{membership}</p>
            </div>
            <div>
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle
                  className="kababDropdown"
                  style={{marginTop: '-4px'}}
                  id="dropdown-autoclose-true"
                >
                  <CiMenuKebab style={{ color: "white", fontSize: "20px" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Verify</Dropdown.Item>
                  <Dropdown.Item href="#">Reject</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="imgContainer">
            <div className="imageBox">
              <img
                className="person"
                src="./assets/images/person.png"
                alt="Sorry!"
              />
            </div>
          </div>
          <div className="mainData">
            <div>
              <p>
                James Walter{" "}
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "./assets/icons/verified.png"}
                  />
                </span>
              </p>
            </div>
            <div>
              <p>ID: 0000 0000 0000</p>
            </div>
            <div>
              <p>Contact: +00 123 456 789</p>
            </div>
            <div>
              <p>Email: jw00@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="cardData">
          <div className="imgContainer">
            <img
              className="person"
              src="./assets/images/person.png"
              alt="Sorry!"
            />
          </div>
          <div>
            <p>
              James Walter{" "}
              <span>
                <img src="./assets/icons/verified.png" />
              </span>
            </p>
          </div>
          <div>
            <p>ID: 0000 0000 0000</p>
          </div>
          <div>
            <p>Contact: +00 123 456 789</p>
          </div>
          <div>
            <p>Email: jw00@gmail.com</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Cards;
