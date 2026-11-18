import Options from "./Options";
import { useQuizContext } from "../contexts/QuizContext";

function Question() {
  const { state, dispatch } = useQuizContext();
  const { index, answer, questions } = state;
  const question = questions ? questions[index] : undefined;

  if (!question) {
    return;
  }

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;