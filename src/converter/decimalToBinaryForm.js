import React, {useState} from 'react';
import {decimalToBinary} from './Converter';


function DecimalToBinary(){

    const [decimalInput, setDecimalInput] = useState('');
    const [binaryOutput, setBinaryOutput] = useState('');

    return(

        <div className="group">
          <h2>Convert decimal number to binary</h2>
          <label htmlFor="input">Enter a binary number</label>
          <input 
            id="decimalInput"
            type="text"
            placeholder="Enter a natural number (positive integer)"
            value={decimalInput}
            onChange={e => {                    
                    if ( (e.target.value.match(/^[0-9]+$/g) === null) && (e.target.value !== ""))  {                
                        alert("Sorry, only positive integers accept here!");                
                    }else{                
                        setDecimalInput(e.target.value);
                    }        

                }
            }
          />
          <button onClick={() => {
            let result = decimalToBinary(decimalInput);                    
            setBinaryOutput(result);
          }}>Convert</button>
          
          <div className="outputBox">
            {decimalInput} in decimal is equals to {binaryOutput}
          </div>          
        </div>

    );
}

export default DecimalToBinary;