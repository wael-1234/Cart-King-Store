import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
            KING SHOP
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Contact">
                 Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/Login" className="btn btn-outline-dark me-2">
              <i class="fa fa-sign-in me-2" aria-hidden="true"></i>
                Login</NavLink>
              <NavLink to="/Register" className="btn btn-outline-dark me-2">
              <i class="fa fa-user-plus me-2" aria-hidden="true"></i>
                Register</NavLink>
              <NavLink to="/Cart" className="btn btn-outline-dark">
              <i class="fa fa-cart-arrow-down me-2" aria-hidden="true"></i>
                Cart({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
