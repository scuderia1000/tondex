import React from 'react';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow_downward.svg';
import { ReactComponent as SwapVertical } from '../../assets/svg/swap_vert.svg';
import './ChangeButton.css';

const cssPrefix = 'exchange-button';

const ChangeButton: React.FC = () => (
  <div className={`${cssPrefix}-container`}>
    <button className={`${cssPrefix}`}>
      <ArrowDown className="arrow-down" />
      <SwapVertical className="arrow-swap" />
    </button>
  </div>
);

export default ChangeButton;
