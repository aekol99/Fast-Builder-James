import React from 'react';
import './MenuSearch.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/reducers/styleReducer';

function MenuSearch() {
  const searchValue = useSelector(state => state.styleReducer.searchValue);
  const dispatch = useDispatch();
 
  return (
    <div className='menu-search'>
        <input type="text" placeholder='search for a section' onChange={(e) => dispatch(setSearchValue(e.target.value))} />
        <i className='fa fa-search'></i>
    </div>
  )
}

export default MenuSearch