import React from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faTruckFast} className="me-2 text-primary" />
          ECART
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="text-danger me-1" />
              Wishlist <span className="badge bg-dark rounded-pill ms-1">0</span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              Cart <span className="badge bg-dark rounded-pill ms-1">0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header