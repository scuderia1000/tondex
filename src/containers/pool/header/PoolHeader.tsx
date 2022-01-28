import React from 'react';
import { Link } from 'react-router-dom';
import { cssPrefixLink } from '../../../components/header/workspace/WorkspaceHeader';
import { Add } from '../../../const';
import { cssPrefix } from '../Pool';
import './PoolHeader.css';

const PoolHeader: React.FC = () => (
  <div className={`${cssPrefix}-header`}>
    <Link to={'add'} className={cssPrefixLink}>
      {Add}
    </Link>
  </div>
);

export default PoolHeader;
