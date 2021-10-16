import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io'

const Accordion = props => {
  return (
    <div className="custom-accordion">
      {props.children}
    </div>
  )
}

export const AccordionHeader = props => {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <button 
      className={`custom-accordion__header ${isOpen ? "show" : ""}`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{props.children}</span>
      <IoIosArrowUp className="icon" />
    </button>
  )
}

export const AccordionBody = props => {
  return(
    <div className="custom-accordion__body">
      {props.children}
    </div>
  )
}

export default Accordion
