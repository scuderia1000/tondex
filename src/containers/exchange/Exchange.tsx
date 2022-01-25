import React from 'react';
import Input from '../../components/input/Input';
import ChangeButton from '../../components/button/change/ChangeButton';
import Button from '../../components/button/Button';
import { ITokenInfo } from '../../types';
import './Exchange.css';

interface IProps {
  inputTokenInfo?: ITokenInfo;
  outputTokenInfo?: ITokenInfo;
  buttonLabel?: string;
}

const cssPrefix = 'exchange';

const Exchange: React.FC<IProps> = ({ buttonLabel, inputTokenInfo, outputTokenInfo }) => (
  // const inTokenInfo =
  //   inputTokenInfo ?? useSelector(tokensSelector.tokensByAddress)[inputToken?.address];
  // const outTokenInfo =
  //   outputTokenInfo ?? useSelector(tokensSelector.tokensByAddress)[outputToken.address];

  <div className={cssPrefix}>
    <div className={`${cssPrefix}-container`}>
      <div>
        <Input value={'0.0'} token={inputTokenInfo} />
        <ChangeButton />
        <Input value={'0'} token={outputTokenInfo} />
      </div>
      <Button label={buttonLabel} />
    </div>
  </div>
);
export default Exchange;
