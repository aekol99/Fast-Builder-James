import React from 'react';
import './SearchItems.css';

import SectionItem from '../sectionItem/SectionItem';

import { useState } from 'react';

function SearchItems() {
    const [searchResults, setSearchResults] = useState(["fw-bold", "fw-normal", "fw-italic"]);

  return (
    <div className='search-results'>
        <b>Results :</b>
        <div className='actions'>
          {searchResults && searchResults.map((item, i) => <SectionItem key={i} added={false} label={item} />)}
        </div>
    </div>
  )
}

export default SearchItems