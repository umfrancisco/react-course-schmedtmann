
type Props = {
  options: string[];
}

function Options({ options }: Props) {

  return (
    <div className="options">
      {options.map(option => (
        <button key={option} className="btn btn-option">{option}</button>
      ))}
    </div>
  );
}

export default Options;