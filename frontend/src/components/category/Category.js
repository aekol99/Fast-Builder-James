import React from 'react';
import './Category.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/reducers/styleReducer';
function Category(props) {
  const activeCategory = useSelector(state => state.styleReducer.activeCategory);
  const dispatch = useDispatch();

  return (
    <li className={activeCategory === props.label ? 'active' : ''} onClick={() => dispatch(setActiveCategory(props.label))}>{props.label}</li>
  )
}

export default Category