import React, {useState} from 'react';
import './App.css';
import BinaryToDecimal from './converter/binaryToDecimalForm';
import DecimalToBinary from './converter/decimalToBinaryForm';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">        
        <BinaryToDecimal />        
        <DecimalToBinary />
      </header>
    </div>
  );
}

export default App;

