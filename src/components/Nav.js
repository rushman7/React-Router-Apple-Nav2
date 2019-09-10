import React from 'react';
import { Route, Link } from 'react-router-dom';

const linkNames = [
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'TV',
  'Music',
  'Support'
];

const Nav = () => {
  return (
    <div className="header">
      <i class="fab fa-apple"></i>
      {linkNames.map((name) => 
        <Link to={name}>{name}</Link>
      )}
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-bag"></i>
    </div>
  )
}

export default Nav;