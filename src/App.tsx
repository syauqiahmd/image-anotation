import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as markerjs2 from 'markerjs2';

function App() {
  let imgRef = React.createRef<HTMLImageElement>();
  
  function showMarkerArea() {
    if (imgRef.current !== null) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.addEventListener('render', event => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });
      markerArea.show();
    }
  }
  return (
    <div className="App">
        <h1>DEMO CODE TEST</h1>
        <img 
          ref={imgRef} 
          src={logo} 
          alt="sample" 
          style={{ maxWidth: '50%' }} 
          onClick={() => showMarkerArea()}
          />
      </div>
  );
}

export default App;
