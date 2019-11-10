import React from 'react';
import {useReducer} from 'reinspect';

function CounterUseReducer() {
  const reducer = (state) => {
    return state + 5;
  };
  const [sum2, dispatch] = useReducer(reducer, 5000, "Sum2State");
  return (
    <div>
      <button onClick={() => dispatch({})}>Add 5 reducer</button>
      <span>  useReducer add5 {sum2} </span>
    </div>
  );
}

export default CounterUseReducer;