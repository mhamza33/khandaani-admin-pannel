import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas style={{width: '18vw', margin: '16px 16px 16px 0', borderRadius: '16px', background: '#161617'}} className="text-light"  placement='end' show='true' backdrop={false} scroll={true}>
        <Offcanvas.Header>
          <Offcanvas.Title>Super Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;