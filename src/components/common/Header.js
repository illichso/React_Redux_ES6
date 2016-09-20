import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeCLassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeCLassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeCLassName="active">About</IndexLink>
    </nav>
  );
};

export default Header;
