import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PoolHeader from './header/PoolHeader';
import './Pool.css';
import EmptyList from './empty/EmptyList';
import { useAppSelector } from '../../hooks/hooks';
import userSelector from '../../store/user/selectors';
import tokensSelector from '../../store/tokens/selectors';
import List from '../../components/list/List';
import PoolRow from './row-item/PoolRow';

export const cssPrefix = 'pool';
export const cssPrefixPools = `${cssPrefix}-list`;

const Pool: React.FC = () => {
  const navigate = useNavigate();
  const userPools = useAppSelector(userSelector.pools);
  const tokensByAddress = useAppSelector(tokensSelector.tokensByAddress);

  const onRemovePool = useCallback(
    (poolAddress: string) => {
      navigate(`remove/${poolAddress}`);
    },
    [navigate],
  );

  const pools = useMemo(
    () =>
      Object.keys(userPools).map((key) => {
        const pair = userPools[key];
        const { firstToken, secondToken } = pair;
        const firstTokenInfo = tokensByAddress[firstToken.address];
        const secondTokenInfo = tokensByAddress[secondToken.address];
        return {
          id: key,
          caption: (
            <PoolRow
              poolAddress={key}
              firstTokenInfo={firstTokenInfo}
              secondTokenInfo={secondTokenInfo}
              firstPoolToken={firstToken}
              secondPoolToken={secondToken}
              onRemove={onRemovePool}
            />
          ),
        };
      }),
    [onRemovePool, tokensByAddress, userPools],
  );

  return (
    <div className={cssPrefix}>
      <PoolHeader />
      <main className={cssPrefixPools}>
        {pools.length ? <List items={pools} /> : <EmptyList />}
      </main>
    </div>
  );
};

export default Pool;
