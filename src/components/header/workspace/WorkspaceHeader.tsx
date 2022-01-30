import React from 'react';
import { NavLink } from 'react-router-dom';
import { POOL, STATS, SWAP } from '../../../const';
import './WorkspaceHeader.css';

const cssPrefixHeader = 'workspace-header';
export const cssPrefixLink = 'link';

const WorkspaceHeader: React.FC = () => (
  <nav className={cssPrefixHeader}>
    <NavLink
      to={''}
      className={({ isActive }) => (isActive ? `${cssPrefixLink} active` : cssPrefixLink)}
    >
      {SWAP}
    </NavLink>
    <NavLink
      to={'pool'}
      className={({ isActive }) => (isActive ? `${cssPrefixLink} active` : cssPrefixLink)}
    >
      {POOL}
    </NavLink>
    <NavLink
      to={'stats'}
      className={({ isActive }) => (isActive ? `${cssPrefixLink} active` : cssPrefixLink)}
    >
      {STATS}
    </NavLink>
  </nav>
);

export default WorkspaceHeader;
