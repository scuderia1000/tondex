import React from 'react';
import List, { IListProps } from '../../../components/list/List';
import './PoolList.css';
import { PoolListHeader } from '../../../const';

const cssPrefix = 'pool-list';

const PoolList: React.FC<IListProps> = (props) => (
  <>
    <div className={`${cssPrefix}--header`}>
      <div>{PoolListHeader.Name}</div>
      <div>{PoolListHeader.Volume}</div>
    </div>
    <List {...props} />
  </>
);

export default PoolList;
