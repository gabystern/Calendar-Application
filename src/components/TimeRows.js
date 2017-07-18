import React, { Component } from 'react';
import Appointment from './Appointment'

class TimeRows  extends Component {

  constructor(props){
    super(props)
    this.createAppt = this.createAppt.bind(this)
    this.defineTimes = this.defineTimes.bind(this)
  }

  defineTimes(){

    let parsedTime = new Date()
    let hour = this.props.time.split(":")[0]
    let minutes = this.props.time.split(":")[1]
    parsedTime.setHours(hour, minutes)
    return parsedTime.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});
    }

  createAppt(){
    for (var i=0; i<this.props.appointments.length; i++){

        let startTime = new Date()
        let startHour = this.props.appointments[i].start.split(":")[0]
        let startMinutes = this.props.appointments[i].start.split(":")[1]
        startTime.setHours(startHour, startMinutes)
        let start = startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});

        let endTime = new Date()
        let endHour = this.props.appointments[i].end.split(":")[0]
        let endMinutes = this.props.appointments[i].end.split(":")[1]
        endTime.setHours(endHour, endMinutes)
        let end = endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});

        let duration = ((parseInt(this.props.appointments[i].end)-parseInt(this.props.appointments[i].start))*2).toString()

        let parsedTime = new Date()
        let hour = this.props.time.split(":")[0]
        let minutes = this.props.time.split(":")[1]
        parsedTime.setHours(hour, minutes)
        let matchTime = parsedTime.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});
        if (start === matchTime){
          return (<td rowSpan={duration} id={i} className="appt-each"><Appointment appointment={this.props.appointments[i]}/></td>)
        }
      }
  }

  render(){
    return(
      <tr>
        <th align="left">{this.defineTimes()}</th>
        <td className="color-spacing"></td>
        {this.createAppt()}
        <td className="color-spacing"></td>
      </tr>
    )
  }

}

export default TimeRows;
