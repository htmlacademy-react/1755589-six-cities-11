import { AuthStatuses } from '../../const';
import LoginHeader from '../../components/login/logout-header';
import LogoutHeader from '../../components/login/login-header';

type LoginHeaderComponentProps = {
  authStatus: string;
}

function LoginHeaderComponent({authStatus}: LoginHeaderComponentProps) {
  let header: JSX.Element | null = null;

  if(authStatus === AuthStatuses.Auth) {
    header = <LoginHeader/>;
  }
  else{
    header = <LogoutHeader/>;
  }
  return header;
}

export default LoginHeaderComponent;
