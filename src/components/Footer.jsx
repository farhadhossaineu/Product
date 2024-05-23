import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h5>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Become an Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Product FAQ
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Product Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Our Forums
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Manage Account
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Company Info
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Product Alerts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p className="text-muted">
              Copyright © 2024 All rights reserved by Eyeglass
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
