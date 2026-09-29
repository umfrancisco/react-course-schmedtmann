type Props = {
  error: Error;
};

function ErrorMessage({ error }: Props) {
  return <p className="error">{error.message}</p>;
}

export default ErrorMessage;
