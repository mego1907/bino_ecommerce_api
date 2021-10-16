import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import Button from '../components/Button'
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import Heading from "../components/Heading"
import Section from "../components/Section";

const Cart = () => {

  const cart = useSelector(state => state.shopping.cart);

  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalProducts(cart.reduce((total, item) => total + Number(item.qty), 0));
    setTotalPrice(cart.reduce((total, item) => total + Number(item.qty) * Number(item.price), 0))
  }, [cart])


  return (
    <Helmet title="Cart">
      <Heading title="Cart" noMargin={true} />

      <Section>
        <Container>
          <div className="cart">
            <div className="cart__info">
              <div className="cart__info__txt">
                <p>You have {totalProducts} products in your cart</p>
                <div className="cart__info__txt__price">
                  <span>Total Price: </span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className="cart__info__btn">
                <Button size="block">Order New</Button>
                <Link to="/shop">
                  <Button size="block">Return To Shop</Button>
                </Link>
              </div>
            </div>
            <div className="cart__list">
              {cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </Helmet>
  );
}

export default Cart
