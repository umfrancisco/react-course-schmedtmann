import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { ActionType, Status } from "./constants";
import StartScreen from "./components/StartScreen";

const initialState: QuestionState = { questions: [], status: Status.LOADING };

function reducer(state: QuestionState, action: QuestionPayloadAction) {
  if (action.type === ActionType.RECEIVED) {
    return { questions: action.payload, status: Status.READY };
  }
  if (action.type === ActionType.FAILED) {
    return { ...state, status: Status.ERROR };
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

  console.log(state);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === Status.LOADING && <Loader />}
        {state.status === Status.ERROR && <Error />}
        {state.status === Status.READY && numberQuestions && <StartScreen numberQuestions={numberQuestions} />}
      </Main>
    </div>
  );
}

export default App;