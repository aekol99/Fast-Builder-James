import React from 'react';
import './Section.css';
import SectionItem from '../sectionItem/SectionItem';

function Section(props) {
  return (
    <div className='section'>
        <b>{props.title} :</b>
        <div className='actions'>
          {props.items && props.items.map((item, i) => <SectionItem key={i} added={false} label={item} />)}
        </div>
    </div>
  )
}

export default Section