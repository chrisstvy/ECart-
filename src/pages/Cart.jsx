import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus, faArrowLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="fw-bold mb-4 border-bottom border-2 border-primary pb-2 d-inline-block">
          Shopping Cart
        </h2>

        <div className="row g-4">
          
          {/* Left Column: Cart Items Table */}
          <div className="col-lg-8">
            <div className="table-responsive border border-2 border-dark rounded-3 shadow-sm mb-4">
              <table className="table align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th scope="col" className="py-3 ps-3">#</th>
                    <th scope="col" className="py-3">Product</th>
                    <th scope="col" className="py-3">Image</th>
                    <th scope="col" className="py-3 text-center" style={{ width: '140px' }}>Quantity</th>
                    <th scope="col" className="py-3">Price</th>
                    <th scope="col" className="py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="ps-3">1</th>
                    <td className="fw-bold">Thinkpad Laptop</td>
                    <td>
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJOxdJbkEbk4v48QN9MPjInWjLWYAL6Vi1n55_OT46LvcVyanohhy5aE&s=10" 
                        alt="Thinkpad Laptop" 
                        className="rounded border"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>
                      <div className="input-group input-group-sm">
                        <button className="btn btn-outline-dark border-2 fw-bold" type="button">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input 
                          type="text" 
                          className="form-control text-center border-2 border-dark fw-bold px-0" 
                          value={10} 
                          readOnly 
                        />
                        <button className="btn btn-outline-dark border-2 fw-bold" type="button">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="fw-bold text-primary">$98.00</td>
                    <td className="text-center">
                      <button className="btn btn-outline-danger btn-sm border-2" title="Remove item">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table Bottom Navigation */}
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-outline-danger border-2 fw-bold">
                <FontAwesomeIcon icon={faTrash} className="me-2" /> Empty Cart
              </button>
              <Link to={'/'} className="btn btn-outline-dark border-2 fw-bold text-decoration-none">
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Shop More
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="col-lg-4">
            <div className="card border-2 border-dark rounded-3 shadow-sm p-3">
              <h4 className="fw-bold mb-3 border-bottom border-2 border-primary pb-2">
                Order Summary
              </h4>
              
              <div className="d-flex justify-content-between align-items-center mb-3 fs-5">
                <span className="text-muted">Total Items:</span>
                <span className="badge bg-primary text-dark fw-bold fs-6 border border-dark">10</span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3 fs-4 fw-bold">
                <span>Total Amount:</span>
                <span className="text-primary">$980.00</span>
              </div>

              <hr className="border-2 border-dark my-3" />

              <button className="btn btn-primary text-dark border-2 border-dark fw-bold w-100 py-2 fs-5">
                <FontAwesomeIcon icon={faCreditCard} className="me-2" /> Checkout Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}