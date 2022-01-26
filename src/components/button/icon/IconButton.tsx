import React from 'react';
import './IconButton.css';

interface IProps {
  icon: React.ReactNode;
  onClick(): void;
}

const cssPrefix = 'icon-button';

const IconButton: React.FC<IProps> = ({ icon, onClick }) => (
  <button className={`${cssPrefix}`} onClick={onClick}>
    {icon}
  </button>
);

export default IconButton;
