import React from 'react';
import ImageFallback from '../../../components/image/ImageFallback';
import './PoolName.css';
import { ITokenInfo } from '../../../types';

export interface IPoolNameProps {
  firstTokenInfo: ITokenInfo;
  secondTokenInfo: ITokenInfo;
}

const cssPrefix = 'pool-name';

const PoolName: React.FC<IPoolNameProps> = ({ firstTokenInfo, secondTokenInfo }) => (
  <div className={cssPrefix}>
    <ImageFallback src={firstTokenInfo?.logoURI} alt={`${firstTokenInfo?.id}-logo`} />
    <ImageFallback src={secondTokenInfo?.logoURI} alt={`${secondTokenInfo?.id}-logo`} />
    <div>{`${firstTokenInfo?.symbol}/${secondTokenInfo?.symbol}`}</div>
  </div>
);

export default PoolName;
