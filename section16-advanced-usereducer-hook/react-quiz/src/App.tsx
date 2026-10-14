import { useEffect, useReducer } from "react";
import { ActionType, initialState, Status, type QuestionPayloadAction } from "./constants";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

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
    const question = state.questions?.at(state.index);
    return { ...state, answer: action.payload, points: action.payload === question?.correctOption ? state.points + question.points : state.points };
  }
  if (action.type === ActionType.NEXT_QUESTION) {
    return { ...state, answer: null, index: state.index + 1 };
  }
  if (action.type === ActionType.FINISH) {
    const highscore = state.points > state.highscore ? state.points : state.highscore;
    return { ...state, status: Status.FINISHED, highscore: highscore };
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
      .then(data => dispatch({ type: ActionType.RECEIVED, payload: data }))
      .catch(() => dispatch({ type: ActionType.FAILED }));
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
        {state.status === Status.FINISHED && <FinishScreen points={state.points} maxPoints={maxPoints} highscore={state.highscore} />}
      </Main>
    </div>
  );
}

export default App;