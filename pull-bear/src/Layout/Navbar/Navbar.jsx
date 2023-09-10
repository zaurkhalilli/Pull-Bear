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
        <BiSearch color='white' size={20}/> 
        <input type="text" placeholder='SEARCH'/> 
        <a href=""><FiUser color='white' size={20}/></a>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
