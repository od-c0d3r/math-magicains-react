import './Key.scss';
import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={!this.props.op?"calKey":"calKey opColor"} >
        {this.props.display}
      </div>
    );
  }
}

export default Key;
