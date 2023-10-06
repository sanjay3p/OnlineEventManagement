import React from 'react'
import EE from './assets/EE.png'
import './Header.css'
import { Outlet, Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
    <div className='bg-black'>
    <div className="container bg-black con">
      <div className="d-flex flex-wrap align-items-center justify-content-centerjustify-content-lg-start">
        <div className="justify-content-center">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-whitetext-decoration-none">
          <img src={EE} alt="img" className="Img"/>
        </a>
       </div>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary text-light">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Create Event</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Browse Events</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <div className="text-end">
           <Link to="/Login" className="btn btn-outline-light">Login/Register</Link>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Header
