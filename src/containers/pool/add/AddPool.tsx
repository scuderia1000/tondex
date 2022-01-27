import React from 'react';
import { AddLiquidity } from '../../../const';
import Exchange from '../../exchange/Exchange';
import tokensSelector from '../../../store/tokens/selectors';
import { useAppSelector } from '../../../hooks/hooks';
import './AddPool.css';
import swapSelector from '../../../store/swap/selectors';

const AddPool: React.FC = () => {
  const inputToken = useAppSelector(swapSelector.inputToken);
  const outputToken = useAppSelector(swapSelector.outputToken);

  const inTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, inputToken));
  const outTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, outputToken));

  return (
    <>
      <Exchange
        buttonLabel={AddLiquidity}
        inputTokenInfo={inTokenInfo}
        outputTokenInfo={outTokenInfo}
      />
    </>
  );
};

export default AddPool;
