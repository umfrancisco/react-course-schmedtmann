import { useReducer } from "react";

const initialState: State = {
  balance: 0,
  loan: 0,
  isActive: false
};

function reducer(state: State, action: PayloadAction)  {
  if (!state.isActive && action.type !== "openAccount") {
    return state;
  }
  switch(action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "withdrawAll":
      if (state.balance < 0) return state;
      return { ...state, balance: 0 };
    case "requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload, balance: state.balance + action.payload };
    case "payLoan":
      return { ...state, balance: state.balance - state.loan, loan: 0 };
    case "closeAccount":
      if (state.balance !== 0 || state.loan > 0) return state;
      return { ...initialState };
    default:
      throw new Error("ERROR");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>

      <p>
        <button onClick={() => dispatch({ type: "openAccount" })} disabled={state.isActive}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "deposit", payload: 150 })} disabled={!state.isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "withdraw", payload: 50 })} disabled={!state.isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "withdrawAll" })} disabled={!state.isActive}>
          Withdraw all
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "requestLoan", payload: 5000 })} disabled={!state.isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "payLoan" })} disabled={!state.isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "closeAccount" })} disabled={!state.isActive}>
          Close account
        </button>
      </p>
    </div>
  );
}

export default App;