import React, { useContext, useState,useEffect } from 'react'
import { AddtoCartContext, ProductContext } from '../App'
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Reducers/CartProvider';
import { addToCart } from '../Reducers/CartReducer';
const AllFoodsCards = () => {
  //Updating State Component
  const Add_to_Cart=useContext(AddtoCartContext)
  const ProductData=useContext(ProductContext)
  const [data,setData]=useState(ProductData)
  //Searching
  const itemsPerPage=4
  const items=data
  const [currentItems, setCurrentItems] = useState(items);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(items.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(items.length / itemsPerPage));
}, [itemOffset, itemsPerPage,items]);
const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % items.length;
  setItemOffset(newOffset);
};
function Handler(e)
{
    if(e.target.value==='')
    {
       setCurrentItems(ProductData)
    }
    else
    {
        const result=ProductData.filter((currentItem)=>{
            return currentItem.category.toLocaleLowerCase().includes(e.target.value);
         })
         setCurrentItems(result)
    }
}
  function EventHandler(e)
    {
        if(e.target.value==='ALL')
        {
           setData(ProductData)
        }
        else if(e.target.value==='Burger')
        {
             const result=ProductData.filter((currentItem)=>currentItem.category==='burger')
             setCurrentItems(result)
        }
        else if(e.target.value==='Pizza')
        {
          const result=ProductData.filter((currentItem)=>currentItem.category==='pizza')
             setCurrentItems(result)
        }
        else if(e.target.value==='Bread')
        {
          const result=ProductData.filter((currentItem)=>currentItem.category==='bread')
          setCurrentItems(result)
        }
        else{
          setData(ProductData)
        }
    }
    const {dispatch}=useContext(CartContext)
    const addToCartHandler = (product) => {
      dispatch(addToCart(product));
    };
  return (
    <div className='container' style={{paddingBottom:'30px'}}>
      <form className="d-flex" style={{paddingBottom:'30px'}}>
        <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search"  onChange={Handler} />
        <select className="form-select" aria-label="Default select example" onChange={EventHandler}>
        <option select='true'>Default</option>
          <option defaultValue="0" >All</option>
          <option defaultValue="1">Burger</option>
          <option defaultValue="2">Pizza</option>
          <option defaultValue="3">Bread</option>
        </select>
      </form>
      <div className='container'>
        <div className='row'>
        {
          
          currentItems.map((currentItem)=>{
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
      <ReactPaginate
        breakLabel={"..."}
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center align-items-center text-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
       
      />
    </div>
  )
}
export default AllFoodsCards
