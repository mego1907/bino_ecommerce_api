import React, {useState, useEffect} from 'react'

const Section = (props) => {

  const [active, setactive] = useState(false);
  useEffect(() => {
    setactive(true);
  }, []);

  return (
    <div className={`section  ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const SectionBody = (props) => {
  return <div className="section__body">{props.children}</div>;
};

export default Section;
