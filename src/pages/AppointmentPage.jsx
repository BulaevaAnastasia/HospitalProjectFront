import React from 'react';
import AddApointment from '../components/AddApointment';
import Header from '../components/Header';

const AppointmentPage = () => {
    return (
        <>
        <Header head={2} />
        <div>
            <AddApointment />
        </div>
        </>
    )
}

export default AppointmentPage;
