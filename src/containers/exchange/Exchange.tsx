import React, { useMemo } from 'react';
import Input from '../../components/input/Input';
import ChangeButton from '../../components/button/change/ChangeButton';
import Button from '../../components/button/Button';
import { ITokenInfo } from '../../types';
import './Exchange.css';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import TokenSelector from '../selector/token-selector/TokenSelector';
import { SelectToken } from '../../const';

interface IProps {
  inputTokenInfo?: ITokenInfo;
  outputTokenInfo?: ITokenInfo;
  buttonLabel?: string;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({ buttonLabel, inputTokenInfo, outputTokenInfo }) => {
  const [modalIsVisible, toggleModalVisibility] = useModal();

  const tokenSelector = useMemo(() => <TokenSelector />, []);

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}-container`}>
        <div>
          <Input value={'0.0'} token={inputTokenInfo} onSelectTokenClick={toggleModalVisibility} />
          <ChangeButton />
          <Input value={'0'} token={outputTokenInfo} />
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
