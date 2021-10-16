import React from 'react';
import { Link } from 'react-router-dom'
// import Icons from react-icons
import { FiPhone } from 'react-icons/fi'
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
// import modules from react-bootstrap
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const NavHeader = () => {
  return (
    <div className="nav-header">
      <Container>
        <Row>
          <Col md="6">
            <div className="nav-header__connect">
              <div className="nav-header__connect__phone">
                <FiPhone className="nav-header__connect__icon" />
                <p className="nav-header__connect__txt">+1 235 5896 125</p>
              </div>
              <div className="nav-header__connect__email">
                <FaEnvelope className="nav-header__connect__icon" />
                <p className="nav-header__connect__txt">info@domain.com</p>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="nav-header__details">
              <select name="coin" id="coin" className="custom-select">
                <option value="USD">
                  USD
                </option>
                <option value="EGY">EGY</option>
              </select>
              <select name="lang" id="lang" className="custom-select">
                <option value="english">
                  English
                </option>
                <option value="arabic">Arabic</option>
              </select>
              {/* Currency */}
              
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  My Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/login" className="dropdown-item">
                    Login <CgLogIn />
                  </Link>
                  <Link to="/register" className="dropdown-item">
                    Register <AiOutlineUserAdd />
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavHeader
