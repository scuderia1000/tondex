import React from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { SWAP } from '../../const';
import tokens from '../../mock/tokens.json';
import { ReactComponent as ArrowDown } from '../../components/assets/svg/arrow_downward.svg';
import './Swap.css';

const cssPrefix = 'swap';

const wethToken = tokens.find((token) => token.symbol === 'WETH');
const tonToken = tokens.find((token) => token.symbol === 'TONCOIN');

const Swap: React.FC = () => {
  console.log('swap');

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <div>
          <Input value={'1'} token={wethToken} />
          <div className={`${cssPrefix} exchange-button-container`}>
            <div className={`${cssPrefix} exchange-button`}>
              <ArrowDown />
            </div>
          </div>
          {/* <div className={`${cssPrefix} exchange-button`}>1</div> */}
          <Input value={'2'} token={tonToken} />
        </div>
        <Button label={SWAP} />
      </div>
    </div>
  );
};

export default Swap;
