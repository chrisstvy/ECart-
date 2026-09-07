import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-body-tertiary text-body border-top border-2 border-dark pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">

          {/* Brand & Mission Column */}
          <div className="col-lg-4 col-md-6">
            <a className="d-inline-flex align-items-center mb-3 text-decoration-none text-body" href="#top">
              <span className="fs-4 fw-bold text-primary">
                E<span className="text-dark">CART</span>
              </span>
            </a>
            <p className="small text-muted mb-3">
              Your one-stop shop for high-quality fashion, electronics, and lifestyle essentials delivered fast to your doorstep.
            </p>
            <span className="badge bg-primary text-dark fw-bold px-3 py-2 border border-2 border-dark">
              Fast Shipping Worldwide
            </span>
          </div>

          {/* Shop Categories */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 border-bottom border-2 border-primary pb-1 d-inline-block">
              Shop Categories
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#electronics" className="text-decoration-none text-body">Electronics</a></li>
              <li className="mb-2"><a href="#fashion" className="text-decoration-none text-body">Fashion & Apparel</a></li>
              <li className="mb-2"><a href="#home" className="text-decoration-none text-body">Home & Living</a></li>
              <li className="mb-2"><a href="#sales" className="text-decoration-none text-body">Deals & Offers</a></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 border-bottom border-2 border-primary pb-1 d-inline-block">
              Customer Support
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#help" className="text-decoration-none text-body">Help Center</a></li>
              <li className="mb-2"><a href="#tracking" className="text-decoration-none text-body">Track Your Order</a></li>
              <li className="mb-2"><a href="#returns" className="text-decoration-none text-body">Returns & Refunds</a></li>
              <li className="mb-2"><a href="#contact" className="text-decoration-none text-body">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 border-bottom border-2 border-primary pb-1 d-inline-block">
              Get 15% Off
            </h5>
            <p className="small text-muted">
              Sign up for our newsletter to receive exclusive discounts, flash sale alerts, and new arrival updates.
            </p>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="email"
                className="form-control border-2 border-dark"
                placeholder="Enter email for coupon"
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary fw-bold text-dark border-2 border-dark" type="submit">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <hr className="my-4 border-2 opacity-50 border-dark" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
          <p className="mb-2 mb-sm-0">&copy; 2026 ECART Shopping Network. All rights reserved.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item"><a href="#privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
            <li className="list-inline-item ms-3"><a href="#terms" className="text-muted text-decoration-none">Terms of Sale</a></li>
            <li className="list-inline-item ms-3"><a href="#cookies" className="text-muted text-decoration-none">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}