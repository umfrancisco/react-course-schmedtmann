import type { ActionDispatch } from "react";
import { ActionType } from "../constants";

type Props = {
  numberQuestions: number;
  dispatch: ActionDispatch<[action: QuestionPayloadAction]>;
}

function StartScreen({ numberQuestions, dispatch }: Props) {
  
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numberQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: ActionType.START })}>Let's start</button>
    </div>
  );
}

export default StartScreen;