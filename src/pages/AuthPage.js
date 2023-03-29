import React, { useCallback, useContext, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_PASSWORD, VALIDATOR_REQUIRE } from '../util/validators';
import './AuthPage.css'
import Input from './FormElements/Input'



function AuthPage() {
  const [formInputs, inputHandler, setFormData] = useForm({
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },false);
  
  const [pswShown, setPswShown] = useState(false);
  const [isLogin, setIsLogin] = useState(true)

  const auth = useContext(AuthContext)

  const switchModeHandler = () => { 
    if (!isLogin) {
      setFormData(
      {
        ...formInputs.inputs,
        name:undefined
      },
        formInputs.inputs.email.isValid && formInputs.inputs.password.isValid
    )
    } else {
      setFormData({
        ...formInputs.inputs,
        name: {
          value: '',
          isValid:false
        }
      },false)
    }
    setIsLogin(preValue=>!preValue)
  }


  const authIsFinished = (event) => {
    event.preventDefault();
    console.log('HELLO');
    auth.login()
  }

  const showPsw = () => {
    setPswShown((preValue) => !preValue);
  };

  return (
    <div className="flex-container">
      <form onSubmit={authIsFinished}>
        <h3>Логин</h3>
        {!isLogin && (
          <>
            <Input
              element="input"
              id="name"
              type="text"
              label="Ваше имя:"
              placeholder="Введите свое имя"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <hr />
          </>
        )}
        <Input
          element="input"
          id="email"
          placeholder="Введите логин"
          type="email"
          label="Почта:"
          errorText="Введите правильную почту"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
        />
        <hr />
        <Input
          element="input"
          id="password"
          placeholder="Введите пароль"
          type={pswShown ? "text" : "password"}
          label="Пароль:"
          errorText="Пароль должен 1 заглавную букву,символы '!,?', цифры от 0 9"
          onInput={inputHandler}
          validators={[VALIDATOR_PASSWORD()]}
        />
        <div className="checkbox">
          <input type="checkbox" onClick={showPsw} />
          <label htmlFor="checkbox">Показать пароль</label>
        </div>
        <span className="btn">
          <button type="submit" disabled={!formInputs.isValid}>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </button>
          <button type="submit" onClick={switchModeHandler}>
            SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
          </button>
        </span>
      </form>
    </div>
  );
}

export default AuthPage