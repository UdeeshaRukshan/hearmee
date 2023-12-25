import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = { 
  display: 'flex', 
  justifyContent: 'space-around', 
 
  width: '100%', 
  height: '50px', 
  backgroundColor: 'red' 
};

const Nav = () => {
  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none',alignItems:'center' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
    </nav>
  );
};

export default Nav;