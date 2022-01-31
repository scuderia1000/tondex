import React, { useEffect, useMemo } from 'react';
import { fetchPoolsAsync } from '../../store/pools';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './Stats.css';
import { StatsPoolsHeader } from '../../const';
import List from '../../components/list/List';
import poolsSelector from '../../store/pools/selectors';
import tokensSelector from '../../store/tokens/selectors';
import PoolRow from '../pool/list/row/PoolRow';

const cssPrefix = 'statistics';

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
          row: (
            <PoolRow
              firstTokenInfo={firstTokenInfo}
              secondTokenInfo={secondTokenInfo}
              data={pool}
            />
          ),
        };
      }),
    [poolsMap, tokensByAddress],
  );

  useEffect(() => {
    if (!Object.keys(poolsMap).length) {
      dispatch(fetchPoolsAsync());
    }
  }, []);

  return (
    <div className={cssPrefix}>
      <List items={pools} headerItems={Object.values(StatsPoolsHeader)} itemHeight={40} />
    </div>
  );
};

export default Stats;
