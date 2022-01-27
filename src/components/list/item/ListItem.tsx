import React from 'react';
import ImageFallback from '../../image/ImageFallback';
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
    {item.logoURI && <ImageFallback src={item.logoURI} alt={`${item.id}-logo`} />}
    <div className={`${cssPrefix}-caption`}>{item.caption}</div>
  </div>
);

export default ListItem;
