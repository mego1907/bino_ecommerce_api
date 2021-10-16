import React from 'react'
import Helmet from '../components/Helmet';
import Heading from '../components/Heading';
import { Col, Container, Row } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5'
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Section from '../components/Section';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <Heading title="Contact" />

      <div className="contact">
        <Section>
          <Container>
            <Row>
              <Col lg={8}>
                <div className="contact__form">
                  <form>
                    <Row>
                      <Col lg={6}>
                        <input
                          type="text"
                          className="contact__form__input"
                          placeholder="Your Name"
                        />
                      </Col>
                      <Col lg={6}>
                        <input
                          type="text"
                          className="contact__form__input"
                          placeholder="Your Email"
                        />
                      </Col>
                      <Col lg={12}>
                        <input
                          type="text"
                          className="contact__form__input"
                          placeholder="Subject"
                        />
                      </Col>
                      <Col lg={12}>
                        <textarea
                          type="text"
                          className="contact__form__message"
                          placeholder="Message"
                          cols="30"
                          row="7"
                        />
                      </Col>
                    </Row>
                    <button className="contact__form__btn">Send Message</button>
                  </form>
                </div>
              </Col>
              <Col lg={4}>
                <div className="contact__widget">
                  <div className="contact__widget__item">
                    <div className="contact__widget__item__icon">
                      <IoLocationSharp />
                    </div>
                    <div className="contact__widget__item__txt">
                      <h5>Address:</h5>
                      <p>60-49 Road 11378 New York</p>
                    </div>
                  </div>
                  <div className="contact__widget__item">
                    <div className="contact__widget__item__icon">
                      <BsPhone />
                    </div>
                    <div className="contact__widget__item__txt">
                      <h5>Phone:</h5>
                      <p>+65 11.188.888</p>
                    </div>
                  </div>
                  <div className="contact__widget__item">
                    <div className="contact__widget__item__icon">
                      <AiOutlineMail />
                    </div>
                    <div className="contact__widget__item__txt">
                      <h5>Email:</h5>
                      <p>info@bino.com</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </div>
    </Helmet>
  );
}

export default Contact
