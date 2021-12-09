import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteModal = ({ openDeleteModal, cancelModal, deleteAppointment }) => {

    const deleteHead = "Удалить запись";
    const questDelete = "Вы точно хотите удалить запись?"; 

    return (
        <Dialog open={openDeleteModal}>
            <DialogTitle>{deleteHead}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {questDelete}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={cancelModal}>
                    Cancel
                </button>
                <button onClick={deleteAppointment}>
                    Delete
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal;
