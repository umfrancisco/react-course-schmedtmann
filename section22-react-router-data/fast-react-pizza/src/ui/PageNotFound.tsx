import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage = "";
  console.log(error);

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default PageNotFound;
