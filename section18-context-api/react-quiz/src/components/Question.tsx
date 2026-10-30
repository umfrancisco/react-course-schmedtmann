import type { ActionDispatch } from "react";
import Options from "./Options";
import type { PayloadAction, QuestionType } from "../types";

type Props = {
  question: QuestionType;
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