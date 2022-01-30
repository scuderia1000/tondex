import React from 'react';
import PoolName, { IPoolNameProps } from '../../name/PoolName';
import { IPoolInfo } from '../../../../types';

export interface IPoolRowProps<T> extends IPoolNameProps {
  firstPoolToken: T;
  secondPoolToken: T;
}

const cssPrefix = 'pool-row';

const PoolRow: React.FC<IPoolRowProps<IPoolInfo>> = ({ firstTokenInfo, secondTokenInfo }) => {
  console.log('pool row');

  return (
    <div className={cssPrefix}>
      <PoolName firstTokenInfo={firstTokenInfo} secondTokenInfo={secondTokenInfo} />
      <div className={`${cssPrefix}`}>1</div>
    </div>
  );
};

export default PoolRow;
