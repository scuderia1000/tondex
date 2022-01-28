import React from 'react';
import './Button.css';

interface IProps {
  label?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const cssPrefix = 'button';

const Button: React.FC<IProps> = ({ label, disabled = true, className = '', onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button className={`${cssPrefix} ${className}`} disabled={disabled} onClick={handleClick}>
      <span className={`${cssPrefix}--label`}>{label}</span>
    </button>
  );
};

export default Button;
