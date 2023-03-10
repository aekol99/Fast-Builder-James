import React from 'react';
import './CategorySections.css';
import Section from '../section/Section';

import { useState } from 'react';
import { useSelector } from 'react-redux';
function CategorySections() {
    const activeCategory = useSelector(state => state.styleReducer.activeCategory);
    const [sections, setsections] = useState({
        text: [
        {
            title: 'Font weight',
            items: ['fw-bold', 'fw-normal', 'fw-italic', 'fw-italic', 'fw-italic']
        },
        {
            title: 'Font size',
            items: ['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6']
        }
        ],
        display: [
            {
                title: 'Normal display',
                items: ['fw-bold', 'fw-normal', 'fw-italic', 'fw-italic', 'fw-italic']
            },
            {
                title: 'Flexbox',
                items: ['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6']
            }
        ],
        form: [
            {
                title: 'Input',
                items: ['input-fiels', 'input-label']
            },
            {
                title: 'select',
                items: ['select-label']
            }
        ],
        edge: [
            {
                title: 'padding',
                items: ['p-1', 'p-2', 'p-3', 'p-4', 'p-5']
            },
            {
                title: 'margin',
                items: ['m-1', 'm-2', 'm-3', 'm-4', 'm-5']
            }
        ]
    
    });
  return (
    <div className='category-sections'>
        {sections && sections[activeCategory].map((section, i) => <Section key={i} title={section.title} items={section.items} />)}
    </div>
  )
}

export default CategorySections