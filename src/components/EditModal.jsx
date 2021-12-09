import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';
import { doctorName } from '../src/collections';

const EditModal = ({ cancelModal, openEditModal, updateAppointment, editDeleteObj }) => {

    const editHead = "Изменить прием";

    const { name, doctor, date, complaint, id, userId } = editDeleteObj;

    const [nameEdit, setNameEdit] = useState(name);
    const [doctorEdit, setDoctor] = useState(doctor);
    const [dateEdit, setDate] = useState(date);
    const [complaintEdit, setComplaint] = useState(complaint);

    useEffect(() => {
        if (id) {
            setNameEdit(name);
            setDoctor(doctor);
            setDate(moment(date));
            setComplaint(complaint);
        }
    }, [id, name, doctor, date, complaint])

    const editAppointment = () => {
        updateAppointment({ nameEdit, doctorEdit, dateEdit, complaintEdit, id, userId })
    }

    return (
        <Dialog open={openEditModal}>
            <DialogTitle>{editHead}</DialogTitle>
            <DialogContent>
                <div>
                    <label>Имя:</label>
                    <input type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                    <label>Врач:</label>
                    <select value={doctorEdit} onChange={(e) => setDoctor(e.target.value)}>
                        {doctorName.map((item, index) => {
                            return <option key={`doctorName - ${index}`}>{item.name}</option>
                        })}
                    </select>
                    <label>Дата:</label>
                    <input type="date" value={dateEdit} onChange={(e) => setDate(e.target.value)} />
                    <label>Жалобы:</label>
                    <textarea type="text" value={complaintEdit} onChange={(e) => setComplaint(e.target.value)} />
                </div>
            </DialogContent>
            <DialogActions>
                <button onClick={cancelModal} >
                    Cancel
                </button>
                <button onClick={editAppointment}>
                    Save
                </button>
            </DialogActions>           
        </Dialog>
    )
}

export default EditModal;
