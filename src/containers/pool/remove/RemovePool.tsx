import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RemovePool.css';
import { RemoveLiquidity } from '../../../const';
import Exchange from '../../exchange/Exchange';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
// import swapSelector from '../../../store/swap/selectors';
import tokensSelector from '../../../store/tokens/selectors';
import userSelector from '../../../store/user/selectors';
import swapActions from '../../../store/swap/actions';

const cssPrefix = 'remove-pool';

const RemovePool: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const pool = useAppSelector((state) => userSelector.poolById(state, params?.poolAddress ?? ''));

  // const inputToken = useAppSelector(swapSelector.inputToken);
  // const outputToken = useAppSelector(swapSelector.outputToken);

  const inTokenInfo = useAppSelector((state) =>
    tokensSelector.tokenByAddress(state, pool.firstToken.address),
  );
  const outTokenInfo = useAppSelector((state) =>
    tokensSelector.tokenByAddress(state, pool.secondToken.address),
  );

  const handleRemovePool = useCallback(() => {
    console.log('remove');
  }, []);

  useEffect(() => {
    dispatch(swapActions.updatePairPriceByPool(params?.poolAddress ?? ''));
  }, []);

  return (
    <div className={cssPrefix}>
      <Exchange
        buttonLabel={RemoveLiquidity}
        inputTokenInfo={inTokenInfo}
        outputTokenInfo={outTokenInfo}
        onConfirmClick={handleRemovePool}
      />
    </div>
  );
};

export default RemovePool;
