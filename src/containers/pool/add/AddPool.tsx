import React from 'react';
import { useSelector } from 'react-redux';
import { AddLiquidity } from '../../../const';
import Exchange from '../../exchange/Exchange';
import tokensSelector from '../../../store/tokens/selectors';
import { RootState } from '../../../store';
import './AddPool.css';

const AddPool: React.FC = () => {
  const inputTokenInfo = useSelector((state: RootState) =>
    tokensSelector.tokenBySymbol(state, 'TONCOIN'),
  );

  return (
    <>
      <Exchange buttonLabel={AddLiquidity} inputTokenInfo={inputTokenInfo} />
    </>
  );
};

export default AddPool;
