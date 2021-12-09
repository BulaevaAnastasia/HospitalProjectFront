import React from 'react';
import { tableHeading } from '../src/collections';
import moment from 'moment';

const AppointmentTable = ({ setOpenDeleteModal, setOpenEditModal, editDeleteObj, setObj, modal, setModal, appointment }) => {

    const appointmentDelete = (id, userId) => {
        editDeleteObj = { id, userId }
		    setObj(editDeleteObj)
		    setOpenDeleteModal(true)
		    setModal(modal = 1)
    }

    const appointmentEdit = (item) => {
        setObj(item)
		    setOpenEditModal(true)
		    setModal(modal = 2)
    }

    return (
        <>
          <div>
              <table>
                <thead>
                    <tr>
                       {tableHeading.map((item, index) => {
                           return <th key={`tableHeading - ${index}`}>{item.header}</th>
                       })} 
                    </tr>
                </thead>
                <tbody>
                    {appointment.map((item, index) => {
                      return <tr key={`appointment - ${index}`}> 
                        <td>{item.name}</td>
                        <td>{item.doctor}</td>
                        <td>{`${moment(item.date).format('DD.MM.YYYY')}`}</td>
                        <td>{item.complaint}</td>
                        <td>
                            <div alt="delete"
                              onClick={() => appointmentDelete(item.id, item.userId)}>
                            </div>
                            <div alt="edit"
                              onClick={() => appointmentEdit(item)}>
                            </div>
                        </td>
                          </tr>
                    })}
                </tbody>
              </table>
          </div>          
        </>
    )
}

export default AppointmentTable;
