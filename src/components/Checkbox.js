import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { BiCheck } from 'react-icons/bi'

const Checkbox = props => {

  const inputRef = useRef(null)

  const onChange = () => {
    (props.onChange) && (props.onChange(inputRef.current))
  }

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        onChange={onChange}
        checked={props.checked}
        ref={inputRef}
      />
      <span className="custom-checkbox__checkmark">
        <BiCheck className="custom-checkbox__checkmark__icon" />
      </span>
      {props.label}
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

export default Checkbox
