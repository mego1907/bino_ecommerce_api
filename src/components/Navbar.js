import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import icons from react-icons
import { FaBars } from 'react-icons/fa'
import { CgClose } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

import { useSelector } from 'react-redux'; 

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Shop",
    path: "/shop",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const navbarRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(navbarRef && navbarRef.current) {
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          navbarRef.current.classList.add('shrink')
        } else {
          navbarRef.current.classList.remove('shrink')
        }
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const cart = useSelector(state => state.shopping.cart)
  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty
    });
    setCartCount(count)
  }, [cart, setCartCount])

  const [openMenu, setOpenMenu] = useState(false)
  const menuToggle = () => setOpenMenu(!openMenu)

  return (
    <nav className="navbar" ref={navbarRef}>
      <Container>
        <Link to="/" className="navbar__logo">
          Bino.
        </Link>

        <div className={`navbar__menu ${openMenu ? "active" : ""}`}>
          <ul className="navbar__menu__list">
            {mainNav.map((item, index) => (
              <li key={index} className="navbar__menu__list__item">
                <Link
                  to={item.path}
                  className={`navbar__menu__list__item__link ${
                    activeNav === index ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar__menu__right">
          <ul className="navbar__menu__right__list">
            <li className="navbar__menu__right__list__item">
              <button className="navbar__menu__right__list__item__btn">
                <BiSearchAlt2 className="navbar__menu__right__list__item__icon" />
              </button>
              {/* <div className="search-box">
                <button className="search-box__btn">
                  <BiSearchAlt2 />
                </button>
                <input
                  type="search"
                  name="search"
                  className="search-box__input"
                />
              </div> */}
            </li>
            <li className="navbar__menu__right__list__item">
              <Link to="/" className="navbar__menu__right__list__item__link">
                <AiOutlineHeart className="navbar__menu__right__list__item__icon" />
              </Link>
            </li>
            <li className="navbar__menu__right__list__item">
              <Link to="/cart" className="navbar__menu__right__list__item__link">
                <GiShoppingCart className="navbar__menu__right__list__item__icon" />
                <span className="navbar__menu__right__list__item__count">
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar__menu__mobile-toggle" onClick={menuToggle}>
          {openMenu ? <CgClose /> : <FaBars />}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

