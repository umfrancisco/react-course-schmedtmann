import type { ActionDispatch } from "react";
import type { PayloadAction } from "../types";

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
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next_question" })}>
        Next
      </button>
    );
  }

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}

export default NextButton;