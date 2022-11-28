import { AuthStatuses } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteComponentProps = {
  authStatus: AuthStatuses;
  children: JSX.Element;
}

function PrivateRouteComponent(props: PrivateRouteComponentProps) {
  const { authStatus, children } = props;

  return(
    authStatus === AuthStatuses.Auth
      ? children
      : <Navigate to={'/login'}/>
  );
}

export default PrivateRouteComponent;
