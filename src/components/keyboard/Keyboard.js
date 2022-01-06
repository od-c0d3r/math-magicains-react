/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './Keyboard.scss';
import React from 'react';
import Key from '../key/Key';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(keyName) {
    this.props.handleTextChange(keyName);
  }

  render() {
    return (
      <div id="calKeys">
        <Key handleTextChange={this.handleTextChange} display="AC" />
        <Key handleTextChange={this.handleTextChange} display="+/-" />
        <Key handleTextChange={this.handleTextChange} display="%" />
        <Key handleTextChange={this.handleTextChange} display="÷" op />
        <Key handleTextChange={this.handleTextChange} display="7" />
        <Key handleTextChange={this.handleTextChange} display="8" />
        <Key handleTextChange={this.handleTextChange} display="9" />
        <Key handleTextChange={this.handleTextChange} display="x" op />
        <Key handleTextChange={this.handleTextChange} display="4" />
        <Key handleTextChange={this.handleTextChange} display="5" />
        <Key handleTextChange={this.handleTextChange} display="6" />
        <Key handleTextChange={this.handleTextChange} display="-" op />
        <Key handleTextChange={this.handleTextChange} display="1" />
        <Key handleTextChange={this.handleTextChange} display="2" />
        <Key handleTextChange={this.handleTextChange} display="3" />
        <Key handleTextChange={this.handleTextChange} display="+" op />
        <Key handleTextChange={this.handleTextChange} display="0" />
        <Key handleTextChange={this.handleTextChange} display="." />
        <Key handleTextChange={this.handleTextChange} display="=" op />
      </div>
    );
  }
}

export default Keyboard;
