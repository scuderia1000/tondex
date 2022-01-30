import React, { useEffect, useMemo } from 'react';
import { fetchPoolsAsync } from '../../store/pools';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './Stats.css';
import { PoolListHeader } from '../../const';
import List from '../../components/list/List';
import poolsSelector from '../../store/pools/selectors';
import tokensSelector from '../../store/tokens/selectors';
import PoolRow from '../pool/list/row/PoolRow';

const cssPrefix = 'stats';

const Stats: React.FC = () => {
  const dispatch = useAppDispatch();

  const poolsMap = useAppSelector(poolsSelector.poolsMap);
  const tokensByAddress = useAppSelector(tokensSelector.tokensByAddress);

  const pools = useMemo(
    () =>
      Object.keys(poolsMap).map((key) => {
        const pool = poolsMap[key];
        const firstTokenInfo = tokensByAddress[pool.token0.id];
        const secondTokenInfo = tokensByAddress[pool.token1.id];
        return {
          id: key,
          caption: (
            <PoolRow
              firstTokenInfo={firstTokenInfo}
              secondTokenInfo={secondTokenInfo}
              firstPoolToken={poolsMap[pool.token0.id]}
              secondPoolToken={poolsMap[pool.token1.id]}
            />
          ),
        };
      }),
    [poolsMap, tokensByAddress],
  );

  useEffect(() => {
    dispatch(fetchPoolsAsync());
  }, []);

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}--header`}>
        <div>{PoolListHeader.Name}</div>
        <div>{PoolListHeader.Volume}</div>
      </div>
      <List items={pools} />
    </div>
  );
};

export default Stats;
