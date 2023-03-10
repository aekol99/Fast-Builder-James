import React from 'react';
import './SectionItem.css';

function SectionItem(props) {
  return (
    <span className={`action ${props.added ? 'added' : ''}`}>{props.label}</span>
  )
}

export default SectionItem