import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Books = ({ books, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Row className="mt-4">
        {books.map((book) => {
          return (
            <Col xs="12" lg="6" className="mb-4" key={book.id}>
              <Card border="primary" className="w-100 h-100">
                <Card.Body>
                  <Card.Title>{book.book_title}</Card.Title>
                  <Card.Text>Book author: {book.book_author}</Card.Text>
                  <Card.Text>
                    Publication country: {book.book_publication_country}
                  </Card.Text>
                  <Card.Text>
                    Publication city: {book.book_publication_city}
                  </Card.Text>
                  <Card.Text>Book pages: {book.book_pages}</Card.Text>
                  <Card.Text>
                    Publication year: {book.book_publication_year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Books;
