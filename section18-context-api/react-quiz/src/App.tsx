import Header from "./components/Header";
import Main from "./components/Main";
import QuizContextProvider from "./contexts/QuizContextProvider";

function App() {

  return (
    <div className="app">
      <QuizContextProvider>
        <Header />
        <Main />
      </QuizContextProvider>
    </div>
  );
}

export default App;