import React, { useState, useEffect } from "react";
// import Modules from react bootstrap
import { Container } from 'react-bootstrap'
// import Modules from react-router-dom
import { Link } from 'react-router-dom';

const Heading = ({ title }) => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true);
  }, [])

  return (
    <div className="heading">
      <Container>
        <div className={`content text-center ${active ? "active" : ""}`}>
          <h2>
            <span>{title}</span>
          </h2>
          <div className="breadcrumb justify-content-center">
            <Link to="/" className="breadcrumb-item">
              Home
            </Link>
            <Link to="/shop" className="breadcrumb-item active">
              {title}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Heading;
