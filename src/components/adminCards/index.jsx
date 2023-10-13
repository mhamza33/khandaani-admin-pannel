import React from "react";
import './card.css'

const AdminCards = ({changeSidebar}) => {
  return (
    <>
      <div onClick = {() => changeSidebar()} className="simpleCard">
        <div className="simpleData">
          <div className="img">
            <img src="./assets/images/admin.png" alt="sorry!" />
          </div>
          <div className="data">
            <div>
              <h5>Admin Name</h5>
            </div>
            <div>
              <p>Email: admin123@gmai.com</p>
            </div>
          </div>
        </div>
        {/* <div className="menuIcon">
            <img src="./assets/images/menu.png" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default AdminCards;
