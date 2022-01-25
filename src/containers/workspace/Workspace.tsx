import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WorkspaceHeader from '../../components/header/workspace/WorkspaceHeader';
import Swap from '../swap/Swap';
import './Workspace.css';
import Pool from '../pool/Pool';
import AddPool from '../pool/add/AddPool';
import { fetchTokensAsync } from '../../store/tokens';

const cssPrefix = 'workspace';

const Workspace: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTokensAsync());
  }, []);

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
