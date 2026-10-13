import type { ActionDispatch } from "react";
import { ActionType, type QuestionPayloadAction } from "../constants";

type Props = {
  question: Question;
  dispatch: ActionDispatch<[action: QuestionPayloadAction]>;
  answer: number | null;
}

function Options({ question, dispatch, answer }: Props) {

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const validAnswer = (answer !== null);
        const correctAnswer = (index === question.correctOption);
        const classForButton = `btn btn-option ${index === answer ? "answer" : ""} ${validAnswer ? `${correctAnswer ? "correct" : "wrong"}` : ""}`;
        const handleDispatch = () => dispatch({ type: ActionType.ANSWER, payload: index });

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