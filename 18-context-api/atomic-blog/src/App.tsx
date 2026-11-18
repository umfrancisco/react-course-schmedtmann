import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import PostProvider from "./components/PostProvider";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <PostProvider>
      <section>
        <button onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)} className="btn-fake-dark-mode">
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
