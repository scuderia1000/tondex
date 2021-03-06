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
  confirmLabel?: string;
  onConfirmClick?: () => void;
  isCoinButtonsDisabled?: boolean;
  inMaxValue?: string;
  outMaxValue?: string;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({
  confirmLabel,
  inputTokenInfo,
  outputTokenInfo,
  onConfirmClick,
  isCoinButtonsDisabled,
  inMaxValue,
  outMaxValue,
}) => {
  const dispatch = useAppDispatch();

  const [modalIsVisible, toggleModalVisibility] = useModal();

  const fieldType = useAppSelector(swapSelector.fieldType);
  const swapValue = useAppSelector(swapSelector.swapValue);
  const swapPrice = useAppSelector(swapSelector.price);

  const [isInInputValid, setIsInInputValid] = useState(true);
  const [isOutInputValid, setIsOutInputValid] = useState(true);
  const [clickedButton, setClickedButton] = useState<EFieldType>(EFieldType.IN);

  const inputChange = useCallback(
    (newFieldType: EFieldType, value = '') => {
      batch(() => {
        dispatch(swapActions.setValue(value));
        dispatch(setFieldType(newFieldType));
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

  const handleChangeButtonClick = useCallback(() => {
    dispatch(swapActions.swapPairPlace);
  }, [dispatch]);

  const disabledItems = useMemo(
    () => [inputTokenInfo?.address ?? '', outputTokenInfo?.address ?? ''],
    [inputTokenInfo?.address, outputTokenInfo?.address],
  );

  const tokenSelector = useMemo(
    () => <TokenSelector onSelectToken={handleSelectToken} disabledItems={disabledItems} />,
    [disabledItems, handleSelectToken],
  );

  const inOutValues = useMemo(() => {
    const quote = Number(swapPrice.quote) ? swapPrice.quote : '';
    if (fieldType === EFieldType.OUT) {
      return {
        in: quote,
        out: swapValue,
      };
    }
    return {
      in: swapValue,
      out: quote,
    };
  }, [fieldType, swapPrice.quote, swapValue]);

  const isConfirmButtonDisabled = useMemo(
    () => !(Number(inOutValues.in) && Number(inOutValues.out) && isInInputValid && isOutInputValid),
    [inOutValues.in, inOutValues.out, isInInputValid, isOutInputValid],
  );

  useEffect(
    () => () => {
      dispatch(clear());
    },
    [],
  );

  useEffect(() => {
    dispatch(swapActions.clearPrice());
  }, [fieldType]);

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <div>
          <TokenInput
            type={'number'}
            value={inOutValues.in}
            price={swapPrice.inCostUSD}
            onChange={handleInputValueChange}
            max={inMaxValue}
            onValidationChange={setIsInInputValid}
            invalid={!isInInputValid}
            leftComponent={
              <CoinButton
                disabled={isCoinButtonsDisabled}
                symbol={inputTokenInfo?.symbol}
                logoURI={inputTokenInfo?.logoURI}
                tokenSwapType={EFieldType.IN}
                onClick={handleSelectTokenButtonClick}
              />
            }
          />
          <ChangeButton onClick={handleChangeButtonClick} />
          <TokenInput
            type={'number'}
            value={inOutValues.out}
            price={swapPrice.outCostUSD}
            onChange={handleOutputValueChange}
            max={outMaxValue}
            onValidationChange={setIsOutInputValid}
            invalid={!isOutInputValid}
            leftComponent={
              <CoinButton
                disabled={isCoinButtonsDisabled}
                symbol={outputTokenInfo?.symbol}
                logoURI={outputTokenInfo?.logoURI}
                tokenSwapType={EFieldType.OUT}
                onClick={handleSelectTokenButtonClick}
              />
            }
          />
        </div>
        <Button label={confirmLabel} onClick={onConfirmClick} disabled={isConfirmButtonDisabled} />
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
