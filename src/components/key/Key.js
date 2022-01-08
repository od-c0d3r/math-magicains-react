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

  const whichKey = () => {
    if (op) {
      return 'calKey opColor';
    } else if (ac) {
      return 'calKey acKey';
    } else if (eq) {
      return 'calKey eqKey';
    } else {
      return 'calKey';
    }
  }

  return (
    <button type="button" className={whichKey()} onClick={leftUpState} onKeyPress={leftUpState}>
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
