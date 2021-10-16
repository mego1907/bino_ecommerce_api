import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Default = () => {
  return (
    <div className="default">
      <Container className="d-flex flex-column align-items-center">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <Link to="/" className="btn btn-outline-danger my-5 rounded-0 px-3">
          Back To Home
        </Link>
      </Container>
    </div>
  );
}

export default Default
