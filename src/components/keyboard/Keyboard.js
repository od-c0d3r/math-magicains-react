import './Keyboard.scss';
import React from 'react';
import Key from '../key/Key';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="calKeys">
        <Key display="AC" />
        <Key display="+/-" />
        <Key display="%" />
        <Key display="÷" op={true}/>
        <Key display="7" />
        <Key display="8" />
        <Key display="9" />
        <Key display="×" op={true}/>
        <Key display="4" />
        <Key display="5" />
        <Key display="6" />
        <Key display="-" op={true}/>
        <Key display="1" />
        <Key display="2" />
        <Key display="3" />
        <Key display="+" op={true}/>
        <Key display="0" />
        <Key display="." />
        <Key display="=" op={true}/>
      </div>
    );
  }
}

export default Keyboard;