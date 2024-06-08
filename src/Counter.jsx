import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import { useRef } from "react";
import { useEffect } from "react";

function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const nextRef = useRef(null);
  const lastRef = useRef(null);
  useEffect(() => {
    if (nextRef.current !== lastRef.current) {
      console.log(nextRef.current);
      lastRef.current = nextRef.current;
    }
  }, [counter]);

  function handleIncrement() {
    setCounter((c) => {
      nextRef.current = c + incrementBy > initialValue ? "up" : "down";
      return c + incrementBy;
    });
  }

  function handleDecrement() {
    setCounter((c) => {
      nextRef.current = c - incrementBy < initialValue ? "down" : "up";
      return c - incrementBy;
    });
  }

  function handleReset() {
    setCounter(initialValue);
    nextRef.current = "reset";
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
