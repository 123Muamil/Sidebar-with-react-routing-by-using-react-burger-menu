import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';


const Paggination = () => {
  const itemsPerPage=4
  const items = data
  const [currentItems, setCurrentItems] = useState(null);
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
  return (
    <div>
         <items currentItems={currentItems} />
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

export default Paggination
