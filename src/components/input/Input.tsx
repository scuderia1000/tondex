import React from 'react';
import './Input.css';
import CoinButton from '../button/coin/CoinButton';
import { ITokenInfo } from '../../types';

interface IPops {
  value?: string;
  token?: ITokenInfo;
}

const cssPrefix = 'input';
const cssPrefixContainer = `${cssPrefix}-container`;

const Input: React.FC<IPops> = ({ value, token }) => {
  console.log('input');

  return (
    <div className={cssPrefix}>
      <div className={cssPrefixContainer}>
        <CoinButton token={token} />
        <input className={`${cssPrefixContainer}--input`} value={value} />
      </div>
      {/* <span className={`${cssPrefix}--info`}>Info</span> */}
    </div>
  );
};

export default Input;
