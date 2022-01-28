import React from 'react';
import './Input.css';
import { IInputChangeArgs, IInputEventHandler } from '../../types';

export interface IInputProps {
  /** Input type */
  type?: 'text' | 'number';
  /** Additional classname */
  className?: string;
  /** Is input disabled */
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: IInputEventHandler<IInputChangeArgs>;
  textAlign?: 'left' | 'right';
}

const cssPrefix = 'input';
const cssPrefixContainer = `${cssPrefix}-container`;

const Input: React.FC<IInputProps> = ({
  type = 'text',
  value,
  onChange,
  className = '',
  textAlign = 'right',
  placeholder = '0.0',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event, { value: event.target.value });
    }
  };

  return (
    <div className={`${cssPrefixContainer} ${className}`}>
      <input
        className={`${cssPrefix} ${textAlign}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
