import React from 'react';

const Appointment = (props) => {
  console.log(props)

  return(
    <div className='appt'>{props.appointment.name}</div>
  )
}

export default Appointment
