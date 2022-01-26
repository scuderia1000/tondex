import React, { useCallback, useMemo, useState } from 'react';
import './TokenSelector.css';
import Input from '../../../components/input/Input';
import { IInputChangeArgs, ITokenInfo } from '../../../types';
import List from '../../../components/list/List';
import { useAppSelector } from '../../../hooks/hooks';
import tokensSelector from '../../../store/tokens/selectors';
import { IListItem } from '../../../components/list/item/ListItem';

const cssPrefix = 'token-selector';

const TokenSelector: React.FC = () => {
  const tokensByAddress = useAppSelector(tokensSelector.tokensByAddress);
  const [value, setValue] = useState('');

  const tokens = useMemo(
    (): IListItem<ITokenInfo>[] =>
      Object.keys(tokensByAddress).map((address) => ({
        id: address,
        caption: tokensByAddress[address].name,
        logoURI: tokensByAddress[address].logoURI,
        data: tokensByAddress[address],
      })),
    [tokensByAddress],
  );

  const handleChangeInputValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setValue(value);
    },
    [],
  );

  return (
    <div className={cssPrefix}>
      <Input value={value} onChange={handleChangeInputValue} textAlign={'left'} />
      <List items={tokens} />
    </div>
  );
};

export default TokenSelector;
