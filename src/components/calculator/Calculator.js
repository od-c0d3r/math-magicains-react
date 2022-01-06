/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Calculator.scss';
import React from 'react';
import Screen from '../screen/Screen';
import Keyboard from '../keyboard/Keyboard';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.updateCalculatorState = this.updateCalculatorState.bind(this);
    this.state = { screen: '0' };
  }

  updateCalculatorState(keyName) {
    this.setState((state) => calculate(state, keyName));
  }

  render() {
    const { screen } = this.state;
    return (
      <div id="calContainer">
        <Screen screen={screen} />
        <Keyboard handleToKeyboard={this.updateCalculatorState} />
      </div>
    );
  }
}

export default Calculator;
