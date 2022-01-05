// import logo from '../../imgs/react.svg';
import './App.scss';
import React from 'react';
import Calculator from '../calculator/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Calculator />
      </div>
    )
  }
}

export default App;
