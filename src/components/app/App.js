import './App.scss';
import 'normalize.css';
import React from 'react';
import CalculatorPage from '../calculatorPage/calculatorPage';

const App = () => (
  <div id="App" style={{ height: window.innerHeight }}>
    <CalculatorPage />
  </div>
);

export default App;
