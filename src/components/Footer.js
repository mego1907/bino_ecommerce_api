import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom';
// import icons from react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerSocialLinks = [
    {
      path: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      path: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      path: "https://www.pinterest.com",
      icon: <FaPinterestP />,
    },
    {
      path: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
    {
      path: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
  ];

  const footerLinks = [
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

  return (
    <footer className="footer">
      <Container>
        <h3 className="footer__logo">Bino.</h3>
        <div className="footer__social">
          <ul className="footer__social__list">
            {footerSocialLinks.map((item, index) => (
              <li key={index} className="footer__social__list__item">
                <a href={item.path}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          <ul className="footer__links__list">
            {footerLinks.map((item, index) => (
              <li key={index} className="footer__links__list__item">
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer__txt">
          <span>&copy;</span>
          bino 2021 - ALL REGISTERD
        </p>
      </Container>
    </footer>
  );
}

export default Footer
