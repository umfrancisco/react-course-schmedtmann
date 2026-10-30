import { useQuizContext } from "../contexts/QuizContext";
import Error from "./Error";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Loader from "./Loader";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";

function Main() {
  const { state } = useQuizContext();

  return (
    <main className="main">
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "ready" && <StartScreen />}
      {state.status === "active" && state.questions && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {state.status === "finished" && <FinishScreen />}
    </main>
  );
}

export default Main;