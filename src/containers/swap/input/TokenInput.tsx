import React from 'react';
import Input, { IInputProps } from '../../../components/input/Input';
import './TokenInput.css';

interface IPops extends IInputProps {
  leftComponent?: React.ReactNode;
}

const cssPrefix = 'token-input';
const cssPrefixContainer = `${cssPrefix}-container`;

const TokenInput: React.FC<IPops> = ({ value, onChange, leftComponent }) => {
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
      {/* <span className={`${cssPrefix}--info`}>Info</span> */}
    </div>
  );
};

export default TokenInput;
