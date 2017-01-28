import React, { PropTypes } from 'react';

function Card({ children, title, color }) {
  return (
    <div className={`card border-color${color} link-color${color}`}>
      <h3 className={`card-title border-color${color}`}>{title}</h3>
      {children}
    </div>
  );
}

Card.PropTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  color: PropTypes.number,
};

export default Card;
