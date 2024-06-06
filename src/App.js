// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    setCount((count) => count - 1);
  }

  function handleAdd() {
    setCount((count) => count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <button onClick={handleSubtract} className="button">
          -
        </button>
        <h3 className="count">{count}</h3>

        <button onClick={handleAdd} className="button">
          +
        </button>
      </div>
      <button className="button reset" onClick={handleReset}>
        reset
      </button>
    </>
  );
}

export default App;
