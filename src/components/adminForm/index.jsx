import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./adminform.css";
import Form from "react-bootstrap/Form";
import FileUploadButton from "../uploadFile/index";

const AdminForm = () => {
  const handleFileSelect = (file) => {
    // Handle the selected file here
    console.log("Selected file:", file);
  };

  return (
    <div className="adminForm">
      <Row className="inputrow">
        <Col className="textcol" md={3}>
          <h5>Full Name:</h5>
        </Col>
        <Col style={{width: '355px'}} md={5}>
          <input className="commoninput" type="text" placeholder="Full name" />
        </Col>
      </Row>
      <Row className="inputrow">
        <Col className="textcol" xs={6} md={3}>
          <h5>Email:</h5>
        </Col>
        <Col style={{width: '355px'}} xs={6} md={5}>
          <input type="email" className="commoninput" placeholder="Email" />
        </Col>
      </Row>
      <Row className="inputrow">
        <Col className="textcol" xs={6} md={3}>
          <h5>Password:</h5>
        </Col>
        <Col style={{width: '355px'}} xs={6} md={5}>
          <input
            type="password"
            className="commoninput"
            placeholder="Password"
          />
        </Col>
      </Row>
      <Row className="inputrow">
        <Col className="textcol" xs={6} md={3}>
          <h5>Image:</h5>
        </Col>
        <Col style={{width: '450px'}} class="inputWrapper" xs={6} md={5}>
          <FileUploadButton onFileSelect={handleFileSelect} />
          {/* <Form.Group style={{position: 'absolute', }} controlId="formFile" className="mb-3">
            <Form.Label style={{background: '#161617', color: 'white', width: '80%', height: '150px', border: '2px solid #4e4e4e', borderRadius: '8px'}}>Upload</Form.Label>
            <Form.Control style={{background: '#161617', color: 'white', width: '80%', position: 'relative', top: '0px'}} type="file" />
          </Form.Group> */}
          {/* <form action="/action_page.php"> */}
          {/* <label for="myfile">Upload</label>
            <input class="fileInput" type="file" id="myfile" name="myfile" /> */}
          {/* </form> */}
          {/* <label for="myfile">Upload</label>
          <input class="fileInput" type="file" id="myfile" name="myfile" /> */}
        </Col>
      </Row>
    </div>
  );
};

export default AdminForm;
