import React, { useCallback, useState } from 'react';
import './TokenSelector.css';
import Input from '../../../components/input/Input';
import { IInputChangeArgs } from '../../../types';

const cssPrefix = 'token-selector';

const TokenSelector: React.FC = () => {
  const [value, setValue] = useState('');

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
    </div>
  );
};

export default TokenSelector;
