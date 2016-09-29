import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeCLassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeCLassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeCLassName="active">About</IndexLink>
      <LoadingDots interval={100} dots={20}/>
    </nav>
  );
};

export default Header;
