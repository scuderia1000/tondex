import React from 'react';
import './Swap.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { SWAP } from '../../const';
import tokens from '../../mock/tokens.json';

const cssPrefix = 'swap';

const wethToken = tokens.find((token) => token.symbol === 'WETH');
const tonToken = tokens.find((token) => token.symbol === 'TONCOIN');

const Swap: React.FC = () => {
  console.log('swap');

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <Input value={'1'} token={wethToken} />
        <Input value={'2'} token={tonToken} />
        <Button label={SWAP} />
      </div>
    </div>
  );
};

export default Swap;
