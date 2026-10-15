import { useEffect, useReducer } from "react";
import { Action, initialState, Status } from "./constants";
import { reducer } from "./services/api";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

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
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={state.secondsRemaining} />
              <NextButton dispatch={dispatch} answer={state.answer} index={state.index} numberQuestions={numberQuestions} />
            </Footer>
          </>
        )}
        {state.status === Status.FINISHED && <FinishScreen points={state.points} maxPoints={maxPoints} highscore={state.highscore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;