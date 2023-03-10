import React from 'react';
import './MenuProperties.css';
import Property from '../property/Property';
import ClassesProperty from '../classesProperty/ClassesProperty';
import InputProperty from '../inputProperty/InputProperty';

function MenuProperties(props) {
  return (
    <div className='menu-properties'>
      <Property name="Element" value={props.activeElement.tagName} />
      <ClassesProperty classes={props.activeElement.classes} />
      <InputProperty name="Href" value="http://localhost:3000" />
      <InputProperty name="Src" value="http://localhost:3000/img-1.jpg" />
    </div>
  )
}

export default MenuProperties