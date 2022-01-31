import React from 'react';
import ImageFallback from '../../../../components/image/ImageFallback';
import { cssPrefixItem } from '../../../../components/list/item/ListItem';
import { ITokenInfo } from '../../../../types';
import './TokenSelectorRow.css';

interface IProps {
  item: ITokenInfo;
}

const cssPrefix = 'token-selector-row';
const cssPrefixCaption = 'token-caption';

const TokenSelectorRow: React.FC<IProps> = ({ item }) => (
  <div className={cssPrefix}>
    <ImageFallback src={item.logoURI} alt={`${item.id}-logo`} />
    <div className={`${cssPrefixItem}-caption`}>
      <div className={cssPrefixCaption}>
        <span className={`${cssPrefixCaption}--label`}>{item.symbol}</span>
        <span className={`${cssPrefixCaption}--sub-label`}>{item.name}</span>
      </div>
    </div>
  </div>
);

export default TokenSelectorRow;
