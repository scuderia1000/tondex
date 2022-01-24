import React from 'react';
import { Link } from 'react-router-dom';
import { cssPrefixLink } from '../../../components/header/workspace/WorkspaceHeader';
import { Add, Remove } from '../../../const';
import { cssPrefix } from '../Pool';
import './PoolHeader.css';

interface IProps {
  onRemoveClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const PoolHeader: React.FC<IProps> = ({ onRemoveClick }) => (
  <div className={`${cssPrefix}-header`}>
    <Link to={'add'} className={cssPrefixLink}>
      {Add}
    </Link>
    <Link to={'remove'} className={`${cssPrefixLink} disabled`} onClick={onRemoveClick}>
      {Remove}
    </Link>
  </div>
);

export default PoolHeader;
