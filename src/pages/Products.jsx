import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../components/Header';
import { Link } from 'react-router-dom'; // 1. Added Link import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';

function Products() {
  const dispatch = useDispatch();
  const { loading, allProducts, error } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="m-5">
        <div className="row pt-5">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center my-5">
              <Spinner animation="border" variant="primary" className="me-2" />
              <span className="fw-bold fs-5">Loading Products...</span>
            </div>
          ) : allProducts?.length > 0 ? (
            allProducts.map((product) => (
              <div className="col-md-3 mb-4" key={product?.id}>
                <Card className="h-100 border-2 border-dark shadow-sm" style={{ width: '18rem' }}>
                  
                  {/* 2. Wrapped Card.Img inside Link to navigate on click */}
                  <Link to={`/product/${product?.id}`}>
                    <Card.Img
                      variant="top"
                      src={product?.thumbnail}
                      alt={product?.title}
                      style={{ height: '180px', objectFit: 'cover', cursor: 'pointer' }}
                    />
                  </Link>

                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        
                        {/* 3. Wrapped Title inside Link */}
                        <Link to={`/product/${product?.id}`} className="text-decoration-none text-dark">
                          <Card.Title className="fw-bold fs-6 mb-0 text-truncate" title={product?.title}>
                            {product?.title}
                          </Card.Title>
                        </Link>

                        <span className="fw-bold text-primary">${product?.price}</span>
                      </div>
                      <Card.Text className="small text-muted mb-3">
                        {product?.description?.slice(0, 60)}...
                      </Card.Text>
                    </div>

                    {/* Action Buttons */}
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
            ))
          ) : (
            <div className="text-center my-5">
              <p className="fw-bold fs-4 text-danger">No Products Found!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;