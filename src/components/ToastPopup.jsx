import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ToastPopup({ subject, sub = "now", message }) {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <Row>
      <Col md={6} className="mb-2">
        {/* <Button onClick={toggleShow} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button> */}
        <Toast show={show} onClose={toggleShow}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{subject}</strong>
            <small>{sub}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastPopup;