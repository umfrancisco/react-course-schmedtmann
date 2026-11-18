import type { ActionDispatch } from "react";
import { Action, type PayloadAction } from "../constants";

type Props = {
  dispatch: ActionDispatch<[action: PayloadAction]>;
  answer: number | null;
  index: number;
  numberQuestions: number;
}

function NextButton({ dispatch, answer, index, numberQuestions }: Props) {
  if (answer === null) return null;

  if (index < numberQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: Action.NEXT_QUESTION })}>
        Next
      </button>
    );
  }

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: Action.FINISH })}>
      Finish
    </button>
  );
}

export default NextButton;