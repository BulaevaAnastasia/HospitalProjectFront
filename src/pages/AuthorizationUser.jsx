import React, { useState } from 'react';
import Header from '../components/Header';
import Hosp from '../icons/Hosp.svg';
import FormAuth from '../components/FormAuth';


const AuthorizationUser = () => {

    const [head, setHead] = useState(1);

    return (
        <>
        <Header
            head={head}
            setHead={setHead}
        />
        <div>
            <main>
                <div>
                    <div>
                        <img src={Hosp} alt="logo"/>
                    </div>
                    <div>
                        <FormAuth/>
                    </div>
                </div>
            </main>
        </div>   
        </>
    )
}

export default AuthorizationUser;
