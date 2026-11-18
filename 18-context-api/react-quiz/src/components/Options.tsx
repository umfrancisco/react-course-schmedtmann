import type { ActionDispatch } from "react";
import type { PayloadAction, QuestionType } from "../types";

type Props = {
  question: QuestionType;
  dispatch: ActionDispatch<[action: PayloadAction]>;
  answer: number | null;
}

function Options({ question, dispatch, answer }: Props) {

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const validAnswer = (answer !== null);
        const correctAnswer = (index === question.correctOption);
        const classForButton = `btn btn-option ${index === answer ? "answer" : ""} ${validAnswer ? `${correctAnswer ? "correct" : "wrong"}` : ""}`;
        const handleDispatch = () => dispatch({ type: "answer", payload: index });

        return (
          <button key={option} className={classForButton} disabled={validAnswer} onClick={handleDispatch}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;