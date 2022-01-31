import React, { useMemo } from 'react';
import './UserPoolRow.css';
import { ReactComponent as Remove } from '../../../../../components/assets/svg/remove.svg';
import PoolName from '../../../name/PoolName';
import { IPoolRowProps } from '../PoolRow';
import { IUserPool, MouseEvent } from '../../../../../types';

interface IProps extends IPoolRowProps<IUserPool> {
  poolAddress: string;
  onRemove: (poolAddress: string) => void;
}

const cssPrefix = 'user-pool-row';

const UserPoolRow: React.FC<IProps> = ({
  firstTokenInfo,
  secondTokenInfo,
  data = {},
  onRemove,
  poolAddress,
}) => {
  const { firstToken, secondToken } = data;
  const handleRemove = (event: MouseEvent) => {
    onRemove(poolAddress);
    event.stopPropagation();
  };

  const poolPriceUSD = useMemo(
    () =>
      Number(firstToken?.price) * Number(firstToken?.tokensAmount) +
      Number(secondToken?.price) * Number(secondToken?.tokensAmount),
    [firstToken?.price, firstToken?.tokensAmount, secondToken?.price, secondToken?.tokensAmount],
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
