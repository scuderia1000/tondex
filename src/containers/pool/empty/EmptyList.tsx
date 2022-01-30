import React from 'react';
import { cssPrefixPools } from '../Pool';
import { YourPools } from '../../../const';
import './EmptyList.css';

const EmptyList: React.FC = () => <div className={`${cssPrefixPools}--empty`}>{YourPools}</div>;

export default EmptyList;
