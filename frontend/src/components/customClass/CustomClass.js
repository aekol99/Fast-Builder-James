import React from 'react';
import './CustomClass.css';

function CustomClass(props) {
  return (
    <span className='className added'>{props.label}</span>
  )
}

export default CustomClass