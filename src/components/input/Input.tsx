import React, { useEffect, useState } from 'react';
import './Input.css';
import classNames from 'classnames';
import { IInputChangeArgs, IInputEventHandler, IValidationControl } from '../../types';

export interface IInputProps extends IValidationControl {
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
  invalid?: boolean;
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
  invalid = false,
  onValidationChange,
  validate,
}) => {
  const [isValid, setIsValid] = useState(!invalid);
  const maxValidation = (value: string): boolean => !max || value <= max;

  const validateInput = (value: string): void => {
    const outerValid = !validate || validate(value);
    const defaultValid = maxValidation(value);
    const isValueValid = outerValid && defaultValid;
    if (isValid !== isValueValid) {
      setIsValid(isValueValid);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(event, { value });
    }
  };

  useEffect(() => {
    setIsValid(!invalid);
  }, [invalid]);

  useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid]);

  useEffect(() => {
    !!value && validateInput(value);
  }, [value]);

  const classes = classNames({
    [cssPrefixContainer]: true,
    [className]: className,
    invalid: !isValid,
  });

  const inputCls = classNames({
    [cssPrefix]: true,
    [textAlign]: !!textAlign,
  });

  return (
    <div className={classes}>
      <input
        className={inputCls}
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
