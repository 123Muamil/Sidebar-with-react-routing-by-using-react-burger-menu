import React, { useContext, useState } from 'react'
import { ProductContext } from '../App'
import { NavLink } from 'react-router-dom'
import { addToCart } from '../Reducers/CartReducer'
import { CartContext } from '../Reducers/CartProvider'
const HotPizza = () => {
  //Updating State Component
  //const Add_to_Cart=useContext(AddtoCartContext)
    const Pizza=useContext(ProductContext)
    const {dispatch}=useContext(CartContext)
    const FilterPizza=Pizza.filter((currentItem)=>currentItem.category==='pizza')
    const [pizza,setPizza]=useState(FilterPizza)
    const addToCartHandler = (product) => {
      dispatch(addToCart(product));
    };
  return (
    <div className='container text-center' style={{paddingBottom:'100px'}}>
      <h1 style={{paddingBottom:'30px'}}>Hot Pizza</h1>
       <div className='row'>
        {
          pizza.map((currentItem)=>{
            return(<div className='col-lg-3 col-md-6' key={currentItem.id}>
           <div className="card food_card text-center align-items-center">
             <img src={currentItem.image} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5  className="card-title">{currentItem.name}</h5>
            <div className='d-flex align-items-center ' style={{paddingTop:'30px'}}>
              <span className='price'>${currentItem.price}</span>
              <button className='buy_button' onClick={()=>addToCartHandler(currentItem)}><NavLink style={{textDecoration:'none'}} to={`/carts/${currentItem.id}`}>Add to Cart</NavLink></button>
            </div>
            </div>
           </div>
           </div>
           )
          })
        }
       </div>
    </div>
  )
}

export default HotPizza
