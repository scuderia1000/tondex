import React from 'react';
import logo from '../assets/svg/logo.svg';
import { TON } from '../../const';
import './styles.css';

const Header: React.FC = () => (
  <div className="app-header">
    <header>
      <div className="container">
        <a href={'/'} className="logo">
          <img src={logo} alt="logo" />
          <span>{TON}</span>
        </a>
      </div>
    </header>
  </div>
);

export default Header;
