import React from 'react';
import './Input.css';
import CoinButton from '../button/coin/CoinButton';

interface IPops {
  value: string;
}

const cssPrefix = 'input';
const cssPrefixContainer = `${cssPrefix}-container`;

const Input: React.FC<IPops> = ({ value }) => {
  console.log('input');

  return (
    <div className={cssPrefix}>
      <div className={cssPrefixContainer}>
        <CoinButton label={'ETH'} />
        <input className={`${cssPrefixContainer}--input`} value={value} />
      </div>
      {/* <span className={`${cssPrefix}--info`}>Info</span> */}
    </div>
  );
};

export default Input;
