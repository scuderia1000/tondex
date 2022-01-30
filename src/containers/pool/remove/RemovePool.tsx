import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RemoveLiquidity } from '../../../const';
import Exchange from '../../exchange/Exchange';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import tokensSelector from '../../../store/tokens/selectors';
import userSelector from '../../../store/user/selectors';
import userActions from '../../../store/user/actions';
import swapActions from '../../../store/swap/actions';
import { ReactComponent as Arrow } from '../../../components/assets/svg/arrow_back.svg';
import PoolHeader from '../header/PoolHeader';

const cssPrefix = 'remove-pool';

const RemovePool: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const poolAddress = params?.poolAddress ?? '';

  const pool = useAppSelector((state) => userSelector.poolById(state, poolAddress));
  const inTokenInfo = useAppSelector((state) =>
    tokensSelector.tokenByAddress(state, pool?.firstToken?.address),
  );
  const outTokenInfo = useAppSelector((state) =>
    tokensSelector.tokenByAddress(state, pool?.secondToken?.address),
  );

  const handleRemovePool = useCallback(() => {
    dispatch(userActions.removePoolLiquidity(poolAddress));
    navigate(-1);
  }, [dispatch, navigate, poolAddress]);

  useEffect(() => {
    dispatch(swapActions.updatePairPriceByPool(params?.poolAddress ?? ''));
  }, []);

  return (
    <div className={cssPrefix}>
      <PoolHeader linkTo={'../../pool'} label={<Arrow />} />
      <Exchange
        confirmLabel={RemoveLiquidity}
        inputTokenInfo={inTokenInfo}
        outputTokenInfo={outTokenInfo}
        onConfirmClick={handleRemovePool}
        isCoinButtonsDisabled={true}
        inMaxValue={pool?.firstToken?.tokensAmount}
        outMaxValue={pool?.secondToken?.tokensAmount}
      />
    </div>
  );
};

export default RemovePool;
