import { useEffect, useReducer } from "react";
import Error from "./components/Error";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";
import { reducer } from "./services/api";
import { initialState } from "./types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numberQuestions = state.questions ? state.questions.length : 0;
  const maxPoints = state.questions ? state.questions.reduce((prev, curr) => prev + curr.points, 0) : 0;

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "received", payload: data }))
      .catch(() => dispatch({ type: "failed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && <StartScreen numberQuestions={numberQuestions} dispatch={dispatch} />}
        {state.status === "active" && state.questions && (
          <>
            <Progress index={state.index} numberQuestions={numberQuestions} points={state.points} maxPoints={maxPoints} answer={state.answer} />
            <Question question={state.questions[state.index]} dispatch={dispatch} answer={state.answer} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={state.secondsRemaining} />
              <NextButton dispatch={dispatch} answer={state.answer} index={state.index} numberQuestions={numberQuestions} />
            </Footer>
          </>
        )}
        {state.status === "finished" && <FinishScreen points={state.points} maxPoints={maxPoints} highscore={state.highscore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;