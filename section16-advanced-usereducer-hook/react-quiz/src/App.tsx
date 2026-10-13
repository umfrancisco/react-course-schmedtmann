import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { ActionType, initialState, Status, type QuestionPayloadAction } from "./constants";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

function reducer(state: QuestionState, action: QuestionPayloadAction): QuestionState {
  if (action.type === ActionType.RECEIVED) {
    return { ...state, questions: action.payload, status: Status.READY };
  }
  if (action.type === ActionType.FAILED) {
    return { ...state, status: Status.ERROR };
  }
  if (action.type === ActionType.START) {
    return { ...state, status: Status.ACTIVE };
  }
  if (action.type === ActionType.ANSWER) {
    return { ...state, answer: action.payload };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numberQuestions = state.questions?.length;

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: ActionType.RECEIVED, payload: data }))
      .catch(() => dispatch({ type: ActionType.FAILED }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === Status.LOADING && <Loader />}
        {state.status === Status.ERROR && <Error />}
        {state.status === Status.READY && numberQuestions && <StartScreen numberQuestions={numberQuestions} dispatch={dispatch} />}
        {state.status === Status.ACTIVE && state.questions && <Question question={state.questions[state.index]} />}
      </Main>
    </div>
  );
}

export default App;