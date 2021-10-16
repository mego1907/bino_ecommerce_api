import React from 'react';
// import Modules from react bootstrap
import { Row, Col } from 'react-bootstrap';

const Title = ({children}) => {
  return (
    <div className="title">
      <Row className="justify-content-center">
        <Col md="7" className="d-flex justify-content-center">
          <div className="title__info">
            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export const Heading = ({children}) => {
  return (
    <h3 className="title__info__heading">
      <span></span>
      {children}
      <span></span>
    </h3>
  );
}

export const Description = ({children}) => {
  return(
    <>
      <p className="title__info__description">{children}</p>
    </>
  )
}

export default Title
