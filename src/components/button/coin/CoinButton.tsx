import React, { useMemo } from 'react';
import './CoinButton.css';
import classNames from 'classnames';
import { SelectToken } from '../../../const';
import ImageFallback from '../../image/ImageFallback';
import { EFieldType } from '../../../types';

interface IProps {
  symbol?: string;
  logoURI?: string;
  onClick?(swapType: EFieldType): void;
  tokenSwapType?: EFieldType;
  disabled?: boolean;
}

const cssPrefix = 'coin-button';

const CoinButton: React.FC<IProps> = ({
  symbol,
  logoURI,
  onClick,
  tokenSwapType = EFieldType.IN,
  disabled = false,
}) => {
  const classes = classNames({
    [cssPrefix]: true,
    [`${cssPrefix} disabled`]: disabled,
  });

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

  const handleButtonClick = () => {
    if (!disabled && onClick) {
      onClick(tokenSwapType);
    }
  };

  return (
    <button className={classes} onClick={handleButtonClick}>
      {tokenImage}
      <span className={`${cssPrefix}--label`}>{tokenLabel}</span>
    </button>
  );
};

export default CoinButton;
