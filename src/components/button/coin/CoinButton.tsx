import React, { useMemo } from 'react';
import './CoinButton.css';
import { ITokenInfo } from '../../../types';
import { SelectToken } from '../../../const';

interface IProps {
  token?: ITokenInfo;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({ token }) => {
  console.log('CoinButton');

  const tokenLabel = useMemo(() => {
    if (!token?.symbol) {
      return SelectToken;
    }

    return token?.symbol;
  }, [token?.symbol]);

  const tokenImage = useMemo(() => {
    if (!token?.logoURI) {
      return <></>;
    }

    return (
      <img className={`${cssPrefix}--image`} src={token.logoURI} alt={`${token?.symbol}-logo`} />
    );
  }, [token?.logoURI]);

  return (
    <button className={cssPrefix}>
      {tokenImage}
      <span className={`${cssPrefix}--label`}>{tokenLabel}</span>
    </button>
  );
};

export default CoinButton;
