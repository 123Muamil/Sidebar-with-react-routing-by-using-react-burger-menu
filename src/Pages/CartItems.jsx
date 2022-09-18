import React, { useContext, useState } from "react";
import { CartContext } from "../Reducers/CartProvider";
import '../Styles/CartItems.css'
import { clearCart } from '../Reducers/CartReducer'
import { decrementItemQuantity,incrementItemQuantity, removeFromCart } from "../Reducers/CartReducer";
import muzamiliqbal from '../Assests/Images/muzamiliqbal.jpg'

const CartsDetails = () => {
    const { cart, dispatch } = useContext(CartContext);
    const removeFromCartHandler = (itemToRemove) =>
      dispatch(removeFromCart(itemToRemove));
  
    const decrementQuantity = (item) => dispatch(decrementItemQuantity(item));
    const incrementQuantity = (item) => dispatch(incrementItemQuantity(item));
    const clearCartHandler = () => {
      dispatch(clearCart());
    };
    const { items, total } = cart.reduce(
      ({ items, total }, { price, quantity }) => ({
        items: items + quantity,
        total: total + quantity * price
      }),
      { items: 0, total: 0 }
    );
  return (
    <div className='container'>
         <div className="text-center " style={{paddingBottom:'20px'}}>
                         
                         <p className="mb-0">You have {items} items in your cart and your total price is {total}</p>
                         <button className="btn btn-primary" onClick={clearCartHandler}>Clear Cart Items</button>
                         {
                            total===0 &&  <p className="mb-0">Your Cart is Empty Now</p>
                         }
                    </div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                     
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                         
                          <p className="mb-0">You have {items} items in your cart and your total price is {total}</p>
                        </div>
                        
                      </div>
                         {
                            cart.map((currentItem)=>{
                              return(<div className="card cartItem-card mb-3 mb-lg-0 text-center"  key={currentItem.id}>
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={currentItem.image}
                                        className="img-fluid rounded-3 cartItem-image" alt="Shopping item" style={{ width: '1000px', height: '100px' }} />
                                    </div>
                                    <div className="ms-3">
                                      <h5>{currentItem.name}</h5>
                                      <p className="small mb-0">{currentItem.disc}</p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0">${currentItem.price}</h5>
                                    </div>
                                  
                                  </div>
                                  
                                </div>
                                <button type="button" className="btn btn-success" style={{marginRight:'10px'}} onClick={() => decrementQuantity(currentItem)}>
          <i className="fa-solid fa-circle-minus"></i>
              </button>
             
          <button className="btn btn-secondary" style={{marginRight:'10px'}} onClick={() => removeFromCartHandler(currentItem)}> <i className="fa-solid fa-trash"></i></button>
          <button type="button" className="btn btn-success" style={{marginRight:'10px'}} onClick={() => incrementQuantity(currentItem)}>
          <i className="fa-solid fa-circle-plus"></i>
              </button>
                              </div>
                            </div>)
                            })
                         }
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Muzamil Iqbal</h5>
                            <img src={muzamiliqbal}
                              className="img-fluid rounded-3" style={{ width: '100%', objectFit: 'cover' }} alt="Avatar" />
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                              <label className="form-label" htmlFor="typeText">Card Number</label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7"  minLength="7" maxLength="7" />
                                  <label className="form-label" htmlFor="typeExp">Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password" id="typeText" className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                  <label className="form-label" htmlFor="typeText">Cvv</label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr className="my-4" />
                         
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${total}</p>
                          </div>
                          <button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                              <span>${total}</span>
                              <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CartsDetails