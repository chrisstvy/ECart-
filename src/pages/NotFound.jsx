import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-body-tertiary py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            
            {/* Visual Icon Illustration */}
            <div className="position-relative d-inline-block mb-4">
              <span className="display-1 fw-black text-primary opacity-25" style={{ fontSize: '10rem', lineHeight: '1' }}>
                404
              </span>
              <div className="position-absolute top-50 start-50 translate-middle">
                <FontAwesomeIcon icon={faCartShopping} className="text-dark" style={{ fontSize: '4.5rem' }} />
              </div>
            </div>

            {/* Error Message Header */}
            <h1 className="fw-bold fs-1 mb-2">Page Not Found</h1>
            <p className="text-muted leading-relaxed mb-4 px-md-4">
              Oops! The page or item you are looking for seems to have been removed, renamed, or is temporarily unavailable in our store.
            </p>

            {/* Navigation Buttons */}
            <div className="d-flex flex-sm-row flex-column justify-content-center gap-3">
              <Link to="/" className="btn btn-primary text-dark border-2 border-dark fw-bold px-4 py-2 fs-6">
                <FontAwesomeIcon icon={faHouse} className="me-2" /> Back to Home
              </Link>
              <button onClick={() => window.history.back()} className="btn btn-outline-dark border-2 fw-bold px-4 py-2 fs-6">
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Go Back
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}