import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Icons from react-icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiCheck } from 'react-icons/bi';
// import shopping Action
import { addToCart } from '../redux/shopping/shoppingActions'
// import useDispatch hook to dispatch the actions
import { useDispatch } from 'react-redux'
// import Button component
import Button from './Button';

import { withRouter } from 'react-router';

const ProductView = props => {
  const dispatch = useDispatch();

  const product = props.product;

  const [previewImg, setPreviewImg] = useState(product && product.image01);

  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(1)

  // Update The Quantity in ProductView
  const updateQuantity = (type) => {
    if(type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    setPreviewImg(product && product.image01);
    setQuantity(1)
    setColor(null)
    setSize(null)
  }, [product])

  // Check from the client if he choise the color and size or no
  const check = () => {
    if(color === null) {
      alert("Please choose color!")
      return false;
    }

    if(size === null) {
      alert("Please choose a size!")
      return false;
    }

    return true;
  }

  // Add Product To The Cart When the Client Click The Button
  const addProductToCart = () => {
    if(check()) {
      dispatch(addToCart(product.id, color, size, quantity));
      alert("Success")
    }
  }

  if(!product) return null;

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div className="product__images__list__item">
            <img
              src={product.image01}
              alt={product.title}
              onClick={() => setPreviewImg(product.image01)}
            />
          </div>
          <div className="product__images__list__item">
            <img
              src={product.image02}
              alt={product.title}
              onClick={() => setPreviewImg(product.image02)}
            />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt={product.title} />
        </div>
      </div>
      <div className="product__info">
        <h2 className="product__info__title">{product.title}</h2>
        <div className="product__info__item">
          <span className="product__info__item__price">${product.price}</span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            <h6>Color</h6>
          </div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
                key={index}
              >
                <div className={`circle bg-${item}`}>
                  <BiCheck className="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            <h6>Size</h6>
          </div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
                key={index}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            <h6>Quantity</h6>
          </div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <AiOutlineMinus />
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={addProductToCart} animate={true}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductView.propTypes = {
  product: PropTypes.object
}

export default withRouter(ProductView);
