import React from "react";


import {useState} from "reinspect";

function CounterUseState() {
  const [sum1, setSum1] = useState(100, "Sum1State");
  return (
    <>
      {sum1}
      <button onClick={() => setSum1(sum1 + 1)}>Add 1 state</button>&nbsp;&nbsp;<b>with useState</b>
    </>
  );
}

export default CounterUseState;