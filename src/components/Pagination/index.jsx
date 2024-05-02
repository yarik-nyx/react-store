import React from "react";

import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss'

const Pagination = ({onChangePage, pageCount}) => {
    return (
        <ReactPaginate
        className={styles.root}
        breakLabel='...'
        nextLabel='>'
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        >

    </ReactPaginate>
    )
}

export default Pagination