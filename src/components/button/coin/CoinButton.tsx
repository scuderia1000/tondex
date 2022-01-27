import React, { useMemo } from 'react';
import './CoinButton.css';
import { SelectToken } from '../../../const';
import ImageFallback from '../../image/ImageFallback';
import { EFieldType } from '../../../types';

interface IProps {
  symbol?: string;
  logoURI?: string;
  onClick?(swapType: EFieldType): void;
  tokenSwapType?: EFieldType;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({
  symbol,
  logoURI,
  onClick,
  tokenSwapType = EFieldType.IN,
}) => {
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

  const handleButtonClick = () => onClick?.(tokenSwapType);

  return (
    <button className={cssPrefix} onClick={handleButtonClick}>
      {tokenImage}
      <span className={`${cssPrefix}--label`}>{tokenLabel}</span>
    </button>
  );
};

export default CoinButton;
