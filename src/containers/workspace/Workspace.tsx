import React from 'react';
import './Workspace.css';
import WorkspaceHeader from '../../components/header/workspace/WorkspaceHeader';
import Swap from '../swap/Swap';

const cssPrefix = 'workspace';

const Workspace: React.FC = () => {
  console.log('workspace');

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <WorkspaceHeader />
        <Swap />
      </div>
    </div>
  );
};

export default Workspace;
