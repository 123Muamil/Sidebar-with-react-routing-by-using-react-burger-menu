import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import CartsDetails from '../Pages/CartDetails'
import AllFoods from '../Pages/AllFoods'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import CartItems from '../Pages/CartItems'
const Router = () => {
  return (
    <div>
      <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route path='/foods' element={<AllFoods/>}/>
     <Route path='/carts/:id' element={<CartsDetails/>}/>
     <Route path='/cart' element={<CartItems/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
export default Router
