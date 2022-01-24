import React from 'react';
import './CoinButton.css';
import { ITokenInfo } from '../../../types';

interface IProps {
  token?: ITokenInfo;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({ token }) => {
  console.log('CoinButton');

  return (
    <button className={cssPrefix}>
      <img className={`${cssPrefix}--image`} src={token?.logoURI} alt={`${token?.symbol}-logo`} />
      <span className={`${cssPrefix}--label`}>{token?.symbol}</span>
    </button>
  );
};

export default CoinButton;
