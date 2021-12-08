import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const FormAuth = () => {

    const url = 'http://localhost:8000';

    const { handleSubmit } = useForm();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const authorizationUser = async (data) => {
        await axios.post(`${url}/authorizationUser`, {
            login: data.login,
            password: data.password,
        }).then((result)=> {
            history.push('/home')
        }).catch((e) => {
            console.log("e",e.message)
        });
    }

    const history = useHistory();

    const setReg = () => {
        history.push('/registration')
      }

    return (
        <>
          <form onSubmit={handleSubmit((data) => authorizationUser(data))}>
            <h2>Войти в систему</h2>

            <label>Login:</label>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login"  />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

            <button type="submit">Войти</button>
            <button onClick={() => setReg()}>Зарегистрироваться</button>

          </form>  
        </>
    )
}

export default FormAuth
