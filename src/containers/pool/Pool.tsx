import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PoolHeader from './header/PoolHeader';
import './Pool.css';
import EmptyList from './empty/EmptyList';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import userSelector from '../../store/user/selectors';
import tokensSelector from '../../store/tokens/selectors';
import UserPoolRow from './list/row/user/UserPoolRow';
import { Add, UserPoolsHeader } from '../../const';
import { ITokenInfo, MouseEvent } from '../../types';
import List from '../../components/list/List';
import { IListItem } from '../../components/list/item/ListItem';
import swapActions from '../../store/swap/actions';

export const cssPrefix = 'pool';
export const cssPrefixPools = `${cssPrefix}-list`;

const Pool: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userPools = useAppSelector(userSelector.pools);
  const tokensByAddress = useAppSelector(tokensSelector.tokensByAddress);

  const onRemovePool = useCallback(
    (poolAddress: string) => {
      navigate(`remove/${poolAddress}`);
    },
    [navigate],
  );

  const handleItemClick = useCallback(
    (event: MouseEvent, item?: IListItem<ITokenInfo>) => {
      dispatch(swapActions.setInOutTokens(item?.id));
      navigate(`add/${item?.id}`);
    },
    [dispatch, navigate],
  );

  const pools = useMemo(
    () =>
      Object.keys(userPools).map((key) => {
        const pair = userPools[key];
        const { firstToken, secondToken } = pair;
        const firstTokenInfo = tokensByAddress[firstToken.address];
        const secondTokenInfo = tokensByAddress[secondToken.address];
        const data = {
          firstToken,
          secondToken,
        };
        return {
          id: key,
          row: (
            <UserPoolRow
              poolAddress={key}
              firstTokenInfo={firstTokenInfo}
              secondTokenInfo={secondTokenInfo}
              data={data}
              onRemove={onRemovePool}
            />
          ),
        };
      }),
    [onRemovePool, tokensByAddress, userPools],
  );

  return (
    <div className={cssPrefix}>
      <PoolHeader linkTo={'add'} label={Add} />
      <main className={cssPrefixPools}>
        {pools.length ? (
          <List
            items={pools}
            headerItems={Object.values(UserPoolsHeader)}
            onItemClick={handleItemClick}
            itemHeight={36}
          />
        ) : (
          <EmptyList />
        )}
      </main>
    </div>
  );
};

export default Pool;
