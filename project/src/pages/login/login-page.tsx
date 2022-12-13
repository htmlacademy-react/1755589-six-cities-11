import LoginComponent from '../../components/login/login-component';
import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthStatuses } from '../../const';

function LoginPage() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if(authStatus === AuthStatuses.Auth) {
    return <Navigate to={'/'}/>;
  }

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={'/'}className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <LoginComponent/>
      </main>
    </div>

  );
}

export default LoginPage;
