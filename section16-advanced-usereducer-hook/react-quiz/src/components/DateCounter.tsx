import { useReducer, type ChangeEvent } from "react";

const initialState: State = { count: 0, step: 1 };

function reducer(state: State, action: Action) {
  if (action.type === "inc") {
    return { ...state, count: state.count + state.step };
  }
  if (action.type === "dec") {
    return { ...state, count: state.count - state.step };
  }
  if (action.payload && action.type === "setCount") {
    return { ...state, count: action.payload };
  }
  if (action.payload && action.type === "setStep") {
    return { ...state, step: action.payload };
  }
  return initialState;
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
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
