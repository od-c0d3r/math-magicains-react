import './Calculator.scss';
import React from 'react';
import Screen from '../screen/Screen';
import Keyboard from '../keyboard/Keyboard';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="calContainer">
        <Screen />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
