import { useReducer, useState, type ChangeEvent } from "react";

type PayloadAction = {
  type: string;
  payload: number;
}

function reducer(state: number, action: PayloadAction) {
  console.log(state, action);
  if (action.type === "inc") {
    return state + action.payload;
  }
  if (action.type === "dec") {
    return state - action.payload;
  }
  if (action.type === "setCount") {
    return action.payload;
  }
  return state;
}

function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "dec", payload: 1 });
  };

  const inc = () => {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value).toString() !== "NaN") {
      dispatch({ type: "setCount", payload: Number(e.target.value) });
    }
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };

  const reset = () => {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
