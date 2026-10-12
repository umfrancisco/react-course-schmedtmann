import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";


const initialState: QuestionState = { questions: [], status: "loading" };

function reducer(state: QuestionState, action: QuestionPayloadAction) {
  if (action.type === "received") {
    return { questions: action.payload, status: "ready" };
  }
  if (action.type === "failed") {
    return { ...state, status: "error" };
  }
  throw new Error("Action unknown");
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "received", payload: data }))
      .catch(() => dispatch({ type: "failed" }));
  }, []);

  console.log(state);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;