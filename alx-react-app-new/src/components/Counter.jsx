import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "20px",
        width: "250px",
        margin: "20px auto",
        textAlign: "center",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
