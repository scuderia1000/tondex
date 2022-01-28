import React, { useMemo } from 'react';
import './PoolRow.css';
import { ITokenInfo } from '../../../types';
import { IPoolToken } from '../../../store/types';
import ImageFallback from '../../../components/image/ImageFallback';
import { ReactComponent as Remove } from '../../../components/assets/svg/remove.svg';

interface IProps {
  poolAddress: string;
  firstTokenInfo: ITokenInfo;
  firstPoolToken: IPoolToken;
  secondTokenInfo: ITokenInfo;
  secondPoolToken: IPoolToken;
  onRemove: (poolAddress: string) => void;
}

const cssPrefix = 'pool-row';

const PoolRow: React.FC<IProps> = ({
  firstTokenInfo,
  firstPoolToken,
  secondTokenInfo,
  secondPoolToken,
  onRemove,
  poolAddress,
}) => {
  const handleRemove = () => {
    onRemove(poolAddress);
  };

  const poolPriceUSD = useMemo(
    () =>
      Number(firstPoolToken.price) * Number(firstPoolToken.tokensAmount) +
      Number(secondPoolToken.price) * Number(secondPoolToken.tokensAmount),
    [
      firstPoolToken.price,
      firstPoolToken.tokensAmount,
      secondPoolToken.price,
      secondPoolToken.tokensAmount,
    ],
  );
  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}--icons`}>
        <ImageFallback src={firstTokenInfo?.logoURI} alt={`${firstTokenInfo?.id}-logo`} />
        <ImageFallback src={secondTokenInfo?.logoURI} alt={`${secondTokenInfo?.id}-logo`} />
      </div>
      <div>{`${firstTokenInfo?.symbol}/${secondTokenInfo?.symbol}`}</div>
      <div className={`${cssPrefix}--amount`}>{`$${poolPriceUSD.toFixed(2)}`}</div>
      <div className={`${cssPrefix}--remove`} onClick={handleRemove}>
        <Remove className={`${cssPrefix}--icon`} />
      </div>
    </div>
  );
};

export default PoolRow;
