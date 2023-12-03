import React, { useState } from 'react';

const Converter = () => {
    const [binaryInput, setBinaryInput] = useState('');
    const [decimalOutput, setDecimalOutput] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      const input = e.target.value;
      setError('');
      setBinaryInput(input);
  
      if (!/^[01]{0,8}$/.test(input)) {
        setError('Invalid input. Please enter up to 8 binary digits (0 or 1).');
      } else {
        const decimalValue = parseInt(input, 2);
        setDecimalOutput(isNaN(decimalValue) ? '' : decimalValue);
      }
    };
  
    return (
      <div className="bin2dec-container">
        <label htmlFor="binaryInput">Enter Binary Digits (up to 8): </label>
        <input
          type="text"
          id="binaryInput"
          value={binaryInput}
          onChange={handleInputChange}
          maxLength="8"
        />
        {error && <div className="error-message">{error}</div>}
        <div className="result">Decimal Equivalent: {decimalOutput}</div>
      </div>
    );
  };

  export default Converter;
