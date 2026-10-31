import { useState, type ReactNode } from "react";

function SlowComponent() {
  // 5 clicks on counter
  
  // lenght | Test.tsx     | SlowComponent.tsx
  // 100    | 1ms of 8ms   | 3ms of 7ms
  // 1000   | 1ms of 47ms  | 28ms of 46ms
  // 10000  | 3ms of 191ms | 92ms of 187ms

  // lenght | Counter.tsx with children
  // 10000  | 2ms of 3ms
  const words = Array.from({ length: 10000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );
  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  )
}

export default Test;
