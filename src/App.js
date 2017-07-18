import React, { Component } from 'react';
import TimeRows from './components/TimeRows'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hours: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      appointments:[{name:"appt1", start: "9:00", end: "11:00"},
      {name:"appt2", start: "10:00", end: "11:00"},
      {name:"app3", start: "18:00", end: "19:00"},
      {name:"appt4", start: "18:00", end: "19:15"},
      {name:"appt5", start: "19:00", end: "20:00"}]
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          {this.state.hours.map((hour) => <TimeRows time={hour} appointments={this.state.appointments}/>)}
        </table>
      </div>
    );
  }
}

export default App;
