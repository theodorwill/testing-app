import React from 'react';
import logo from './logo.svg';
import './App.css';
import Validate from './components/validate';
import { validateZipCode, createHeading, formatPrice, isLowerCase, isPrime, genitive } from './utils/functionLibrary';

function App() {

  return (
    <div className="App">
      
      <p>{validateZipCode("12345")}</p>
    </div>
  );
}

export default App;
