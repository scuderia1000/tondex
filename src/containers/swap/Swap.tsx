import React, { useCallback } from 'react';
import { SWAP } from '../../const';
import Exchange from '../exchange/Exchange';
import swapSelector from '../../store/swap/selectors';
import tokensSelector from '../../store/tokens/selectors';
import './Swap.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSwapTokensAsync } from '../../store/swap';

const cssPrefix = 'swap';

const Swap: React.FC = () => {
  const dispatch = useAppDispatch();

  const inputToken = useAppSelector(swapSelector.inputToken);
  const outputToken = useAppSelector(swapSelector.outputToken);

  const inTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, inputToken));
  const outTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, outputToken));

  const onConfirmClick = useCallback(() => {
    dispatch(fetchSwapTokensAsync());
  }, [dispatch]);

  return (
    <div className={cssPrefix}>
      <Exchange
        confirmLabel={SWAP}
        inputTokenInfo={inTokenInfo}
        outputTokenInfo={outTokenInfo}
        onConfirmClick={onConfirmClick}
      />
    </div>
  );
};

export default Swap;
