import React from 'react';
import styled from "../Navbar/Navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
        <div className="top-left">
     <a href=""> <p>WOMAN</p> <span>I</span> <h5>Man</h5></a>
     </div>
        </div>
        <div className="col-xl-4"></div>
        <div className="col-xl-4"></div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
