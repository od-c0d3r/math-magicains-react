import './Keyboard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Key from '../key/Key';

const Keyboard = (props) => {
  const { handleToKeyboard } = props;
  const { keyNums } = props;
  const leftUpToCalculator = (keyName) => {
    handleToKeyboard(keyName);
  };

  const keysMap = keyNums.map((ele) => {
    if (ele === '=') return <Key key={ele} display={ele} handleToKey={leftUpToCalculator} eq />;
    if (ele === 'AC') return <Key key={ele} display={ele} handleToKey={leftUpToCalculator} ac />;
    if (ele.match(/^÷$|^x$|^-$|^\+$/)) return <Key key={ele} display={ele} handleToKey={leftUpToCalculator} op />;
    return <Key key={ele} display={ele} handleToKey={leftUpToCalculator} />;
  });
  return (
    <div id="calKeys">
      {keysMap}
    </div>
  );
};

const handleToKeyboardDefault = () => 'Default handleToKeyboard';

Keyboard.propTypes = {
  handleToKeyboard: PropTypes.func,
  keyNums: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Keyboard.defaultProps = {
  handleToKeyboard: handleToKeyboardDefault,
};

export default Keyboard;
