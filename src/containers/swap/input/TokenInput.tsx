import React from 'react';
import Input, { IInputProps } from '../../../components/input/Input';
import './TokenInput.css';

interface IPops extends IInputProps {
  leftComponent?: React.ReactNode;
  price?: string;
}

const cssPrefix = 'token-input';
const cssPrefixContainer = `${cssPrefix}-container`;

const TokenInput: React.FC<IPops> = ({ value, onChange, leftComponent, price }) => {
  console.log('TokenInput');
  return (
    <div className={`${cssPrefix}`}>
      <div className={cssPrefixContainer}>
        {leftComponent}
        <Input
          className={`${cssPrefixContainer}--input`}
          type={'number'}
          value={value}
          onChange={onChange}
        />
      </div>
      <span className={`${cssPrefix}--info`}>{price}</span>
    </div>
  );
};

export default TokenInput;
