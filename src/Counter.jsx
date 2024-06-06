import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + incrementBy);
  }

  function handleDecrement() {
    setCounter((c) => c - incrementBy);
  }

  function handleReset() {
    setCounter((c) => (c = initialValue));
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
