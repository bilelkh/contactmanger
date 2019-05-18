import React from "react";
import propTypes from "prop-types";

import { Link } from "react-router-dom";
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 p-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-uppercase">
               <i className="fas fa-home  mr-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-uppercase">
              <i className="fas fa-save mr-1"></i> Add CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-uppercase">
              <i className="fas fa-question  mr-1"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My contact App"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;
