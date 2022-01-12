import './App.scss';
import 'normalize.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import CalculatorPage from '../calculatorPage/CalculatorPage';
import HomePage from '../homePage/HomePage';
import QuotePage from '../quotePage/QuotePage';

const App = () => (
  <div id="App" style={{ height: window.innerHeight }}>
    <Header />
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="calc" element={<CalculatorPage />} />
      <Route path="quote" element={<QuotePage />} />
    </Routes>
  </div>
);

export default App;
