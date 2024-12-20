import React from 'react';
import styled from "../Navbar/Navbar.scss"
import { Link } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"
import {FiUser} from "react-icons/fi"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
        <div className="top-left">
         <a href=""> <p>WOMAN</p> <span>I</span></a>
         <a href=""><h5>MAN</h5></a>
     </div>
     <div className="left">
      <div className="first">
        <a href="">NEW</a>
      </div>
      <div className="second">
        <a href="">CLOTHING</a>
        <br />
        <a href="">DENIM COLLECTION</a>
        <br />
        <a href="">SHOES</a>
        <br />
        <a href="">ACCESSORIES</a>
        <br />
        <a href="">BAGS/BACKPACKS</a>
      </div>
      <div className="third">
        <a href="">BASICS</a>
      </div>
     </div>
        </div>
        <div className="col-xl-4">
         <div className="name">
         <h1>PULL&BEAR</h1>
         </div>
         <div className="new">
         <p>NEW IN</p>
         <div className="newbtn">
         <button>SHOP</button>
         </div>
         </div>
        </div>
        <div className="col-xl-3">
        <div className="inputleft">
        <form action="">
        <input type="text" placeholder='Search by type'/> 
        <button>SEARCH</button>
        </form>
        </div>
        <div className="search-results">
          <div className="search-result">
          <img src="https://static.pullandbear.net/assets/public/2bea/b2c2/c64a4fe5aa23/05cfff70bc00/07590554501-D2/07590554501-D2.jpg?ts=1732014953087&w=603&f=auto" alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
