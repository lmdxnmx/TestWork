import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import s from './Login.module.css'
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const redirect = () => {
    if (login === "Admin" && password === "12345") {
      navigate("/profile");
      localStorage.setItem('auth',true);
      window.location.reload()
    } else {
      setError(true);
    }
  };

  return (
    <div className={s.login}>
      {error === true && <span>Имя пользователя или пароль введены не верно</span>}
      <input className={s.login__input} onChange={(e) => setLogin(e.target.value)} value={login} />
      <input className={s.login__input} onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
      <button className={s.login__button} onClick={() => redirect()}>Войти</button>
    </div>
  );
};

export default Login;
