import React from 'react';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function Wishlist() {
  return (
    <>
      <Header />
      <Container className="py-5">
        <h2 className="fw-bold mb-4 border-bottom border-2 border-primary pb-2 d-inline-block">
          My Wishlist
        </h2>

        <Row className="g-4">
          {/* Wishlist Card Item */}
          <Col lg={3} md={4} sm={6}>
            <Card className="h-100 border-2 border-dark shadow-sm overflow-hidden">
              <Card.Img 
                variant="top" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJOxdJbkEbk4v48QN9MPjInWjLWYAL6Vi1n55_OT46LvcVyanohhy5aE&s=10" 
                alt="Thinkpad Laptop" 
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="fw-bold fs-6 mb-0">Thinkpad Laptop</Card.Title>
                    <span className="fw-bold text-primary">$98.00</span>
                  </div>
                  <Card.Text className="small text-muted mb-3">
                    High-performance laptop suitable for everyday tasks and work.
                  </Card.Text>
                </div>

                {/* Card Action Buttons */}
                <div className="d-flex justify-content-between gap-2 mt-auto">
                  <Button 
                    variant="outline-danger" 
                    className="border-2 fw-bold btn-sm flex-grow-1"
                    title="Remove item"
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-1" /> Delete
                  </Button>
                  <Button 
                    variant="primary" 
                    className="text-dark border-2 border-dark fw-bold btn-sm flex-grow-1"
                    title="Add to Cart"
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="me-1" /> Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}