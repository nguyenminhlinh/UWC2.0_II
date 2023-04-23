import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import styled from 'styled-components';
import './calendar.css'

class CalendarComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date()
    };
  }

  onChange = date => {
    this.setState({ currentDate: date });
  }

  render() {
    const { currentDate } = this.state;
    return (
      <div>
        <div>{currentDate.toLocaleDateString()}</div>
        <Calendar
          onChange={this.onChange}
          value={currentDate}
        />
      </div>
    );
  }
}

// const CalendarContainer = styled.div`
//   /* ~~~ container styles ~~~ */
//   max-width: 600px;
//   margin: auto;
//   margin-top: 20px;
//   background-color: #d4f7d4;
//   padding: 10px;
//   border-radius: 3px;
// `;

export default CalendarComponent;
