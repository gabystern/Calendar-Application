import React, { Component } from 'react';
import TimeRows from './components/TimeRows'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hours: ["9:00", "9:30" ,"10:00", "10:30" ,"11:00", "11:30" ,"12:00", "12:30" ,"13:00", "13:30" ,"14:00", "14:30" ,"15:00", "15:30" ,"16:00", "16:30" ,"17:00", "17:30" ,"18:00", "18:30" ,"19:00", "19:30" ,"20:00", "20:30" ,"21:00"],
      appointments:[{name:"Go to the doctor", location: "Doctor's Office", start: "09:30", end: "11:30"},
      {name:"Call Susie", location: "(888) 888-8888", start: "18:00", end: "19:00"},
      {name:"Go for a run", location: "Prospect Park", start: "18:30", end: "19:30"},
      {name:"Dinner", location: "TBD", start: "19:00", end: "20:00"}]
    }
    this.dateHeader = this.dateHeader.bind(this)
  }

  dateHeader(){
    var currentTime = new Date();
    return currentTime.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});
  }

  render() {
    return (
      <div className="App">
        <h2>{this.dateHeader()}</h2>
        <table>
          {this.state.hours.map((hour) => <TimeRows time={hour} appointments={this.state.appointments}/>)}
        </table>
      </div>
    );
  }
}

export default App;
