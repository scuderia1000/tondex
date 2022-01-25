import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './component/ModalComponent';

export interface IModalProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  label: string;
  modalContent: React.ReactNode;
}

const Modal: React.FC<IModalProps> = (props) =>
  props.isVisible ? ReactDOM.createPortal(<ModalComponent {...props} />, document.body) : null;

export default Modal;
