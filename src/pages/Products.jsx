import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Products() {
  return (
    <>
      <Header />
      <div className='m-5'>
        <div className='row pt-5'>
          {/* Duplicate column accordingly */}
          <div className="col-md-3 mb-4">
  <Card className="h-100 border-2 border-dark shadow-sm" style={{ width: '18rem' }}>
    <Card.Img 
      variant="top" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJOxdJbkEbk4v48QN9MPjInWjLWYAL6Vi1n55_OT46LvcVyanohhy5aE&s=10" 
      alt="Thinkpad Laptop" 
      style={{ height: '180px', objectFit: 'cover' }} 
    />
    <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <Card.Title className="fw-bold fs-6 mb-0">Thinkpad Laptop</Card.Title>
          <span className="fw-bold text-primary">$98.00</span>
        </div>
        <Card.Text className="small text-muted mb-3">
          Reliable Lenovo Thinkpad equipped for smooth daily office tasks and multi-tasking.
        </Card.Text>
      </div>

      {/* Product Home Page Action Buttons */}
      <div className="d-flex justify-content-between gap-2">
        <Button variant="outline-dark" className="border-2 fw-bold btn-sm flex-fill" title="Add to Wishlist">
          <FontAwesomeIcon icon={faHeart} className="me-1" /> Wishlist
        </Button>
        <Button variant="primary" className="text-dark border-2 border-dark fw-bold btn-sm flex-fill" title="Add to Cart">
          <FontAwesomeIcon icon={faCartPlus} className="me-1" /> Cart
        </Button>
      </div>
    </Card.Body>
  </Card>
</div>
        </div>
      </div>
    </>
  )
}

export default Products;