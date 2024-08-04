import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/" style={{marginLeft: "88px"}}>
            <img src="media/images/logo.svg" style={{width:"22%"}} alt="Logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/signup">
                  Signup/Login
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/user">
                  User
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
          
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>

            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
