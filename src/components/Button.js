import React from 'react'
import PropTypes from 'prop-types'
import { GiShoppingCart } from "react-icons/gi"

const Button = props => {

  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";

  const size = props.size ? "custom-btn-" + props.size : "";

  const animate = props.animate ? "custom-btn-animate" : ""

  const rounded = props.rounded ? "custom-btn-rounded" : ""

  return (
    <button 
      className={`custom-btn ${bg} ${size} ${animate} ${rounded}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="custom-btn__txt">
        {props.children}
      </span>
      <span className="custom-btn__icon">
        <GiShoppingCart  />
      </span>
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  bg: PropTypes.string,
  animate: PropTypes.bool,
  rounded: PropTypes.bool,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
