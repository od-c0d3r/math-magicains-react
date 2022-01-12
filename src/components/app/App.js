import './App.scss';
import 'normalize.css';
import React from 'react';
import Header from '../header/Header';
import CalculatorPage from '../calculatorPage/calculatorPage';

const App = () => (
  <div id="App" style={{ height: window.innerHeight }}>
    <Header />
    <CalculatorPage />
  </div>
);

export default App;
