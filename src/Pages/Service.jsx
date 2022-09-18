import React from 'react'
import service1 from '../Assests/Images/service.png'
import service2 from '../Assests/Images/service2.png'
import service3 from '../Assests/Images/service3.png'
import '../Styles/Service.css'
const Service = () => {
  return (
    <div className='container'>
     <div className='row'>
        <div className='col-lg-4 col-md-6'>
        <div className="card service_card text-center align-items-center">
  <img src={service1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Quick Delivery</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-6'>
        <div className="card service_card text-center align-items-center">
  <img src={service2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Super Dine In</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-6'>
        <div className="card service_card text-center align-items-center">
  <img src={service3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Easy Pick Up</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
     </div>
    </div>
  )
}

export default Service
