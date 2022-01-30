import React, { useMemo } from 'react';
import './UserPoolRow.css';
import { ReactComponent as Remove } from '../../../../../components/assets/svg/remove.svg';
import PoolName from '../../../name/PoolName';
import { IPoolRowProps } from '../PoolRow';
import { IPoolToken } from '../../../../../store/types';

interface IProps extends IPoolRowProps<IPoolToken> {
  poolAddress: string;
  onRemove: (poolAddress: string) => void;
}

const cssPrefix = 'user-pool-row';

const UserPoolRow: React.FC<IProps> = ({
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
      <PoolName firstTokenInfo={firstTokenInfo} secondTokenInfo={secondTokenInfo} />
      <div className={`${cssPrefix}--amount`}>{`$${poolPriceUSD.toFixed(2)}`}</div>
      <div className={`${cssPrefix}--remove`} onClick={handleRemove}>
        <Remove className={`${cssPrefix}--icon`} />
      </div>
    </div>
  );
};

export default UserPoolRow;
