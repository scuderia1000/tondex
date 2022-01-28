import React, { useCallback, useMemo, useState } from 'react';
import './TokenSelector.css';
import Input from '../../../components/input/Input';
import { IInputChangeArgs, ITokenInfo, MouseEvent } from '../../../types';
import List from '../../../components/list/List';
import { useAppSelector } from '../../../hooks/hooks';
import tokensSelector from '../../../store/tokens/selectors';
import { IListItem } from '../../../components/list/item/ListItem';
import TokenCaption from './caption/TokenCaption';
import { EnterTokenName } from '../../../const';

interface IProps {
  onSelectToken: (item?: IListItem<ITokenInfo>) => void;
  disabledItems?: string[];
}

const cssPrefix = 'token-selector';

const TokenSelector: React.FC<IProps> = ({ onSelectToken, disabledItems }) => {
  const tokensByAddress = useAppSelector(tokensSelector.tokensByAddress);
  const [value, setValue] = useState('');

  const tokens = useMemo(
    (): IListItem<ITokenInfo>[] =>
      Object.keys(tokensByAddress)
        .map((address) => ({
          id: address,
          caption: <TokenCaption token={tokensByAddress[address]} />,
          logoURI: tokensByAddress[address].logoURI,
          disabled: disabledItems?.includes(address),
          data: tokensByAddress[address],
        }))
        .filter((listItem: IListItem<ITokenInfo>) =>
          value
            ? listItem.data?.name?.toLocaleLowerCase().includes(value) ||
              listItem.data?.symbol.toLocaleLowerCase().includes(value)
            : true,
        ),
    [disabledItems, tokensByAddress, value],
  );

  const handleChangeInputValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setValue(value);
    },
    [],
  );

  const handleItemClick = useCallback(
    (event: MouseEvent, item?: IListItem<ITokenInfo>) => {
      onSelectToken(item);
    },
    [onSelectToken],
  );

  return (
    <div className={cssPrefix}>
      <Input
        value={value}
        onChange={handleChangeInputValue}
        textAlign={'left'}
        placeholder={EnterTokenName}
      />
      <List items={tokens} onItemClick={handleItemClick} />
    </div>
  );
};

export default TokenSelector;
