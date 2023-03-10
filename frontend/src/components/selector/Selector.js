import React from 'react';
import './Selector.css';
import { useEffect, useRef } from 'react';

function Selector(props) {
  const mouseDown = useRef(false);
  const borderX = useRef(props.borderX);
  const borderY = useRef(20);
  const initialXDiff = useRef(0);
  const initialYDiff = useRef(0);

  const handleMouseDown = (e) => {
    mouseDown.current = true;
    initialXDiff.current = e.clientX - borderX.current;
    initialYDiff.current = e.clientY - borderY.current;
  }
  const handleMouseUp = (e) => {
    mouseDown.current = false;
    borderX.current = e.clientX - initialXDiff.current;
    borderY.current = e.clientY - initialYDiff.current;
  }

  const handleMouseMove = (event) => {
    if (mouseDown.current) {
      props.target.current.style.left = event.clientX - initialXDiff.current + 'px';
      props.target.current.style.top = event.clientY - initialYDiff.current + 'px';
    }
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => { window.removeEventListener('mousemove', handleMouseMove) }
  }, []);

  return (
    <div className="selector" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} ></div>
  )
}

export default Selector



/*=========================== Method Two ===========================*/

/*
import React from 'react';
import './Selector.css';
import { useState, useEffect } from 'react';

function Selector(props) {
  const [mouseDown, setMouseDown] = useState(false);
  const [borderX, setBorderX] = useState(20);
  const [borderY, setBorderY] = useState(20);
  const [initialXDiff, setInitialXDiff] = useState(0);
  const [initialYDiff, setInitialYDiff] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDown(true);
    setInitialXDiff(e.clientX - borderX);
    setInitialYDiff(e.clientY - borderY);
  }
  const handleMouseUp = (e) => {
    setMouseDown(false);
    setBorderX(e.clientX - initialXDiff);
    setBorderY(e.clientY - initialYDiff);
  }

  const handleMouseMove = (event) => {
    console.log(mouseDown)
    if (mouseDown) {
      props.target.current.style.left = event.clientX - initialXDiff + 'px';
      props.target.current.style.top = event.clientY - initialYDiff + 'px';
    }
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => { window.removeEventListener('mousemove', handleMouseMove) }
  }, [mouseDown]);

  return (
    <div className="selector" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} ></div>
  )
}

export default Selector
*/