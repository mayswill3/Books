import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import queryString from "query-string";

import Books from "../components/Books";
import Paginate from "../components/Pagination";

function BookList() {
  const location = useLocation();
  const history = useHistory();
  const path = window.location.pathname;
  const initialQueryString = queryString.parse(location.search);
  const initialPageNumber = Number(initialQueryString.page) || 1;

  const [data, setData] = useState({ books: [] });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPageNumber);
  const [booksPerPage, setBooksPerPage] = useState(4);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.post("http://nyx.vima.ekt.gr:3000/api/books");
      setData(res.data);
      setLoading(false);
    };

    fetchBooks();
    history.push(`${path}?page=${currentPage}`);
  }, [currentPage, history, path]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = data.books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Container>
      <Books books={currentBooks} loading={loading} />
      <Paginate
        booksPerPage={booksPerPage}
        totalBooks={data.books.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
}

export default BookList;
