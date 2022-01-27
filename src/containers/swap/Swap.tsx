import React from 'react';
import { SWAP } from '../../const';
import Exchange from '../exchange/Exchange';
import swapSelector from '../../store/swap/selectors';
import tokensSelector from '../../store/tokens/selectors';
import './Swap.css';
import { useAppSelector } from '../../hooks/hooks';

const cssPrefix = 'swap';

const Swap: React.FC = () => {
  const inputToken = useAppSelector(swapSelector.inputToken);
  const outputToken = useAppSelector(swapSelector.outputToken);

  const inTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, inputToken));
  const outTokenInfo = useAppSelector((state) => tokensSelector.tokenByAddress(state, outputToken));

  return (
    <div className={cssPrefix}>
      <Exchange buttonLabel={SWAP} inputTokenInfo={inTokenInfo} outputTokenInfo={outTokenInfo} />
    </div>
  );
};

export default Swap;
