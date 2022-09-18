import React from 'react'
import Slider from "react-slick";
import network from '../Assests/Images/network.png'
import ava1 from '../Assests/Images/muzamiliqbal.jpg'
import ava2 from '../Assests/Images/Ramzan.jpg'
import ava3 from '../Assests/Images/mudasir.jpg'
import ava4 from '../Assests/Images/waqas.jpg'
import '../Styles/Testimonials.css'
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='container fluid' style={{paddingBottom:'100px'}}>
      <h6 style={{color:'#E01A1A',paddingBottom:'30px'}}>Testimonials</h6>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6' style={{paddingBottom:'100px'}}>
              <h5>
                What our <span>customers</span> are saying
              </h5>
              <p style={{paddingBottom:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus, praesentium dicta distinctio animi nemo fugit consequatur nobis nostrum placeat error nihil incidunt quaerat aspernatur dolorem veniam sunt at culpa?</p>
               <h2 style={{color:'#E01A1A',paddingBottom:'10px'}}>Our Members</h2>
        <Slider {...settings}>
          <div className='d-flex align-items-center' >
          <img  src={ava1} style={{width:'100%',height:'400px'}} alt='person1'/>
          <h4 style={{fontSize:'16px'}}>Muzamil Iqbal</h4>
          </div>
          <div className='d-flex align-items-center'>
          <img src={ava2}  style={{width:'100%',height:'400px'}} alt='person2'/>
          <h4 style={{fontSize:'16px'}}>Ramzan Bhati</h4>
          </div>
          <div className='d-flex align-items-center'>
          <img  src={ava3}  style={{width:'100%',height:'400px'}} alt='person3'/>
          <h4 style={{fontSize:'16px'}}>Mudasir Chudary</h4>
          </div>
          <div className='d-flex align-items-center'>
          <img  src={ava4}  style={{width:'100%',height:'400px',opacity:1.0}} alt='person4'/>
          <h4 style={{fontSize:'16px'}}>Waqas Chandia</h4>
          </div>
        </Slider>
            </div>
            <div className='col-lg-6 col-md-6'>
                <img src={network} alt='Network'/>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials