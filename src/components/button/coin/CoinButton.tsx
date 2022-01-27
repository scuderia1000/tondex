import React, { useMemo } from 'react';
import './CoinButton.css';
import { SelectToken } from '../../../const';
import ImageFallback from '../../image/ImageFallback';

interface IProps {
  symbol?: string;
  logoURI?: string;
  onSelectTokenClick?(): void;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({ symbol, logoURI, onSelectTokenClick }) => {
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

    return <ImageFallback src={logoURI} alt={`${symbol}-logo`} />;
  }, [logoURI, symbol]);

  return (
    <button className={cssPrefix} onClick={onSelectTokenClick}>
      {tokenImage}
      <span className={`${cssPrefix}--label`}>{tokenLabel}</span>
    </button>
  );
};

export default CoinButton;
