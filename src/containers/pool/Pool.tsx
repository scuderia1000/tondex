import React, { useCallback, useMemo } from 'react';
import PoolHeader from './header/PoolHeader';
import './Pool.css';
import { IUserPool } from '../../types';
import EmptyList from './empty/EmptyList';

export const cssPrefix = 'pool';
export const cssPrefixPools = `${cssPrefix}-list`;

const Pool: React.FC = () => {
  const isRemoveDisable = true;
  const userPools: IUserPool[] = [];
  const pools = useMemo(
    () =>
      userPools.map((pool) => (
        <div key={`${pool?.symbol}`} className={`${cssPrefixPools}--item`}>
          {pool?.symbol}
        </div>
      )),
    [userPools],
  );

  const handleRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isRemoveDisable) {
        event.preventDefault();
      }
    },
    [isRemoveDisable],
  );

  return (
    <div className={cssPrefix}>
      <PoolHeader onRemoveClick={handleRemoveClick} />
      <main className={cssPrefixPools}>{pools.length ? pools : <EmptyList />}</main>
    </div>
  );
};

export default Pool;
