import React from 'react';
import PoolName, { IPoolNameProps } from '../../name/PoolName';
import { IPoolInfo } from '../../../../types';
import './PoolRow.css';
import { numberFormat } from '../../../../util';

export interface IPoolRowProps<T> extends IPoolNameProps {
  className?: string;
  data?: T;
  headerItems?: string[];
}

const cssPrefix = 'pool-row';

const PoolRow: React.FC<IPoolRowProps<IPoolInfo>> = ({
  data = {},
  firstTokenInfo,
  secondTokenInfo,
}) => (
  <div className={cssPrefix}>
    <PoolName firstTokenInfo={firstTokenInfo} secondTokenInfo={secondTokenInfo} />
    <div className={`${cssPrefix}--item`}>{numberFormat(Number(data.totalValueLockedUSD))}</div>
    <div className={`${cssPrefix}--item`}>{numberFormat(Number(data.volumeUSD))}</div>
    <div className={`${cssPrefix}--item`}>{numberFormat(Number(data.volumeUSDWeek))}</div>
  </div>
);

export default PoolRow;
