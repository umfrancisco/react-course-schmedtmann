import { useState } from "react";
import Star from "./Star";

const constainerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainer = {
  display: "flex",
};

type Props = {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  defaultRating?: number;
  onMovieRating?: (rating: number) => void;
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
  onMovieRating,
}: Props) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    marginLeft: "8px",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating: number) {
    setRating(rating);
    if (onMovieRating) {
      onMovieRating(rating);
    }
  }

  return (
    <div style={constainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating > i : rating > i}
            color={color}
            size={size}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
