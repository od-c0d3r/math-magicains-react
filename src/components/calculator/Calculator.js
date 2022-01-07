/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Calculator.scss';
import React, { useState } from 'react';
import Screen from '../screen/Screen';
import Keyboard from '../keyboard/Keyboard';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculatorData, setData] = useState({ screen: 'Welcome' });
  const { screen } = calculatorData;

  const updateCalculatorState = (keyName) => {
    setData((state) => calculate(state, keyName));
  };

  return (
    <div id="calContainer">
      <Screen screen={screen} />
      <Keyboard handleToKeyboard={updateCalculatorState} />
    </div>
  );
};

export default Calculator;
