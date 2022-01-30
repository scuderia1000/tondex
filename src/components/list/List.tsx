import React from 'react';
import './List.css';
import ListItem, { IListItem } from './item/ListItem';
import RenderVisible from './virtualize/RenderVisible';
import { IMouseEventHandler, ITokenInfo } from '../../types';

export interface IListProps {
  items: IListItem<ITokenInfo>[];
  onItemClick?: IMouseEventHandler<IListItem<ITokenInfo>>;
}

const ITEM_HEIGHT = 50;

const cssPrefix = 'list';

const List: React.FC<IListProps> = ({ items, onItemClick }) => (
  <div className={cssPrefix}>
    {items.map((item) => (
      <RenderVisible key={item.id} itemHeight={ITEM_HEIGHT}>
        <ListItem item={item} onItemClick={onItemClick} />
      </RenderVisible>
    ))}
  </div>
);

export default List;
