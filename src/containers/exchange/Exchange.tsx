import React, { useCallback, useMemo, useState } from 'react';
import ChangeButton from '../../components/button/change/ChangeButton';
import Button from '../../components/button/Button';
import { IInputChangeArgs, ITokenInfo } from '../../types';
import './Exchange.css';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import TokenSelector from '../selector/token-selector/TokenSelector';
import { SelectToken } from '../../const';
import CoinButton from '../../components/button/coin/CoinButton';
import TokenInput from '../swap/input/TokenInput';

interface IProps {
  inputTokenInfo?: ITokenInfo;
  outputTokenInfo?: ITokenInfo;
  buttonLabel?: string;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({ buttonLabel, inputTokenInfo, outputTokenInfo }) => {
  const [modalIsVisible, toggleModalVisibility] = useModal();

  const [inputValue, setInputValue] = useState('0');
  const [outputValue, setOutputValue] = useState('0');

  const handleInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setInputValue(value);
    },
    [],
  );

  const handleOutputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setOutputValue(value);
    },
    [],
  );

  const tokenSelector = useMemo(() => <TokenSelector />, []);

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <div>
          <TokenInput
            value={inputValue}
            type={'number'}
            onChange={handleInputValueChange}
            leftComponent={
              <CoinButton
                symbol={inputTokenInfo?.symbol}
                logoURI={inputTokenInfo?.logoURI}
                onSelectTokenClick={toggleModalVisibility}
              />
            }
          />
          <ChangeButton />
          <TokenInput
            value={outputValue}
            type={'number'}
            onChange={handleOutputValueChange}
            leftComponent={
              <CoinButton
                symbol={outputTokenInfo?.symbol}
                logoURI={outputTokenInfo?.logoURI}
                onSelectTokenClick={toggleModalVisibility}
              />
            }
          />
        </div>
        <Button label={buttonLabel} />
      </div>
      <Modal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
        modalContent={tokenSelector}
        label={SelectToken}
      />
    </div>
  );
};
export default Exchange;
