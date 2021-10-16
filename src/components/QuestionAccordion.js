import React, {useState} from 'react'

const QuestionAccordion = ({header, body}) => {

  const [active, setActive] = useState(false)

  return (
    <div className="question-accordion">
      <div className={`question-accordion__header ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
        <h6>{header}</h6>
      </div>
      <div className="question-accordion__body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default QuestionAccordion
