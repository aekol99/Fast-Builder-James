import React from 'react';
import './MenuHeader.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../../redux/reducers/styleReducer';

function MenuHeader(props) {
  const activeTab = useSelector(state => state.styleReducer.activeTab);
  const dispatch = useDispatch();

  return (
    <ul className="menu-header">
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => dispatch(setActiveTab(0))}>Classes</li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => dispatch(setActiveTab(1))}>Properties</li>
    </ul>
  )
}

export default MenuHeader