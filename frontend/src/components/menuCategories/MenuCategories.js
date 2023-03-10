import React from 'react';
import './MenuCategories.css';
import Category from '../category/Category';
function MenuCategories(props) {
  return (
    <ul className='menu-categories'>
      <Category label='text' />
      <Category label='display' />
      <Category label='form' />
      <Category label='edge' />
      <Category label='position' />
      <Category label='effect' />
      <Category label='grid' />
      <Category label='sizing' />
    </ul>
  )
}

export default MenuCategories