
type Props = {
  numberQuestions: number;
}

function StartScreen({ numberQuestions }: Props) {
  
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numberQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;