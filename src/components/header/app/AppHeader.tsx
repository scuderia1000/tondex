import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { TON } from '../../../const';
import './AppHeader.css';

const AppHeader: React.FC = () => (
  <div className="app-header">
    <header>
      <div className="container">
        <a href={'/'} className="logo">
          <Logo />
          <span>{TON}</span>
        </a>
      </div>
    </header>
  </div>
);

export default AppHeader;
