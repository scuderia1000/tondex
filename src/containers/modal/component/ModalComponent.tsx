import React from 'react';
import { IModalProps } from '../Modal';
import IconButton from '../../../components/button/icon/IconButton';
import { ReactComponent as Close } from '../../../components/assets/svg/close.svg';
import './ModalComponent.css';

type IProps = Omit<IModalProps, 'isVisible'>;

const cssPrefix = 'modal';

const ModalComponent: React.FC<IProps> = ({ toggleVisibility, modalContent, label }) => {
  console.log('modal component');

  return (
    <>
      <div className="backdrop" onClick={toggleVisibility} />
      <div className={cssPrefix}>
        <div className={`${cssPrefix}-container`}>
          <div className={`${cssPrefix}-header`}>
            <span>{label}</span>
            <IconButton icon={<Close />} onClick={toggleVisibility} />
          </div>
          <div className={`${cssPrefix}-content`}>{modalContent}</div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
