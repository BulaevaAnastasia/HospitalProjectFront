import React, { useState } from 'react';
import AddApointment from '../components/AddApointment';
import AppointmentTable from '../components/AppointmentTable';
import Header from '../components/Header';
import axios from 'axios';
import Cookies from 'js-cookie';

const AppointmentPage = () => {

    const url = 'http://localhost:8000';

    const [appointment, setAppointment] = useState([]);
    const [oldAppointment, setOldAppointment] = useState([]);

    const userId = Cookies.get('id');

    const getAppointment = async () => {
        await axios.get(`${url}/allAppointments?userId=${userId}`).then(res => {
            setOldAppointment(res.data)
        })
            .catch(() => {          
            })
    }

    return (
        <>
        <Header head={2} />
        <div>
            <AddApointment />
        </div>
        <div>
            <AppointmentTable 
            appointment={getAppointment()}
            />
        </div>
        </>
    )
}

export default AppointmentPage;
