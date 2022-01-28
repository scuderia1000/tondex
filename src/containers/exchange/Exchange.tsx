import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { batch } from 'react-redux';
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
import swapActions from '../../store/swap/actions';

interface IProps {
  inputTokenInfo?: ITokenInfo;
  outputTokenInfo?: ITokenInfo;
  buttonLabel?: string;
  onConfirmClick?: () => void;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({
  buttonLabel,
  inputTokenInfo,
  outputTokenInfo,
  onConfirmClick,
}) => {
  const dispatch = useAppDispatch();

  const [modalIsVisible, toggleModalVisibility] = useModal();

  const fieldType = useAppSelector(swapSelector.fieldType);
  const swapPrice = useAppSelector(swapSelector.price);

  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [clickedButton, setClickedButton] = useState<EFieldType>(EFieldType.IN);

  const inputChange = useCallback(
    (fieldType: EFieldType, value = '') => {
      if (fieldType === EFieldType.IN) {
        setInputValue(value);
      } else {
        setOutputValue(value);
      }
      batch(() => {
        dispatch(swapActions.setValue(value));
        dispatch(setFieldType(fieldType));
        dispatch(swapActions.loadPairPrice());
      });
    },
    [dispatch],
  );

  const handleInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      inputChange(EFieldType.IN, args?.value);
    },
    [inputChange],
  );

  const handleOutputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, args?: IInputChangeArgs) => {
      inputChange(EFieldType.OUT, args?.value);
    },
    [inputChange],
  );

  const handleSelectToken = useCallback(
    (item?: IListItem<ITokenInfo>) => {
      if (!item) {
        toggleModalVisibility();
        return;
      }

      const address = item.data?.address ?? '';
      batch(() => {
        if (clickedButton === EFieldType.IN) {
          dispatch(setInputToken(address));
        } else {
          dispatch(setOutputToken(address));
        }
        dispatch(swapActions.loadPairPrice());
      });
      toggleModalVisibility();
    },
    [toggleModalVisibility, clickedButton, dispatch],
  );

  const handleSelectTokenButtonClick = useCallback(
    (swapType: EFieldType) => {
      setClickedButton(swapType);
      toggleModalVisibility();
    },
    [toggleModalVisibility],
  );

  const disabledItems = useMemo(
    () => [inputTokenInfo?.address ?? '', outputTokenInfo?.address ?? ''],
    [inputTokenInfo?.address, outputTokenInfo?.address],
  );

  const tokenSelector = useMemo(
    () => <TokenSelector onSelectToken={handleSelectToken} disabledItems={disabledItems} />,
    [disabledItems, handleSelectToken],
  );

  const inOutValues = useMemo(() => {
    const price = Number(swapPrice.price) ? swapPrice.price : '';
    if (fieldType === EFieldType.OUT) {
      return {
        in: price,
        out: outputValue,
      };
    }
    return {
      in: inputValue,
      out: price,
    };
  }, [fieldType, inputValue, outputValue, swapPrice.price]);

  const isConfirmButtonDisabled = useMemo(
    () => !(Number(inOutValues.in) && Number(inOutValues.out)),
    [inOutValues.in, inOutValues.out],
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
            type={'number'}
            value={inOutValues.in}
            price={swapPrice.inCostUSD}
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
            type={'number'}
            value={inOutValues.out}
            price={swapPrice.outCostUSD}
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
        <Button label={buttonLabel} onClick={onConfirmClick} disabled={isConfirmButtonDisabled} />
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
