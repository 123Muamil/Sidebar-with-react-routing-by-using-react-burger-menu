import React, { createContext, useReducer, useState } from 'react'
import Products from './Assests/FakeApis/ProductsApi'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Router from './Routing/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer'
import ScrollToTop from "react-scroll-to-top";
export const ProductContext=createContext()
export const AddtoCartContext=createContext()
const initialState=0
const reducer=(state,action)=>{
    switch (action) {
      case 'Add to Cart':
        return state+1
      case 'Delete to Cart':
        return initialState
      default:
        return state
      
    }
}
const App = () => {
  const [data,setData]=useState(Products)
  const [Add_to_Cart,Dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <ScrollToTop smooth color="#6f00ff" style={{color:'green',background:'#E01A1A',borderRadius:'50%'}} />
      <AddtoCartContext.Provider value={{Add_to_Cart:Add_to_Cart,dispatch:Dispatch}}>
      <ProductContext.Provider value={data}>
      <Navbar/>
       <Sidebar/>
       <Router/>
       <Footer/>
       </ProductContext.Provider>
       </AddtoCartContext.Provider>
    </div>
  )
}
export default App
