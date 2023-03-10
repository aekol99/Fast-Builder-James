import React from 'react';
import './InputProperty.css';

function InputProperty(props) {
  return (
    <div className='property'>
        <b className='property-name'>{props.name} : </b>
        <input className='property-input' type="text" value={props.value} />
    </div>
  )
}

export default InputProperty