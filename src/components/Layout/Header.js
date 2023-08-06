import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import classes from '../Layout/Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt='logo' />
      <h1>Invest Calculator</h1>
    </header>
  );
};

export default Header;
