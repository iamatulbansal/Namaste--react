import { useRouteError } from 'react-router-dom';


const Error = () => {
  const error = useRouteError(); //INVOKED-useRouteError COME FROM REACT-ROUTER-DOM TO HANDLE ALL PATH NOT MATCH ERROR OF YOUR PROJECT
  return (
    <div>
      <h2>Oops!</h2>
      <h3>Something want Wrong! </h3>
      <p>
        status:<b>{error.status}</b>
      </p>
      <p>
        StatusText:<b>{error.statusText}</b>
      </p>
      <p>
        message:<b style={{ color: 'red' }}>{error.error.message}</b>
      </p>
      <a href="/">Go back to Home</a>
    </div>
  );
};
export default Error;
