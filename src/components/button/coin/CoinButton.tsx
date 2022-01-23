import React from 'react';
import tokens from '../../../mock/tokens.json';
import './CoinButton.css';

interface IProps {
  label?: string;
  imgSrc?: string;
}

const cssPrefix = 'coin-button';

const wethToken = tokens.find((token) => token.symbol === 'WETH');

const CoinButton: React.FC<IProps> = ({ label }) => {
  console.log('CoinButton', label);
  console.log('wethToken', wethToken);

  return (
    <button className={cssPrefix}>
      <img className={`${cssPrefix}--image`} src={wethToken?.logoURI} />
      <span className={`${cssPrefix}--label`}>{wethToken?.symbol}</span>
    </button>
  );
};

export default CoinButton;
