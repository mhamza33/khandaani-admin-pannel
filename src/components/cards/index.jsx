import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="cardMain">
        {/* <img className="menuIcon" src="./assets/icons/menu.png" alt="Sorry!" /> */}
        <div className="cardData">
          <div className="imgContainer">
            <img
              className="person"
              src="./assets/images/person.png"
              alt="Sorry!"
            />
          </div>
          <div className="mainData">
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
