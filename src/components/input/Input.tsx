import React from 'react';
import './Input.css';
import { IInputChangeArgs, IInputEventHandler } from '../../types';

interface IPops {
  /** Input type */
  type?: 'text' | 'number';
  /** Additional classname */
  className?: string;
  /** Is input disabled */
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  leftComponent?: React.ReactNode;
  onChange?: IInputEventHandler<IInputChangeArgs>;
  textAlign?: 'left' | 'right';
}

const cssPrefix = 'input';
const cssPrefixContainer = `${cssPrefix}-container`;

const Input: React.FC<IPops> = ({
  type = 'text',
  value,
  onChange,
  className = '',
  leftComponent,
  textAlign = 'right',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event, { value: event.target.value });
    }
  };

  return (
    <div className={`${cssPrefix} ${className}`}>
      <div className={cssPrefixContainer}>
        {leftComponent}
        <input
          className={`${cssPrefixContainer}--input ${textAlign}`}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </div>
      {/* <span className={`${cssPrefix}--info`}>Info</span> */}
    </div>
  );
};

export default Input;
