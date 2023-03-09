import React from 'react'
import ReactPaginate from 'react-paginate'
function Paginate() {
  return (
    <div>
        <ReactPaginate
        // previousLabel={backIcon}
        // nextLabel={forwardIcon}
        // pageCount={pageCount}
        // onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prevBtns"}
        nextLinkClassName={"nextBtns"}
        activeClassName={"paginateActive"}
      />
    </div>
  )
}

export default Paginate