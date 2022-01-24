import React from 'react';
import './Button.css';

interface IProps {
  label?: string;
  disabled?: boolean;
}

const cssPrefix = 'button';

const Button: React.FC<IProps> = ({ label, disabled = true }) => {
  console.log('button');

  return (
    <button className={cssPrefix} disabled={disabled}>
      <span className={`${cssPrefix}--label`}>{label}</span>
    </button>
  );
};

export default Button;
