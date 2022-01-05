import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={!this.props.op ? 'calKey' : 'calKey opColor'}>
        {this.props.display}
      </div>
    );
  }
}

Key.propTypes = {
  op: PropTypes.bool.isRequired,
  display: PropTypes.string.isRequired,
};

export default Key;
