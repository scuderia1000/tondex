import React from 'react';
import './Button.css';

interface IProps {
  label?: string;
  disabled?: boolean;
  className?: string;
}

const cssPrefix = 'button';

const Button: React.FC<IProps> = ({ label, disabled = true, className = '' }) => {
  console.log('button');

  return (
    <button className={`${cssPrefix} ${className}`} disabled={disabled}>
      <span className={`${cssPrefix}--label`}>{label}</span>
    </button>
  );
};

export default Button;
