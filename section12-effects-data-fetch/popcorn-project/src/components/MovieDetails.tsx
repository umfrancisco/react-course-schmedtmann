type Props = {
  selectedId: string | null;
  onCloseMovie: () => void;
};

function MovieDetails({ selectedId, onCloseMovie }: Props) {
  return <div className="details">
    {selectedId}
    <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
  </div>;
}

export default MovieDetails;
