import React from 'react';
import './MenuClasses.css';
import MenuSearch from '../menuSearch/MenuSearch';
import MenuCategories from '../menuCategories/MenuCategories';
import CategorySections from '../categorySections/CategorySections';
import SearchItems from '../searchItems/SearchItems';

import { useState } from 'react';
import { useSelector } from 'react-redux';
function MenuClasses(props) {
  const searchValue = useSelector(state => state.styleReducer.searchValue);

  return (
    <>
        <MenuCategories />
        <MenuSearch />
        {searchValue ? <SearchItems /> : <CategorySections />}
    </>
  )
}

export default MenuClasses