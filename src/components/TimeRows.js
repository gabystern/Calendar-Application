import React, { Component } from 'react';
import Appointment from './Appointment'

class TimeRows  extends Component {

  constructor(props){
    super(props)
    this.createAppt = this.createAppt.bind(this)
  }

  createAppt(){

    for (var i=0; i<this.props.appointments.length; i++){
        let startTime = parseInt(this.props.appointments[i].start)
        let endTime = parseInt(this.props.appointments[i].end)
        let duration = (endTime-startTime).toString()

        if (startTime === this.props.time){
          return (<td rowSpan={duration} id={this.props.appointments[i].name} className="appt-each"><Appointment appointment={this.props.appointments[i]}/></td>)
        }
      }
  }

  render(){
    return(
      <tr>
        <th>{this.props.time}</th>
        {this.createAppt()}
      </tr>
    )
  }

}

export default TimeRows;
