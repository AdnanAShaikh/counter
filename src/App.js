// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const storedNumber = localStorage.getItem("number");
  const [count, setCount] = useState(Number(storedNumber));

  useEffect(() => {
    localStorage.setItem("number", count);
  }, [count]);

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
      <div className="reset">
        <button className="button reset" onClick={handleReset}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
