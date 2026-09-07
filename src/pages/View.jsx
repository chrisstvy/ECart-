import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export default function View() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          
          {/* Left Column: Product Image & Action Buttons */}
          <div className="col-lg-6 col-md-6">
            <div className="card border-2 border-dark rounded-3 overflow-hidden shadow-sm mb-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJOxdJbkEbk4v48QN9MPjInWjLWYAL6Vi1n55_OT46LvcVyanohhy5aE&s=10" 
                alt="Thinkpad Laptop" 
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-dark border-2 fw-bold w-50 py-2">
                <FontAwesomeIcon icon={faHeart} className="me-2" />Add to Wishlist
              </button>
              <button className="btn btn-primary text-dark border-2 border-dark fw-bold w-50 py-2">
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />Add to Cart
              </button>
            </div>
          </div>
  
          {/* Right Column: Product Details & Reviews */}
          <div className="col-lg-6 col-md-6">
            <div className="mb-3">
              <span className="badge bg-secondary text-dark fw-semibold me-2">Lenovo</span>
              <span className="badge bg-light text-dark border">Laptops & Computers</span>
            </div>
  
            <h1 className="display-6 fw-bold mb-2">Thinkpad Laptop</h1>
            <h2 className="text-primary fw-bold fs-2 mb-4">$98.00</h2>
  
            <div className="mb-4">
              <h5 className="fw-bold border-bottom pb-2">Description</h5>
              <p className="text-muted leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi minima neque eveniet itaque 
                numquam aspernatur ea magnam vero dolores unde cum maiores distinctio iure odio, veritatis 
                consequatur similique corporis possimus!
              </p>
            </div>
  
            {/* Customer Review Section */}
            <div className="bg-body-tertiary p-3 rounded border border-2">
              <h5 className="fw-bold mb-2">Client Reviews</h5>
              <div className="d-flex align-items-center mb-2">
                <span className="fw-bold fs-5 me-2">4.0</span>
                <div className="text-warning">
                  {/* Font Awesome Stars - Using React Components */}
                  <FontAwesomeIcon icon={faStarSolid} className="me-1" />
                  <FontAwesomeIcon icon={faStarSolid} className="me-1" />
                  <FontAwesomeIcon icon={faStarSolid} className="me-1" />
                  <FontAwesomeIcon icon={faStarSolid} className="me-1" />
                  <FontAwesomeIcon icon={faStarRegular} className="text-muted me-1" />
                </div>
              </div>
              <p className="small text-muted mb-0">
                "Great value for money, runs smoothly for daily office tasks."
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </>
  );
}