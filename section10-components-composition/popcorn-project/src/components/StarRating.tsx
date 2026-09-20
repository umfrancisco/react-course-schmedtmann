import { useState } from "react";
import Star from "./Star";

const constainerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainer = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

type Props = {
  maxRating?: number;
};

function StarRating({ maxRating = 5 }: Props) {
  const [rating, setRating] = useState(1);

  function handleRating(rating: number) {
    setRating(rating);
    localStorage.setItem(Math.round(Math.random() * 1000).toString(), "Stars: "+rating);
  }

  return (
    <div style={constainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} full={rating > i} />
        ))}
      </div>
      <p>{rating || ""}</p>
    </div>
  );
}

export default StarRating;
