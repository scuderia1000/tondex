import React, { useEffect, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import WorkspaceHeader from '../../components/header/workspace/WorkspaceHeader';
import Swap from '../swap/Swap';
import './Workspace.css';
import Pool from '../pool/Pool';
import AddPool from '../pool/add/AddPool';
import { fetchTokensAsync } from '../../store/tokens';
import { useAppDispatch } from '../../hooks/hooks';
import RemovePool from '../pool/remove/RemovePool';
import Stats from '../stats/Stats';

const cssPrefix = 'workspace';

const Workspace: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const currentPath = useMemo(() => location.pathname.split('/')?.[1], [location.pathname]);

  useEffect(() => {
    dispatch(fetchTokensAsync());
  }, []);

  return (
    <div className={cssPrefix}>
      <div className={`${currentPath} ${cssPrefix}-container`}>
        <WorkspaceHeader />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="pool" element={<Pool />} />
          <Route path="stats" element={<Stats />} />
          <Route path="pool/add/*" element={<AddPool />} />
          <Route path="pool/remove">
            <Route path=":poolAddress" element={<RemovePool />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Workspace;
