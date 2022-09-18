import React from 'react'
import location from '../Assests/Images/location.png'
const Location = () => {
  return (
    <div className='container' style={{paddingBottom:'100px'}}>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
        <img src={location} alt='location'/>
        </div>
        <div className='col-lg-6 col-md-6'>
        <h1>Why <span>Tasty Treat</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis iure ex ut excepturi perferendis nulla modi consequuntur repudiandae sequi autem veritatis assumenda delectus expedita atque, quibusdam sint ipsam iusto.</p>
        <div className='d-flex align-items-center'>
        <i className="fa-solid fa-circle-check"></i>
        <h4>Fresh and tasty foods</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, error?</p>
        <div className='d-flex align-items-center'>
        <i className="fa-solid fa-circle-check"></i>
        <h4>Quality support</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, error?</p>
        <div className='d-flex align-items-center'>
        <i className="fa-solid fa-circle-check"></i>
        <h4>Order from any location</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, error?</p>
        </div>
      </div>
    </div>
  )
}
export default Location
