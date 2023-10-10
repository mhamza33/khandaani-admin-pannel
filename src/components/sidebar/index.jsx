import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function VerticalExample() {
  return (
    <Stack gap={3}>
      
      <div>
        <Dropdown.Menu className="bg-dark" style={{ width: "15vw", background: '#161617' }} show>
          <Dropdown.Item className="text-light" eventKey="1">Users</Dropdown.Item>
          <Dropdown.Item className="text-light" eventKey="2">Users Verifications</Dropdown.Item>
          <Dropdown.Item className="text-light" eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </Stack>
  );
}

export default VerticalExample;
