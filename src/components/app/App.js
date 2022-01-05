/* eslint-disable react/prefer-stateless-function, no-useless-constructor */
import './App.scss';
import React from 'react';
import Calculator from '../calculator/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="App"
        style={{
          height: window.innerHeight,
        }}
      >
        <Calculator />
      </div>
    );
  }
}

export default App;
