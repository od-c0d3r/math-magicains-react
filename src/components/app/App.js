import './App.scss';
import React from 'react';
import Calculator from '../calculator/Calculator';

const App = () => (
  <div id="App" style={{ height: window.innerHeight }}>
    <Calculator />
  </div>
);

export default App;
