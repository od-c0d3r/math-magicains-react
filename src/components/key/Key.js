import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { op } = props;
  const { display } = props;
  const { handleToKey } = props;

  const leftUpState = () => {
    handleToKey(display);
  };

  return (
    <button type="button" className={op ? 'calKey opColor' : 'calKey'} onClick={leftUpState} onKeyPress={leftUpState}>
      {display}
    </button>
  );
};

Key.propTypes = {
  op: PropTypes.bool,
  handleToKey: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};

Key.defaultProps = {
  op: false,
};

export default Key;
