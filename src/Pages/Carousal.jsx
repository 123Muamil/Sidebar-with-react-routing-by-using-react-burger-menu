import React from 'react'
import banner from '../Assests/Images/banner.jpg'
import banner1 from '../Assests/Images/banner1.jpg'
//import banner2 from '../Assests/Images/banner2.jpg'
import banner3 from '../Assests/Images/banner3.jpg'
import '../Styles/Carousal.css'
const Carousal = () => {
  return (
    <div style={{paddingBottom:'30px'}}>
    <div className='image'>
    <div className='container fluid' >
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  style={{width:'100%',height:'500px'}} src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{width:'100%',height:'500px'}} src={banner} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{width:'100%',height:'500px'}} src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    </div>
  )
}

export default Carousal
