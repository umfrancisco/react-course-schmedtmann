const constainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
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
  return (
    <div style={constainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i} style={textStyle}>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}

export default StarRating;
