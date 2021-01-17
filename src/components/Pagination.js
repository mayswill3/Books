import React from "react";
import { Pagination } from "react-bootstrap";

function Paginate({ booksPerPage, totalBooks, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <Pagination.Item size="lg" key={number} active={number === currentPage}>
          <div
            onClick={(e) => {
              paginate(number);
              e.preventDefault();
            }}
            href={"!#"}
          >
            {number}
          </div>
        </Pagination.Item>
      ))}
    </div>
  );
}

export default Paginate;
