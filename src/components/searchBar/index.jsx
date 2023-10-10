import Form from "react-bootstrap/Form";
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
          <img className="filterIcon" src="./assets/icons/filter.png" />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
