type Props = {
  error: string;
};

function ErrorMessage({ error }: Props) {
  return <p className="error">{error}</p>;
}

export default ErrorMessage;
