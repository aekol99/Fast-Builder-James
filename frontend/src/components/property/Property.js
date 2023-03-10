import React from 'react';
import './Property.css';

function Property(props) {
  return (
    <div className='property'>
        <b className='property-name'>{props.name} : </b>
        <p className='property-value'>{props.value}</p>
    </div>
  )
}

export default Property