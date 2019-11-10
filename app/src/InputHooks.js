import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input, Form, Button} from 'semantic-ui-react';

import {useState} from "reinspect";

//   const [sum1, setSum1] = useState(100, "Sum1State");

function InputHooks() {
  const[inputVal, setInputVal] = useState('', "InputState");
  const [todos, setTodos] = useState([], "TodosState");

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

export default InputHooks;