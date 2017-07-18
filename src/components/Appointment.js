import React from 'react';

const Appointment = (props) => {

  return(
    <div className='appt'><strong>{props.appointment.name}</strong><br></br>{props.appointment.location}</div>
  )
}

export default Appointment
