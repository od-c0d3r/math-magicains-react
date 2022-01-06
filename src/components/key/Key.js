/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange() {
    const { display } = this.props;
    const { handleTextChange } = this.props;
    handleTextChange(display);
  }

  render() {
    const { op } = this.props;
    const { display } = this.props;
    return (
      <button type="button" className={op ? 'calKey opColor' : 'calKey'} onClick={this.handleTextChange} onKeyPress={this.handleTextChange}>
        {display}
      </button>
    );
  }
}

Key.propTypes = {
  op: PropTypes.bool,
  handleTextChange: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};

Key.defaultProps = {
  op: false,
};

export default Key;
