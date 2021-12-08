import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { doctorName } from '../src/collections';

const AddApointment = () => {

    const url = 'http://localhost:8000';

    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [complaint, setComplaint] = useState('');

    const createAppointment = async (e, name, doctor, date, complaint) => {
        e.preventDefault();
        await axios.post(`${url}/saveAppointment`, {
            name: name,
            doctor: doctor,
            date: date,
            complaint: complaint,
            userId: Cookies.get('id')
        }).then(res => {
            //setOldResep(res.data)
            console.log(res)
            setName('');
            setDoctor('');
            setDate('');
            setComplaint('');
        })
        .catch((e) => {
        })
    }

    const buttonDis = () => {
        return !name || !doctor || !date || !complaint;
    }

    return (
        <div>
           <form onSubmit={(e) => createAppointment(e, name, doctor, date, complaint)} > 
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Врач:</label>
                    <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                        <option hidden></option>
                        { doctorName.map((item, index) => { 
                            return <option key={`doctorName - ${index}`}>{item.name}</option>
                        })} 
                    </select>
                </div>
                <div>
                    <label>Дата:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Жалоба:</label>
                    <input
                        type="text"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                    />
                </div>
                <button disabled={buttonDis()} type="submit">Добавить</button>
           </form>
        </div>
    )
}

export default AddApointment;
