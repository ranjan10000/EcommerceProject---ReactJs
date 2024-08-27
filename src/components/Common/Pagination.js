import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ data, itemsPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        onPageChange && onPageChange(event.selected);
    };

    debugger
    return (
        <div>
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                disabledClassName={'disabled'}
            />
        </div>
    );
}
