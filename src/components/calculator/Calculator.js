import './Calculator.scss';
import React, { useState } from 'react';
import Screen from '../screen/Screen';
import Keyboard from '../keyboard/Keyboard';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const keyNums = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [calculatorData, setData] = useState({ screen: '0' });
  const { screen } = calculatorData;

  const updateCalculatorState = (keyName) => {
    setData((state) => calculate(state, keyName));
  };

  return (
    <div id="calContainer">
      <Screen screen={screen} />
      <Keyboard keyNums={keyNums} handleToKeyboard={updateCalculatorState} />
    </div>
  );
};

export default Calculator;
