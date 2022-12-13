import { useRef, FormEvent, useEffect } from 'react';
import { CITIES_LIST } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { setCity } from '../../store/actions';
import { Link } from 'react-router-dom';

function LoginComponent() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.activeCity);

  useEffect(() => {
    dispatch(setCity(CITIES_LIST[0]));
  }, [dispatch]);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passRef.current !== null) {
      onSubmit({email: emailRef.current.value, password: passRef.current.value});
    }
  };

  return(
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="" onSubmit={handleOnSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required pattern="/[a-Z\d]+/" />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input ref={passRef} className="login__input form__input" type="password" name="password" placeholder="Password" required pattern="/[a-Z\d]+/" />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link to={'/'}className="locations__item-link" >
            <span>{city}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginComponent;
