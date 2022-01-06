/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Calculator.scss';
import React from 'react';
import Screen from '../screen/Screen';
import Keyboard from '../keyboard/Keyboard';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = { screen: '0' };
  }

  handleTextChange(keyName) {
    this.setState((state) => calculate(state, keyName));
  }

  render() {
    return (
      <div id="calContainer">
        <Screen screen={this.state.screen} />
        <Keyboard handleTextChange={this.handleTextChange} />
      </div>
    );
  }
}

export default Calculator;
