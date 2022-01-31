import React from 'react';
import classNames from 'classnames';
import './ListItem.css';
import { IMouseEventHandler, ITokenInfo, MouseEvent } from '../../../types';

export interface IListItem<T = {}> {
  id?: string;
  row?: React.ReactNode;
  disabled?: boolean;
  data?: T;
}

interface IProps {
  item: IListItem<ITokenInfo>;
  onItemClick?: IMouseEventHandler<IListItem<ITokenInfo>>;
}

export const cssPrefixItem = 'list-item';

const ListItem: React.FC<IProps> = ({ item, onItemClick }) => {
  const classes = classNames({
    [cssPrefixItem]: true,
    [`${cssPrefixItem}--disabled`]: item.disabled,
  });

  const onClick = (event: MouseEvent) => {
    if (item.disabled) {
      return;
    }
    onItemClick?.(event, item);
  };

  return (
    <div className={classes} onClick={onClick}>
      {item.row}
    </div>
  );
};

export default ListItem;
