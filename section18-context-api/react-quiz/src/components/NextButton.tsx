import { useQuizContext } from "../contexts/QuizContext";

function NextButton() {
  const { state, dispatch, numberQuestions } = useQuizContext();
  const { answer, index } = state;

  if (answer === null) {
    return null;
  }

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