import React from 'react';
import './List.css';
import ListItem, { IListItem } from './item/ListItem';
import RenderVisible from './virtualize/RenderVisible';

interface IProps {
  items: IListItem[];
}

const ITEM_HEIGHT = 50;

const cssPrefix = 'list';

const List: React.FC<IProps> = ({ items }) => {
  console.log('list');

  return (
    <div className={cssPrefix}>
      {items.map((item) => (
        <RenderVisible key={item.id} itemHeight={ITEM_HEIGHT}>
          <ListItem item={item} />
        </RenderVisible>
      ))}
    </div>
  );
};

export default List;
