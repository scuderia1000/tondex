import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ChangeButton from '../../components/button/change/ChangeButton';
import Button from '../../components/button/Button';
import { EFieldType, IInputChangeArgs, ITokenInfo } from '../../types';
import './Exchange.css';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import TokenSelector from '../selector/token-selector/TokenSelector';
import { SelectToken } from '../../const';
import CoinButton from '../../components/button/coin/CoinButton';
import TokenInput from '../swap/input/TokenInput';
import { IListItem } from '../../components/list/item/ListItem';
import { clear, setFieldType, setInputToken, setOutputToken } from '../../store/swap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import swapSelector from '../../store/swap/selectors';

interface IProps {
  inputTokenInfo?: ITokenInfo;
  outputTokenInfo?: ITokenInfo;
  buttonLabel?: string;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({ buttonLabel, inputTokenInfo, outputTokenInfo }) => {
  const dispatch = useAppDispatch();

  const [modalIsVisible, toggleModalVisibility] = useModal();

  const fieldType = useAppSelector(swapSelector.fieldType);

  const [inputValue, setInputValue] = useState('0');
  const [outputValue, setOutputValue] = useState('0');

  const handleInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setInputValue(value);
      dispatch(setFieldType(EFieldType.IN));
    },
    [dispatch],
  );

  const handleOutputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      const value = args?.value ?? '';
      setOutputValue(value);
      dispatch(setFieldType(EFieldType.OUT));
    },
    [dispatch],
  );

  const handleSelectToken = useCallback(
    (item?: IListItem<ITokenInfo>) => {
      if (!item) {
        toggleModalVisibility();
        return;
      }

      const address = item.data?.address ?? '';
      if (fieldType === EFieldType.IN) {
        dispatch(setInputToken(address));
      } else {
        dispatch(setOutputToken(address));
      }
      toggleModalVisibility();
    },
    [fieldType, toggleModalVisibility, dispatch],
  );

  const handleSelectTokenButtonClick = useCallback(
    (swapType: EFieldType) => {
      dispatch(setFieldType(swapType));
      toggleModalVisibility();
    },
    [dispatch, toggleModalVisibility],
  );

  const disabledItems = useMemo(
    () => [inputTokenInfo?.address ?? '', outputTokenInfo?.address ?? ''],
    [inputTokenInfo?.address, outputTokenInfo?.address],
  );

  const tokenSelector = useMemo(
    () => <TokenSelector onSelectToken={handleSelectToken} disabledItems={disabledItems} />,
    [disabledItems, handleSelectToken],
  );

  useEffect(
    () => () => {
      dispatch(clear());
    },
    [],
  );

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
                tokenSwapType={EFieldType.IN}
                onClick={handleSelectTokenButtonClick}
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
                tokenSwapType={EFieldType.OUT}
                onClick={handleSelectTokenButtonClick}
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
