import React from 'react';
import classNames from 'classnames';
import ImageFallback from '../../image/ImageFallback';
import './ListItem.css';
import { IMouseEventHandler, ITokenInfo, MouseEvent } from '../../../types';

export interface IListItem<T = {}> {
  id?: string;
  icon?: React.ReactNode;
  logoURI?: string;
  caption?: string | React.ReactNode;
  disabled?: boolean;
  data?: T;
}

interface IProps {
  item: IListItem<ITokenInfo>;
  onItemClick?: IMouseEventHandler<IListItem<ITokenInfo>>;
}

const cssPrefix = 'list-item';

const ListItem: React.FC<IProps> = ({ item, onItemClick }) => {
  const classes = classNames({
    [cssPrefix]: true,
    [`${cssPrefix}--disabled`]: item.disabled,
  });

  const onClick = (event: MouseEvent) => {
    if (item.disabled) {
      return;
    }
    onItemClick?.(event, item);
  };

  return (
    <div className={classes} onClick={onClick}>
      {item.icon}
      {item.logoURI && <ImageFallback src={item.logoURI} alt={`${item.id}-logo`} />}
      <div className={`${cssPrefix}-caption`}>{item.caption}</div>
    </div>
  );
};

export default ListItem;
