import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/"><i class="fab fa-apple"></i></Link>
      {linkNames.map((name) => 
        <Link to={name} className="links">{name}</Link>
      )}
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-bag"></i>
    </div>
  )
}

export default Nav;