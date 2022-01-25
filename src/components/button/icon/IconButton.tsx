import React from 'react';
import './IconButton.css';

interface IProps {
  icon: React.ReactNode;
}

const cssPrefix = 'icon-button';

const IconButton: React.FC<IProps> = ({ icon }) => (
  <button className={`${cssPrefix}`}>{icon}</button>
);

export default IconButton;
