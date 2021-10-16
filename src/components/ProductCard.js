import React from 'react';
// import Icons from react-icons
import { AiFillStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
// import { BiShoppingBag } from "react-icons/bi";
// import modules from react-router-dom
import { Link } from 'react-router-dom'
// import shopping Actions 
import { loadCurrentItem, loadProductModal } from '../redux/shopping/shoppingActions';
// import useDispatch hook to dispatch the actions
import { useDispatch } from 'react-redux';

import Button from './Button'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <Link
        to={`shop/${product.slug}`}
        onClick={() => dispatch(loadCurrentItem(product))}
      >
        <div className="product-card__image">
          <img src={product.image01} alt="" />
          <img src={product.image02} alt="" />
        </div>
      </Link>
      <Link
        to={`shop/${product.slug}`}
        onClick={() => dispatch(loadCurrentItem(product))}
      >
        <h5 className="product-card__title">{product.title}</h5>
      </Link>
      <div className="product-card__info">
        <ul className="product-card__info__rating">
          {Array(product.rating)
            .fill()
            .map((item, index) => {
              return (
                <li key={index} className="product-card__info__rating__item">
                  <AiFillStar className="product-card__info__rating__item__icon" />
                </li>
              );
            })}
          {Array(5 - product.rating)
            .fill()
            .map((item, index) => {
              return (
                <li key={index} className="product-card__info__rating__item">
                  <BiStar className="product-card__info__rating__item__icon" />
                </li>
              );
            })}
        </ul>
        <p className="product-card__info__price">${product.price}</p>
        {/* <button
          className="product-card__info__btn"
          onClick={() => dispatch(loadProductModal(product))}
        >
          <BiShoppingBag />
        </button> */}
        <Button
          animate={true}
          size="sm"
          rounded={true}
          onClick={() => dispatch(loadProductModal(product))}
        >
          add To Card
        </Button>
      </div>
    </div>
  );
}

export default ProductCard
