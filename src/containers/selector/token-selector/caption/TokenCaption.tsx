import React from 'react';
import { ITokenInfo } from '../../../../types';
import './TokenCaption.css';

interface IProps {
  token: ITokenInfo;
}

const cssPrefix = 'token-caption';

const TokenCaption: React.FC<IProps> = ({ token }) => (
  <div className={cssPrefix}>
    <span className={`${cssPrefix}--label`}>{token.symbol}</span>
    <span className={`${cssPrefix}--sub-label`}>{token.name}</span>
  </div>
);

export default TokenCaption;
