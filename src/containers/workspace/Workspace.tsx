import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WorkspaceHeader from '../../components/header/workspace/WorkspaceHeader';
import Swap from '../swap/Swap';
import './Workspace.css';
import Pool from '../pool/Pool';
import AddPool from '../pool/add/AddPool';

const cssPrefix = 'workspace';

const Workspace: React.FC = () => {
  console.log('workspace');

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <WorkspaceHeader />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="pool" element={<Pool />} />
          <Route path="pool/add" element={<AddPool />} />
          <Route path="pool/remove" element={<AddPool />} />
        </Routes>
      </div>
    </div>
  );
};

export default Workspace;
