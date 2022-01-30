import React from 'react';
import { Link } from 'react-router-dom';
import { cssPrefixLink } from '../../../components/header/workspace/WorkspaceHeader';
import { cssPrefix } from '../Pool';
import './PoolHeader.css';

interface IProps {
  linkTo: string;
  label: React.ReactNode | string;
}

const PoolHeader: React.FC<IProps> = ({ linkTo, label }) => (
  <div className={`${cssPrefix}-header`}>
    <Link to={linkTo} className={cssPrefixLink}>
      {label}
    </Link>
  </div>
);

export default PoolHeader;
