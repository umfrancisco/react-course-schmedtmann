import type { ActionDispatch } from "react";
import Options from "./Options";
import type { PayloadAction } from "../constants";

type Props = {
  question: Question;
  dispatch: ActionDispatch<[action: PayloadAction]>;
  answer: number | null;
};

function Question({ question, dispatch, answer }: Props) {

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;