import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏟️ Stadium Counter</h1>
      <h2>People Count: {count}</h2>

      <button onClick={increase} style={{ margin: "10px" }}>
        + Enter
      </button>

      <button onClick={decrease} style={{ margin: "10px" }}>
        - Exit
      </button>
    </div>
  );
}

export default App;
