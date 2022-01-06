/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Screen.scss';
import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="calScreen">
        {this.props.screen}
      </div>
    );
  }
}

export default Screen;
