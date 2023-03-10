import React from 'react';
import './StyleMenu.css';
import Selector from '../../components/selector/Selector';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import MenuClasses from '../../components/menuClasses/MenuClasses';
import MenuProperties from '../../components/menuProperties/MenuProperties';


import { useRef } from 'react';
import { useSelector } from 'react-redux';

function StructureMenu() {
  const menu = useRef(0);
  const headerActiveTab = useSelector(state => state.styleReducer.activeTab);
  const activeElement = {tagName: "div", classes: ['desciption-wrapper', 'horizontal']};
  
  if (headerActiveTab === 0) {
      return (
        <div className='style-menu' ref={menu}>
          <Selector target={menu} borderX={window.innerWidth - 290} />
          <MenuHeader />
          <div className='style-menu-body'>
            <MenuClasses />  
          </div>
        </div>
      )
  }else{
    return (
        <div className='style-menu' ref={menu}>
          <Selector target={menu} borderX={window.innerWidth - 290} />
          <MenuHeader />
          <div className='style-menu-body'>
              <MenuProperties activeElement={activeElement} />
          </div>
        </div>
    )
  }
}

export default StructureMenu