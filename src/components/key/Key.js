/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Key.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.handleTextChange(this.props.display);
  }

  render() {
    const { op } = this.props;
    const { display } = this.props;
    return (
      <div className={op ? 'calKey opColor' : 'calKey'} onClick={(e)=> this.handleTextChange(e)}>
        {display}
      </div>
    );
  }
}

Key.propTypes = {
  op: PropTypes.bool,
  display: PropTypes.string.isRequired,
};

Key.defaultProps = {
  op: false,
};

export default Key;
