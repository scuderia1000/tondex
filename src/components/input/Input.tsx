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
  max?: string;
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
  max,
}) => {
  // TODO
  const validate = (value: string): boolean => !max || Number(value) <= Number(max);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange && validate(value)) {
      onChange(event, { value });
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
        max={max}
      />
    </div>
  );
};

export default Input;
