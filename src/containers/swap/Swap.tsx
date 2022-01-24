import React from 'react';
import { SWAP } from '../../const';
import tokens from '../../mock/tokens.json';
import Exchange from '../exchange/Exchange';
import './Swap.css';

const cssPrefix = 'swap';

const wethToken = tokens.find((token) => token.symbol === 'WETH');
const tonToken = tokens.find((token) => token.symbol === 'TONCOIN');

const Swap: React.FC = () => {
  console.log('swap');

  return (
    <div className={cssPrefix}>
      <Exchange buttonLabel={SWAP} firstToken={wethToken} secondToken={tonToken} />
    </div>
  );
};

export default Swap;
