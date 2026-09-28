import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import StarRating from "./components/StarRating.tsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  function handleMovieRating(rating: number) {
    setMovieRating(rating);
  }

  return (
    <div>
      <StarRating color="blue" maxRating={10} onMovieRating={handleMovieRating} />
      <h1>This movie was rated {movieRating} stars</h1>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={0}
    />
    <StarRating
      maxRating={5}
      defaultRating={3}
    />
    <Test />
  </StrictMode>
);
