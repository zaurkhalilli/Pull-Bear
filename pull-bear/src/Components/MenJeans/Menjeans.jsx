import React from 'react'
import styled from "../MenJeans/Menjeans.scss"
const Menjeans = () => {
  return (
    <div className='jeans'>
      <div className="container">
        <div className="row g-5">
          
          <div className="col-xl-3">
          <div className="images">
          <a href=""> <img src="https://static.pullandbear.net/2/cms/assets/uploads/2X2Baggy_1.jpg?imwidth=300&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20230913021705" alt="" /></a>
          </div>
          </div>
          <div className="col-xl-3">
          <div className="images">
          <a href=""><img src="https://static.pullandbear.net/2/cms/assets/uploads/2X2Relaxed_1.jpg?imwidth=300&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20230913021705" alt="" /></a>
          </div>
          </div>
          <div className="col-xl-3">
          <div className="images">
          <a href=""><img src="https://static.pullandbear.net/2/cms/assets/uploads/2X2Slim_1.jpg?imwidth=300&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20230913021705" alt="" /></a>
          </div>
          </div>
          <div className="col-xl-3">
          <div className="images">
          <a href=""><img src="https://static.pullandbear.net/2/cms/assets/uploads/2X2Skinny_1.jpg?imwidth=300&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20230913021705" alt="" /></a>
          </div>
          </div>
        </div>
      </div>
           <div className="jeansfit">
            <a href="">
              <span>JEANS FIT GUIDE</span>
              <br />
              Where you hold the power to select from the most iconic jeans fits of the season. Your style, your choice. Explore our curated fits range.
            </a>
            <br />
            <button>SEE ALL</button>
           </div>
    </div>
  )
}

export default Menjeans
