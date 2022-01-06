/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Screen.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { screen } = props;
  return (
    <div id="calScreen">
      {screen}
    </div>
  );
};

Screen.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default Screen;
