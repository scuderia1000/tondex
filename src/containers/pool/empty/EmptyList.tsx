import React from 'react';
import { cssPrefixPools } from '../Pool';
import { AddLiquidity } from '../../../const';
import './EmptyList.css';

const EmptyList: React.FC = () => <div className={`${cssPrefixPools}--empty`}>{AddLiquidity}</div>;

export default EmptyList;
