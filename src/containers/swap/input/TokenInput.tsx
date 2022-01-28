import React from 'react';
import Input, { IInputProps } from '../../../components/input/Input';
import './TokenInput.css';
import { Max } from '../../../const';

interface IPops extends IInputProps {
  leftComponent?: React.ReactNode;
  price?: string;
}

const cssPrefix = 'token-input';
const cssPrefixContainer = `${cssPrefix}-container`;

const TokenInput: React.FC<IPops> = ({ value, onChange, leftComponent, price, max }) => (
  <div className={`${cssPrefix}`}>
    <div className={cssPrefixContainer}>
      {leftComponent}
      <Input
        className={`${cssPrefixContainer}--input`}
        type={'number'}
        value={value}
        onChange={onChange}
        max={max}
      />
    </div>
    <div className={`${cssPrefix}--info-container`}>
      <span className={`${cssPrefix}--info`}>{Number(price) ? `$${price}` : ''}</span>
      <span className={`${cssPrefix}--info`}>{max ? `${Max}: ${max}` : ''}</span>
    </div>
  </div>
);

export default TokenInput;
