import { useState } from "react";
import Star from "./Star";

const constainerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainer = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

type Props = {
  maxRating?: number;
};

function StarRating({ maxRating = 10 }: Props) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
  }

  return (
    <div style={constainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating > i : rating > i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default StarRating;
