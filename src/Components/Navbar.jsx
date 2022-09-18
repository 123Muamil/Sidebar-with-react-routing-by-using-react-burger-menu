import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AddtoCartContext } from '../App'
import logo from '../Assests/Images/logo.png'
import { CartContext } from '../Reducers/CartProvider'
const Navbar = () => {
  const value=useContext(AddtoCartContext)
  const { cart, dispatch } = useContext(CartContext);
  const { items, total } = cart.reduce(
    ({ items, total }, { cost, quantity }) => ({
      items: items + quantity,
      total: total + quantity * cost
    }),
    { items: 0, total: 0 }
  );
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand ">
        <img  src={logo} alt='logo' height='60px' width='80px'/><br/>
        <span style={{color:'#E01A1A'}}>Tasty<span style={{paddingLeft:'5px',color:'#074710'}}>Treat</span> </span>
      </a>
       <div style={{paddingTop:'0px'}}>
       <NavLink className="navbar-brand mybrand " to="/cart" style={{background:'#E01A1A',borderRadius:'20px'}}>Cart:{items}</NavLink>
       </div>
   </div>
   </nav>
    </div>
  )
}
export default Navbar
