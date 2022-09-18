import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../App'
import data1 from '../Assests/FakeApis/ProductsApi'
import muzamiliqbal from '../Assests/Images/muzamiliqbal.jpg'
import { CartContext } from '../Reducers/CartProvider'
const CartsDetails = () => {
   const Data=useContext(ProductContext)
   const [data,setData]=useState(Data)
   const { cart, dispatch } = useContext(CartContext);
 
  const { items, total } = cart.reduce(
    ({ items, total }, { price, quantity }) => ({
      items: items + quantity,
      total: total + quantity * price
    }),
    { items: 0, total: 0 }
  );
  const {id}=useParams()
  const MyData=data[id-1]
  const ProductData=[]
  ProductData.push(MyData)
  const product = data1.find((product) => product.id == id);
  console.log("The product is:",product)
  return (
    <div className='container'>
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
                            ProductData.map((currentItem)=>{
                              return(<div className="card mb-3 mb-lg-0" key={currentItem.id}>
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={currentItem.image}
                                        className="img-fluid rounded-3" alt="Shopping item" style={{ width: '1000px', height: '100px' }} />
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