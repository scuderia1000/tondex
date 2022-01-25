import React from 'react';
import { useSelector } from 'react-redux';
import { SWAP } from '../../const';
import Exchange from '../exchange/Exchange';
import swapSelector from '../../store/swap/selectors';
import './Swap.css';
import tokensSelector from '../../store/tokens/selectors';

const cssPrefix = 'swap';

const Swap: React.FC = () => {
  const inputToken = useSelector(swapSelector.inputToken);
  const outputToken = useSelector(swapSelector.outputToken);

  const inTokenInfo = useSelector(tokensSelector.tokensByAddress)[inputToken?.address];
  const outTokenInfo = useSelector(tokensSelector.tokensByAddress)[outputToken.address];

  return (
    <div className={cssPrefix}>
      <Exchange buttonLabel={SWAP} inputTokenInfo={inTokenInfo} outputTokenInfo={outTokenInfo} />
    </div>
  );
};

export default Swap;
