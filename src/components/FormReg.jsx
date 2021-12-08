import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';

const FormReg = () => {

    const url = 'http://localhost:8000';

    const { handleSubmit,  getValues } = useForm();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [repPassword, setRepPassword] = useState();
    const [userDef, setUserDef] = useState(false);

    const history = useHistory(); 

    const createNewUser = async (data) => {
        await axios.post(`${url}/saveUser`, {
            login: data.login,
            password: data.password,
        }).then(res => {
          Cookies.set('token', res.data.token)
          Cookies.set('id', res.data.id)
          history.push('/appointments');
        }).catch((e) => {
            if (e.response.status === 402) {
                userNotDef()
            }
        })
    }

    const userNotDef = () => {
        setUserDef(true)
        setTimeout(() => {
            setUserDef(false)
        },4000)
    }

    const setAuto = () => {
        history.push('/autorization')
    }

    return (
        <>

        <form onSubmit={handleSubmit((data) => createNewUser(data))} >
            <h2>Регистрация</h2>

            <label>Login:</label>
            <input 
                type="text" 
                value={login} 
                onChange={(e) => setLogin(e.target.value)} 
                placeholder="Login"
            />

            <label>Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />

            <label>Repeat password:</label>
            <input 
                type="password" 
                value={repPassword} 
                onChange={(e) => setRepPassword(e.target.value)} 
            />

            <button type="submit">Зарегистрироваться</button>
            <button onClick={() => setAuto()}>Авторизоваться</button>

            {userDef ? (
              <div>Пользователь с таким логином уже существует!</div>
            ) : null}
        </form>
            
        </>
    )
}

export default FormReg;
