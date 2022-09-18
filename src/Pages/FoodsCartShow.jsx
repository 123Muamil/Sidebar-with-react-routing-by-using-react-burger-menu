import React from 'react'
import category1 from '../Assests/Images/category1.png'
import category2 from '../Assests/Images/category2.png'
import category3 from '../Assests/Images/category3.png'
import category4 from '../Assests/Images/category4.png'
import '../Styles/FoodsCartShow.css'
const FoodsCartShow = () => {
  return (
    <div className='container' style={{paddingTop:'80px'}}>
      <div className='row '>
        <div className='col-lg-3 col-md-6'>
          <div className="card product_card" >
            <div className="card-body text-center align-items-center">
              <img src={category1} className="card-img-top" alt="Fast Food" />
              <h5 className="card-title" >Fastfood</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className="card product_card " >
            <div className="card-body text-center align-items-center">
              <img src={category2} className="card-img-top" alt="Pizza" />
              <h5 className="card-title" >Pizza</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className="card product_card " >
            <div className="card-body text-center align-items-center">
              <img src={category3} className="card-img-top" alt="Asian Food" />
              <h5 className="card-title" >Asian Food</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 '>
          <div className="card product_card " >
            <div className="card-body text-center align-items-center">
              <img src={category4} className="card-img-top" alt="Row Meat" />
              <h5 className="card-title" >Row Meat</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FoodsCartShow
