import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';

function Products() {
  return (
    <>
      <Header />
      <div className='m-5'>
        <div className='row pt-5'>
          {/* Duplicate column accordingly */}
          <div className='col-md-3 mb-2'>
            <Card style={{ width: '18rem' }}>
              <Card.Img 
                variant="top" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJOxdJbkEbk4v48QN9MPjInWjLWYAL6Vi1n55_OT46LvcVyanohhy5aE&s=10" 
                alt="Product" 
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;