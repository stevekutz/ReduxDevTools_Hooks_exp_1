import React from "react";


import {useState} from "reinspect";

function CounterUseState() {
  const [sum1, setSum1] = useState(100, "Sum1State");
  return (
    <div>
      <button onClick={() => setSum1(sum1 + 1)}>Add 1 state</button>
      <span> useState sum: {sum1}  </span>
    </div>
  );
}

export default CounterUseState;