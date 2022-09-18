import React, { useContext, useState } from 'react'
import '../Styles/Foods.css'
import burger from '../Assests/Images/burger.png'
import pizza from '../Assests/Images/pizza.png'
import bread from '../Assests/Images/bread.png'
import {ProductContext } from '../App'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Reducers/CartProvider'
import { addToCart } from '../Reducers/CartReducer'
const Foods = () => {
  //Updating State Component
  const products=useContext(ProductContext)
  const [data,setData]=useState(products)
  const SearchBurger=(val)=>{
       const result=products.filter((currentItem)=>currentItem.category===val)
       setData(result)
  }
  const SearchPizza=(val)=>{
    const result=products.filter((currentItem)=>currentItem.category===val)
    setData(result)
}
const SearchBread=(val)=>{
  const result=products.filter((currentItem)=>currentItem.category===val)
  setData(result)
}
const {dispatch}=useContext(CartContext)
const addToCartHandler = (product) => {
  dispatch(addToCart(product));
};
  return (
    <div className='container foods_container text-center '>
     <h1>Popular Foods</h1>
     <div className='container food_container'>
      <button className='buttons' onClick={()=>setData(products)}>All</button>
      <button className='buttons' onClick={()=>SearchBurger('burger')}> <img src={burger} alt='burger'/>Burger</button>
      <button className='buttons' onClick={()=>SearchPizza('pizza')}><img src={pizza} alt='pizza'/>Pizza</button>
      <button className='buttons' onClick={()=>SearchBread('bread')}><img src={bread} alt='bread'/>Bread</button>
     </div>
     <div className='container  '>
      <div className='row'>
        {
          data.map((currentItem)=>{
            return(<div className='col-lg-3 col-md-6' key={currentItem.id}>
           <div className="card food_card text-center align-items-center">
             <img src={currentItem.image} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5  className="card-title">{currentItem.name}</h5>
            <div className='d-flex align-items-center' style={{paddingTop:'30px'}}>
              <span className='price'>${currentItem.price}</span>
              <button className='buy_button'  onClick={()=>addToCartHandler(currentItem)}><NavLink style={{textDecoration:'none'}} to={`/carts/${currentItem.id}`}>Add to Cart</NavLink></button>
            </div>
            </div>
           </div>
           </div>
           )
          })
        }

      </div>
     </div>
    </div>
  )
}

export default Foods
