import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import shopping actions 
import { loadCurrentItem, removeFromCart, updateCartQuantity } from "../redux/shopping/shoppingActions";
// import useDispatch hook to dispatch the actions
import { useDispatch } from 'react-redux';
// import icons
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";

import useFetchData from '../hooks/useFetchData'

const CartItem = props => {
  const dispatch = useDispatch();

  // const { data } = useFetchData("http://localhost:5000/products");
  const { data } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/products"
  );

  const [item, setItem] = useState(props.item)
  const [quantity, setQuantity] = useState(props.item.qty);

  useEffect(() => {
    setItem(props.item)
    setQuantity(props.item.qty)
  }, [props.item])

  // Update The Quantity in Cart Item
  const updateQuantity = (opt) => {
    if(opt === '+') {
      dispatch(updateCartQuantity(item.id, quantity + 1))
    } 
    if(opt === '-') {
      dispatch(
        updateCartQuantity(item.id, quantity - 1 === 0 ? 1 : quantity - 1)
      );
    } 
  }

  // Load ProductView
  const loadProductView = () => {
    data.map(product => {
      if(product.id === item.id) {
        dispatch(loadCurrentItem(product))
      }
      return true;
    })
  }

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.image01} alt={item.title} />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/shop/${item.slug}`} onClick={loadProductView}>
            {`${item.title} - ${item.colors} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">${Number(item.price)}</div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("-")}
            >
              <AiOutlineMinus />
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("+")}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div
          className="cart__item__info__del"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <AiTwotoneDelete className="icon" />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem
