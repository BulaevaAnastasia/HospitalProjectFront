import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo.svg';

const Header = ({head}) => {

    const goBack = () => {

    }

    const heading = [{
        
        title: 'Зарегистрироваться в системе'   
    },
    {
        title: 'Войти в систему'
    },
    {
        title: 'Приемы'
    }]

    return (
        <>
            <header className="registration-header">
                <img src={Logo} alt="Logo" />
                <h1>{heading[head].title}</h1>
                <Link to="/authorization">
                    {head === 2 ? <button onClick={() => goBack()}>Exit</button> : null}
                </Link>
            </header>
        </>
    )
}

export default Header;
