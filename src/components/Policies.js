import React from 'react';
// import modules from react-bootstrap
import { Row, Col } from 'react-bootstrap';
// import SVG icons Components
import {
  FreeDeliveryIcon,
  ReturnMoneyIcon,
  PaymentIcon,
  SupportIcon,
} from "../SVG/IconSvg";

const Policies = () => {
  return (
    <section className="policies">
      <Row>
        <Col md="3" sm="6">
          <div className="policies__card">
            <div className="policies__card__imgs">
              <FreeDeliveryIcon
                classes="icon"
                width="60px"
                height="60px"
              />
            </div>
            <div className="policies__card__content">
              <h3>Free All Delivery</h3>
              <p>free all order over 99$</p>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6">
          <div className="policies__card">
            <div className="policies__card__imgs">
              <ReturnMoneyIcon
                classes="icon"
                width="60px"
                height="60px"
              />
            </div>
            <div className="policies__card__content">
              <h3>30 Days Return</h3>
              <p>if goods have Problems</p>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6">
          <div className="policies__card">
            <div className="policies__card__imgs">
              <PaymentIcon classes="icon" width="60px" height="60px" />
            </div>
            <div className="policies__card__content">
              <h3>Secure Payment</h3>
              <p>100% Secure Payment</p>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6">
          <div className="policies__card">
            <div className="policies__card__imgs">
              <SupportIcon classes="icon" width="50px" height="50px" />
            </div>
            <div className="policies__card__content">
              <h3>24/7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Policies;
