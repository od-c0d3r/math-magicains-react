import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { op } = props;
  const { eq } = props;
  const { ac } = props;
  const { display } = props;
  const { handleToKey } = props;

  const leftUpState = () => {
    handleToKey(display);
  };

  return (
    <button type="button" className={op ? 'calKey opColor' : ac ? 'calKey acKey' : eq ? 'calKey eqKey' : 'calKey'} onClick={leftUpState} onKeyPress={leftUpState}>
      {display}
    </button>
  );
};

Key.propTypes = {
  op: PropTypes.bool,
  ac: PropTypes.bool,
  eq: PropTypes.bool,
  handleToKey: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};

Key.defaultProps = {
  op: false,
  ac: false,
  eq: false,
};

export default Key;
