import React, { useState } from 'react';
import './Input.css';
import CoinButton from '../button/coin/CoinButton';
import { ITokenInfo } from '../../types';

interface IPops {
  value?: string;
  token?: ITokenInfo;
  onSelectTokenClick?(): void;
}

const cssPrefix = 'input';
const cssPrefixContainer = `${cssPrefix}-container`;

const Input: React.FC<IPops> = ({ value, token, onSelectTokenClick }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={cssPrefix}>
      <div className={cssPrefixContainer}>
        <CoinButton
          symbol={token?.symbol}
          logoURI={token?.logoURI}
          onSelectTokenClick={onSelectTokenClick}
        />
        <input
          className={`${cssPrefixContainer}--input`}
          value={inputValue}
          onChange={handleChange}
          type={'number'}
        />
      </div>
      {/* <span className={`${cssPrefix}--info`}>Info</span> */}
    </div>
  );
};

export default Input;
