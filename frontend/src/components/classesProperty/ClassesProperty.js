import React from 'react';
import './ClassesProperty.css';
import CustomClass from '../customClass/CustomClass';

function ClassesProperty(props) {
  return (
    <div className='property'>
        <b className='property-name'>Classes : </b>
        <div className='add-class'>
            <input type="text" placeholder='Add custom class' />
            <i className='fa fa-plus'></i>
        </div>
        <div className='added-classes'>
            {props.classes.map((cls, i) => <CustomClass key={i} label={cls} />)}
        </div>
    </div>
  )
}

export default ClassesProperty