import React from 'react';
import './Tab.css';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveBuildingTab } from '../../redux/reducers/projectReducer';

function BuilderButton(props) {
  const activeBuildingTab = useSelector(state => state.projectReducer.activeBuildingTab);
  const dispatch = useDispatch();

  return (
    <div className={activeBuildingTab === props.id ? 'builder-button active' : 'builder-button'} onClick={()=> dispatch(setActiveBuildingTab(props.id))}>
        <i className={`fa ${props.icon}`}></i>
    </div>
  )
}

export default BuilderButton