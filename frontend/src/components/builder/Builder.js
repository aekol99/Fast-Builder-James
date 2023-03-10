import React from 'react';
import './Builder.css';
import Selector from '../selector/Selector';
import Tab from '../tab/Tab';

import { useRef } from 'react';

function Builder() {
  const builder = useRef(0);

  return (
    <div className="builder" ref={builder}>
      <Selector target={builder} borderX={20} />
      <Tab id={0} icon="fa-eye" />
      <Tab id={1} icon="fa-clone" />
      <Tab id={2} icon="fa-adjust" />
      <Tab id={3} icon="fa-code-fork" />
      <Tab id={4} icon="fa-archive" />
    </div>
  )
}

export default Builder