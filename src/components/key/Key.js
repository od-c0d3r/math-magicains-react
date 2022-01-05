/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { op } = this.props;
    const { display } = this.props;
    return (
      <div className={op ? 'calKey opColor' : 'calKey'}>
        {display}
      </div>
    );
  }
}

Key.propTypes = {
  op: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default Key;
