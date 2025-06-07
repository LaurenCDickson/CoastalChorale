//import React from "react";
import logo from "./assets/logo.png"; // Adjust this path based on your file structure

//175,202,238

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavCentered"
            aria-controls="navbarNavCentered"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavCentered"
          >
            {/* Add align-items-center here */}
            <ul className="navbar-nav w-100 justify-content-center custom-navbar-items align-items-center">
              {/* Left group */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>

              {/* Logo in the center */}
              <li className="nav-item mx-5">
                <a className="navbar-brand" href="#">
                  <img
                    src={logo}
                    alt="Logo"
                    height="80" // Example: increased logo height for demonstration
                  />
                </a>
              </li>

              {/* Right group */}
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Recordings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Photos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
