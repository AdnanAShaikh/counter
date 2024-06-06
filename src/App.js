// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  function handleAdd() {
    setCount((count) => count + 1);
  }

  return (
    <div className="container">
      <button onClick={handleSubtract} className="button">
        -
      </button>
      <h3 className="count">{count}</h3>
      <button onClick={handleAdd} className="button">
        +
      </button>
    </div>
  );
}

export default App;
