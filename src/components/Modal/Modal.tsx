import React, { useState } from 'react';
// bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  handleAddRental: any;
}

function CustomModal({ title, isOpen, handleClose, handleAddRental }: IProps) {
  const [numDays, setNumDays] = useState(1);

  const handleOnChange = ({ target }: any) => (setNumDays(target.value));

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product rental</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            Product: <strong>{title}</strong>
          </Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Days</Form.Label>
            <Form.Control
              min={1}
              type="number"
              value={numDays}
              placeholder="Enter days"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              Enter the number of days to rent
            </Form.Text>
          </Form.Group>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="light" onClick={() => handleAddRental(numDays)}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;