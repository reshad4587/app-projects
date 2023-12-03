import React from 'react';
import Converter from './components/converter';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Binary to Decimal Converter</h1>
      <Converter />
    </div>
  );
};

export default App;
