import React from 'react'
import '../Styles/Header.css'
import hero from '../Assests/Images/hero.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='container ' style={{alignItems:'center'}}>
      <div className='row'>
        <div className='col-lg-6 col-md-6' style={{paddingTop:'100px',textAlign:'center'}}>
           <h4>Easy way to make an order</h4>
           <h1>Hungery?<span> Just wait<br/> food at <span style={{color:'#E01A1A'}}>your door</span></span></h1>
          <div className='d-flex  text-center align-items-center justify-content-center ' style={{paddingTop:'30px'}}>
            <button className='button1'>Order Now</button>
            <button className='button2'><NavLink style={{textDecoration:'none'}} to='/foods'>See All Foods</NavLink></button>
          </div>
          <div className='d-flex  text-center align-items-center justify-content-center' style={{paddingTop:'50px'}}>
          <i className="fa-solid fa-lock"></i>
          <h6 >No chipping charge</h6>
          <i className="fa-solid fa-passport"></i>
          <h6>100 % secure checkout</h6>
          </div>
        </div>
        <div className='col-lg-6 col-md-6' style={{paddingTop:'50px'}}>
          <img src={hero} alt='hero'/>
            </div>
      </div>
    </div>
  )
}
export default Header
