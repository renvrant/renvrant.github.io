import React, { PropTypes } from 'react';
import ColorBand from './color-band';

function Header({ routes }) {
  return (
    <header>
      <ColorBand />
      <div className="container">
        <h1 className="name">
          renee blackburn
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  routes: PropTypes.array,
};

export default Header;
