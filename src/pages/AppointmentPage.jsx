import React, { useState, useEffect } from 'react';
import AddApointment from '../components/AddApointment';
import AppointmentTable from '../components/AppointmentTable';
import Header from '../components/Header';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';

const AppointmentPage = () => {

    const url = 'http://localhost:8000';

    const [appointment, setAppointment] = useState([]);

    const [modal, setModal] = useState(0);
    const [editDeleteObj, setObj] = useState('');
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    
    const [oldAppointment, setOldAppointment] = useState([]);

    const { id } = editDeleteObj;
    const userId = Cookies.get('id');

    const history = useHistory();
    if (!Cookies.get('token')) history.push('/authorization');

    const cancelModal = () => {
        setOpenDeleteModal(false);
        setOpenEditModal(false);
    }

    const getAppointment = async () => {
        await axios.get(`${url}/allAppointments?userId=${userId}`).then(res => {
            setOldAppointment(res.data)
        })
            .catch(() => {          
            })
    }

    const deleteAppointment = async () => {
        await axios.delete(`${url}/removeAppointment?id=${id}&&userId=${userId}`).then(res => {
            setOldAppointment(res.data)
            setOpenDeleteModal(false);
        })
    }

    const updateAppointment = async (editObj) => {
        const { nameEdit, doctorEdit, dateEdit, complaintEdit, id, userId } = editObj;
        await axios.patch(`${url}/changeAppointment`, {
            name: nameEdit,
            doctor: doctorEdit,
            date: dateEdit,
            complaint: complaintEdit,
            id: id,
            userId: userId
        }).then(res => {
            setOldAppointment(res.data.result)
            setOpenEditModal(false);           
        })
            .catch((e) => {
                
            })
    }

    useEffect(() => {
        getAppointment()
    }, []);


    return (
        <>
        <Header head={2} />
        <div>
            <AddApointment 
            setOldAppointment={setOldAppointment}
            />
        </div>
        <div>
            <AppointmentTable 
            setOpenEditModal={setOpenEditModal}
            setOpenDeleteModal={setOpenDeleteModal}
            editDeleteObj={editDeleteObj}
            setObj={setObj}
            modal={modal}
            setModal={setModal}
            appointment={getAppointment()}
            />
             {modal === 1 ? (
                    <DeleteModal
                        openDeleteModal={openDeleteModal}
                        cancelModal={cancelModal}
                        deleteReseption={deleteAppointment}
                    />
                ) : null}
                {modal === 2 ? (
                    <EditModal
                        editDeleteObj={editDeleteObj}
                        openEditModal={openEditModal}
                        cancelModal={cancelModal}
                        updateReseption={updateAppointment}
                    />
                ) : null}
        </div>
        </>
    )
}

export default AppointmentPage;
