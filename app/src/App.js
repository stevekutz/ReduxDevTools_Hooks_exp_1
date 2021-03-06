import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input, Form, Button} from 'semantic-ui-react';

import {useState} from "reinspect";

function App() {
  const[inputVal, setInputVal] = useState('', "Input_State");
  const [todos, setTodos] = useState([], "Todo_State");

  // const[inputVal, setInputVal] = useState('', 1);
  // const [todos, setTodos] = useState([], 2);

  const handleInput = (e) => {
    const {value} = e.target
    setInputVal(value);
    console.log('inputVal is ', inputVal);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(inputVal) {
      setTodos([...todos, inputVal]);
      setInputVal('');
    }


  }

  return (
    <div>
        <Form onSubmit = {handleSubmit}>
          <Input
            value = {inputVal}
            onChange = {handleInput}
          
          />
        <Button type = 'submit'> Add input</Button>
        </Form>

        {todos.map((item, index) => (
          <p key = {index}> {item} </p>
        ))}

    </div>
  );
}

export default App;