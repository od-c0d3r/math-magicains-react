import './App.scss';
import 'normalize.css';
import React from 'react';
import { Route, Router, Navigate } from 'react-router-dom';
import Header from '../header/Header';
import CalculatorPage from '../calculatorPage/calculatorPage';

const App = () => (
  <div id="App" style={{ height: window.innerHeight }}>
    <Header />
    <Router className="App-intro">
      <Route path="/home" exact component={HomePage} />
      <Route path="/calc" component={CalculatorPage} />
      <Route path="/quote" component={QuotePage} />
      <Navigate to="/home" />
    </Router>
  </div>
);

export default App;
