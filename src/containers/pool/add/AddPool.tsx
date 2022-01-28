import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddLiquidity } from '../../../const';
import Exchange from '../../exchange/Exchange';
import tokensSelector from '../../../store/tokens/selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import swapSelector from '../../../store/swap/selectors';
import userPoolActions from '../../../store/user/actions';
import './AddPool.css';

const cssPrefix = 'add-pool';

const AddPool: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputToken = useAppSelector(swapSelector.inputToken);
  const outputToken = useAppSelector(swapSelector.outputToken);

  const inTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, inputToken));
  const outTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, outputToken));

  const handleAddPool = useCallback(() => {
    dispatch(userPoolActions.createPool());
    navigate(-1);
  }, [dispatch, navigate]);

  return (
    <div className={cssPrefix}>
      <Exchange
        buttonLabel={AddLiquidity}
        inputTokenInfo={inTokenInfo}
        outputTokenInfo={outTokenInfo}
        onConfirmClick={handleAddPool}
      />
    </div>
  );
};

export default AddPool;
