import React, { PropTypes } from 'react';

function Header({ routes }) {
  // function generateMapMenu() {
  //   let path = '';

  //   function nextPath(route) {
  //     path += (
  //       (path.slice(-1) === '/' ? '' : '/') +
  //       (route.path === '/' ? '' : route.path)
  //     );
  //     return path;
  //   }

  //   return (
  //     routes.filter(route => route.mapMenuTitle)
  //       .map((route, index, array) => (
  //         <span key={index}>
  //           dsdsd
  //           {(index + 1) < array.length && ' / '}
  //         </span>
  //       ))
  //   );
  // }
  return (
    <header>
      <h1>Renee Vrantsidis</h1>
      <nav>
        Menu
      </nav>
    </header>
  );
}

Header.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Header;
