import React, {useState} from 'react';
import './App.css';
import {decimalToBinary, binaryToDecimal} from './Converter';

function App() {

  const [binaryInput, setBinaryInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState('');
  const [decimalInput, setDecimalInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="group">
          <h2>Convert binary number to decimal</h2>
          <label htmlFor="input">Enter a binary number</label>
          <input 
            id="inputBinary"
            type="text"
            value={binaryInput}
            onChange={e => {
              
              
                setBinaryInput(e.target.value);
              
              
              
            
            
            }}
            
          />
          <button onClick={() => {
            let result = binaryToDecimal(binaryInput);                    
            setDecimalOutput(result);
          }}>Convert</button>
          
          <div className="outputBox">
            {binaryInput} in binary is equals to {decimalOutput}
          </div>
        </div>
        
        <div className="group">
          <h2>Convert decimal number to binary</h2>
          <label htmlFor="input">Enter a binary number</label>
          <input 
            id="decimalInput"
            type="text"
            value={decimalInput}
            onChange={e => setDecimalInput(e.target.value)}
          />
          <button onClick={() => {
            let result = decimalToBinary(decimalInput);                    
            setBinaryOutput(result);
          }}>Convert</button>
          
          <div className="outputBox">
            {decimalInput} in decimal is equals to {binaryOutput}
          </div>          
        </div>

      </header>
    </div>
  );
}

export default App;

