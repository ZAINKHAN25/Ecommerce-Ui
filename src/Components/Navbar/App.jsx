import React from 'react';
import './App.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-9" href="#">Dajee's Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item">
              <a className="nav-link" href="#">Sale</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Men's Clothes</a></li>
                <li><a className="dropdown-item" href="#">Womes's Clothes</a></li>
                <li><a className="dropdown-item" href="#">Kid's Clothes</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#">Contact</a>
                <i role='button' className="mx-3 fa-solid fa-cart-shopping"></i>
                <i role='button' className="mx-3 fa-solid fa-user"></i>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar