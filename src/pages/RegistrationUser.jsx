import React, { useState } from 'react';
//import {useHistory} from 'react-router-dom';
import Header from '../components/Header';
import FormReg from '../components/FormReg';
import Hosp from '../icons/Hosp.svg';

const RegistrationUser = () => {
    
    //const history = useHistory();

    const [head, setHead] = useState(0);
    
    return (
        <>
        <Header head={head} setHead={setHead}/>
        <div>
            <main>
                <div>
                    <div>
                        <img src={Hosp} alt="logo"/>
                    </div>
                    <div>
                        <FormReg/>
                    </div>
                </div>
            </main>
        </div>       
        </>
    )
}

export default RegistrationUser
