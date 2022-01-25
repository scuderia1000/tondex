import React, { useMemo } from 'react';
import './CoinButton.css';
import { SelectToken } from '../../../const';

interface IProps {
  symbol?: string;
  logoURI?: string;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({ symbol, logoURI }) => {
  const tokenLabel = useMemo(() => {
    if (!symbol) {
      return SelectToken;
    }

    return symbol;
  }, [symbol]);

  const tokenImage = useMemo(() => {
    if (!logoURI) {
      return <></>;
    }

    return <img className={`${cssPrefix}--image`} src={logoURI} alt={`${symbol}-logo`} />;
  }, [logoURI, symbol]);

  return (
    <button className={cssPrefix}>
      {tokenImage}
      <span className={`${cssPrefix}--label`}>{tokenLabel}</span>
    </button>
  );
};

export default CoinButton;
