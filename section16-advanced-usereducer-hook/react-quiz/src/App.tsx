import { useEffect, useReducer } from "react";
import { Action, initialState, Status, type PayloadAction } from "./constants";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

function reducer(state: State, action: PayloadAction): State {
  if (action.type === Action.RECEIVED) {
    return { ...state, questions: action.payload, status: Status.READY };
  }
  if (action.type === Action.FAILED) {
    return { ...state, status: Status.ERROR };
  }
  if (action.type === Action.START) {
    return { ...state, status: Status.ACTIVE };
  }
  if (action.type === Action.ANSWER) {
    const question = state.questions?.at(state.index);
    return { ...state, answer: action.payload, points: action.payload === question?.correctOption ? state.points + question.points : state.points };
  }
  if (action.type === Action.NEXT_QUESTION) {
    return { ...state, answer: null, index: state.index + 1 };
  }
  if (action.type === Action.FINISH) {
    const highscore = state.points > state.highscore ? state.points : state.highscore;
    return { ...state, status: Status.FINISHED, highscore: highscore };
  }
  if (action.type === Action.RESET) {
    return { ...state, status: Status.READY, points: 0, index: 0, answer: null };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numberQuestions = state.questions ? state.questions.length : 0;
  const maxPoints = state.questions ? state.questions.reduce((prev, curr) => prev + curr.points, 0) : 0;

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: Action.RECEIVED, payload: data }))
      .catch(() => dispatch({ type: Action.FAILED }));
  }, []);
  
  console.log(state);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === Status.LOADING && <Loader />}
        {state.status === Status.ERROR && <Error />}
        {state.status === Status.READY && <StartScreen numberQuestions={numberQuestions} dispatch={dispatch} />}
        {state.status === Status.ACTIVE && state.questions && (
          <>
            <Progress index={state.index} numberQuestions={numberQuestions} points={state.points} maxPoints={maxPoints} answer={state.answer} />
            <Question question={state.questions[state.index]} dispatch={dispatch} answer={state.answer} />
            <NextButton dispatch={dispatch} answer={state.answer} index={state.index} numberQuestions={numberQuestions} />
          </>
        )}
        {state.status === Status.FINISHED && <FinishScreen points={state.points} maxPoints={maxPoints} highscore={state.highscore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;