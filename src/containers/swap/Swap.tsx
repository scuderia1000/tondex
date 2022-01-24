import React from 'react';
import './Swap.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { SWAP } from '../../const';

const cssPrefix = 'swap';

const Swap: React.FC = () => {
  console.log('swap');

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <Input value={'1'} />
        <Input value={'2'} />
        <Button label={SWAP} />
      </div>
    </div>
  );
};

export default Swap;
