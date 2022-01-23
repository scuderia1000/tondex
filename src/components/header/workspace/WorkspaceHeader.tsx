import React from 'react';
import './WorkspaceHeader.css';

const cssPrefixHeader = 'workspace-header';

const WorkspaceHeader: React.FC = () => {
  console.log('WorkspaceHeader');

  return (
    <div className={cssPrefixHeader}>
      <a href={'/'} className={`${cssPrefixHeader}__link active`}>
        Swap
      </a>
      <a href={'/'} className={`${cssPrefixHeader}__link`}>
        Pool
      </a>
    </div>
  );
};

export default WorkspaceHeader;
