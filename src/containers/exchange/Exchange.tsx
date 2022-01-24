import React from 'react';
import Input from '../../components/input/Input';
import ChangeButton from '../../components/button/change/ChangeButton';
import Button from '../../components/button/Button';
import { ITokenInfo } from '../../types';
import './Exchange.css';

interface IProps {
  buttonLabel?: string;
  firstToken?: ITokenInfo;
  secondToken?: ITokenInfo;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({ buttonLabel, firstToken, secondToken }) => (
  <div className={cssPrefix}>
    <div className={`${cssPrefix}-container`}>
      <div>
        <Input value={'0.0'} token={firstToken} />
        <ChangeButton />
        <Input value={'0'} token={secondToken} />
      </div>
      <Button label={buttonLabel} />
    </div>
  </div>
);

export default Exchange;
