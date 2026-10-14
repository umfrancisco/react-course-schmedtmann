import type { ActionDispatch } from "react";
import { ActionType, type QuestionPayloadAction } from "../constants";

type Props = {
  dispatch: ActionDispatch<[action: QuestionPayloadAction]>;
  answer: number | null;
  index: number;
  numberQuestions: number;
}

function NextButton({ dispatch, answer, index, numberQuestions }: Props) {
  if (answer === null) return null;

  if (index < numberQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: ActionType.NEXT_QUESTION })}>
        Next
      </button>
    );
  }

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: ActionType.FINISH })}>
      Finish
    </button>
  );
}

export default NextButton;