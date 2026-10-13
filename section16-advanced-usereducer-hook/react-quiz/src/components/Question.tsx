import Options from "./Options";

type Props = {
  question: Question;
};

function Question({ question }: Props) {

  return (
    <div>
      <h4>{question.question}</h4>
      <Options options={question.options} />
    </div>
  );
}

export default Question;