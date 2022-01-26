import React from 'react';
import './ListItem.css';

export interface IListItem<T = {}> {
  id?: string;
  icon?: React.ReactNode;
  logoURI?: string;
  caption?: string | React.ReactNode;
  data?: T;
}

interface IProps {
  item: IListItem;
}

const cssPrefix = 'list-item';

const ListItem: React.FC<IProps> = ({ item }) => (
  <div className={cssPrefix}>
    {item.icon}
    {item.logoURI && (
      <img className={`${cssPrefix}-image`} src={item.logoURI} alt={`${item.id}-logo`} />
    )}
    <div className={`${cssPrefix}-caption`}>{item.caption}</div>
  </div>
);

export default ListItem;
