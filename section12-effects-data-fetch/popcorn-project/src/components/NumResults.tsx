type Props = {
  size: number;
};

function NumResults({ size }: Props) {
  return (
    <p className="num-results">
      Found <strong>{size}</strong> results
    </p>
  );
}

export default NumResults;
