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

const TokenInput: React.FC<IPops> = (props) => (
  <div className={`${cssPrefix}`}>
    <div className={cssPrefixContainer}>
      {props.leftComponent}
      <Input
        {...props}
        className={`${cssPrefixContainer}--input ${props.className}`}
        type={'number'}
      />
    </div>
    <div className={`${cssPrefix}--info-container`}>
      <span className={`${cssPrefix}--info`}>{Number(props.price) ? `$${props.price}` : ''}</span>
      <span className={`${cssPrefix}--info`}>{props.max ? `${Max}: ${props.max}` : ''}</span>
    </div>
  </div>
);

export default TokenInput;
