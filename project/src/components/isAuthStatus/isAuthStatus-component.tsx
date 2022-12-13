import { Navigate } from 'react-router-dom';
import { AuthStatuses } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteComponentProps = {
  children: JSX.Element;
}

function IsAuthStatusComponent({children}: PrivateRouteComponentProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authStatus === AuthStatuses.Auth
      ? children
      : <Navigate to={'/login'}/>
  );
}

export default IsAuthStatusComponent;
