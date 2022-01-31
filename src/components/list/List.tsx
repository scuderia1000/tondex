import React from 'react';
import './List.css';
import ListItem, { IListItem } from './item/ListItem';
import RenderVisible from './virtualize/RenderVisible';
import { IMouseEventHandler, ITokenInfo } from '../../types';
import { ITEM_HEIGHT } from '../../const';

export interface IListProps {
  items: IListItem<ITokenInfo>[];
  itemHeight?: number;
  headerItems?: string[];
  onItemClick?: IMouseEventHandler<IListItem<ITokenInfo>>;
}

const cssPrefix = 'list';

const List: React.FC<IListProps> = ({
  items,
  onItemClick,
  headerItems,
  itemHeight = ITEM_HEIGHT,
}) => (
  <div className={cssPrefix}>
    <div>
      {headerItems?.length && (
        <div className={`${cssPrefix}--header`}>
          {headerItems.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
      )}
    </div>
    {items.map((item) => (
      <RenderVisible key={item.id} itemHeight={itemHeight}>
        <ListItem item={item} onItemClick={onItemClick} />
      </RenderVisible>
    ))}
  </div>
);

export default List;
