import React, {useState} from 'react';
import {binaryToDecimal} from './Converter';


function BinaryToDecimal(){
    const [binaryInput, setBinaryInput] = useState('');
    const [decimalOutput, setDecimalOutput] = useState('');

    return (
        <div className="group">
          <h2>Convert binary number to decimal</h2>
          <label htmlFor="input">Enter a binary number</label>
          <input 
            id="inputBinary"
            type="text"
            placeholder="Enter zeros and ones"
            value={binaryInput}            
            onChange={e => {   
              console.log(e.target.value.toString());
              if ( (e.target.value.match(/^[0-1]+$/g) === null) && (e.target.value !== ""))  {                
                alert("Sorry binary numbers just accept 0 and 1.")                
              }else{                
                setBinaryInput(e.target.value);              
              }           
                
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
    )
}

export default BinaryToDecimal;
