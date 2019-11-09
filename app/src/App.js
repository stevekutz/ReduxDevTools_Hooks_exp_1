import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from 'semantic-ui-react';

import {useState} from 'reinspect';

function App() {
  const[inputVal, setInputVal] = useState('');


  const handleInput = (e) => {
    const {value} = e.target
    setInputVal(value);
    console.log('inputVal is ', inputVal);
  }

  return (
    <div>
      <Input
        value = {inputVal}
        onChange = {handleInput}
      
      />

      <p>{inputVal}</p>
    </div>
  );
}

export default App;
