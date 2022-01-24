import React from 'react';
import { AddLiquidity } from '../../../const';
import tokens from '../../../mock/tokens.json';
import Exchange from '../../exchange/Exchange';
import './AddPool.css';

const tonToken = tokens.find((token) => token.symbol === 'TONCOIN');

const AddPool: React.FC = () => {
  console.log('add pool');

  return (
    <>
      <Exchange buttonLabel={AddLiquidity} firstToken={tonToken} />
    </>
  );
};

export default AddPool;
