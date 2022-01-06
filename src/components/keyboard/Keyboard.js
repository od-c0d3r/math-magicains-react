/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Keyboard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Key from '../key/Key';

const Keyboard = (props) => {
  const { handleToKeyboard } = props;
  
  const leftUpToCalculator = (keyName) => {
    handleToKeyboard(keyName);
  }
  return (
    <div id="calKeys">
      <Key handleToKey={leftUpToCalculator} display="AC" />
      <Key handleToKey={leftUpToCalculator} display="+/-" />
      <Key handleToKey={leftUpToCalculator} display="%" />
      <Key handleToKey={leftUpToCalculator} display="÷" op />
      <Key handleToKey={leftUpToCalculator} display="7" />
      <Key handleToKey={leftUpToCalculator} display="8" />
      <Key handleToKey={leftUpToCalculator} display="9" />
      <Key handleToKey={leftUpToCalculator} display="x" op />
      <Key handleToKey={leftUpToCalculator} display="4" />
      <Key handleToKey={leftUpToCalculator} display="5" />
      <Key handleToKey={leftUpToCalculator} display="6" />
      <Key handleToKey={leftUpToCalculator} display="-" op />
      <Key handleToKey={leftUpToCalculator} display="1" />
      <Key handleToKey={leftUpToCalculator} display="2" />
      <Key handleToKey={leftUpToCalculator} display="3" />
      <Key handleToKey={leftUpToCalculator} display="+" op />
      <Key handleToKey={leftUpToCalculator} display="0" />
      <Key handleToKey={leftUpToCalculator} display="." />
      <Key handleToKey={leftUpToCalculator} display="=" op />
    </div>
  );
}

Keyboard.propTypes = {
  handleToKeyboard: PropTypes.func.isRequired,
};

export default Keyboard;
