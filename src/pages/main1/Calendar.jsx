import { useState } from 'react'
import { Fragment } from 'react'
import {
  range,
  getDaysInMonth,
  nextMonth,
  prevMonth,
  getSortedDays
} from './utils/Calendar'

import './styles/Calendar.css'
import backArrow from './assets/backArrow.png'

var shiftDisplay = [];

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 3, 1));

  const [dayClick, setDayClick] = useState(1);
  const [taskClick, setTaskClick] = useState("T01");

  const [contentDay, setContentDay] = useState(true);
  const [contentShift, setContentShift] = useState(false);
  const [contentTask, setContentTask] = useState(false);

  const DAYS = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ Nhật"];
  const shift = ["Ca sáng", "Ca trưa", "Ca chiều"];

  /* temporary preset */
  let morning = ["T01", "T02", "T03"];
  let afternoon = ["T04", "T05"];
  let evening = ["T06", "T07", "T08", "T09"];

  const onTaskClick = (id) => {
    setContentShift(false);
    setContentTask(true);
    setTaskClick(id);
  }

  const onShiftClick = (index) => {
    setContentDay(false);
    setContentShift(true);
    if(index === 0) {
      shiftDisplay.push(...morning);
    }
    if(index === 1) {
      shiftDisplay.push(...afternoon);
    }
    if(index === 2) {
      shiftDisplay.push(...evening);
    }
  }

  const onDayClick = (day) => {
    setDayClick(day);
    setContentDay(true);
    setContentShift(false);
    setContentTask(false);
    shiftDisplay = [];
  }

  const calendarContent = () => {
    return (
      <div className="Calendar">
        <div className='Branch'></div>
        <div className="MonthControl">
          <img className='MonthArrowBack' src={backArrow} alt='month arrow 1' onClick={() => {
            prevMonth(currentDate, setCurrentDate);
            setDayClick(1);
          }}>
          </img>
          <b>Tháng {currentDate.getMonth() + 1}, {currentDate.getFullYear()}</b>
          <img className='MonthArrowForward' src={backArrow} alt='month arrow 2' onClick={() => {
            nextMonth(currentDate, setCurrentDate);
            setDayClick(1);
          }}>
          </img>
        </div>
        <div className='SevenColGrid'>
          {DAYS.map((day) => (
            <span className='HeadDay'><b>{day}</b></span>
          ))}
        </div>
        <div className='CalendarBody'>
          {getSortedDays(currentDate).map((day, index) => (
            <span 
              className={day === undefined ? "" : (dayClick === day ? "DayStyleActive" : "DayStyle")} 
              onClick={() => onDayClick(day)}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const sidebarContent = () => {
    if(contentDay === true) {
      return (
        <Fragment>
          <h1> Ngày {dayClick} </h1>
          <ul>
            {shift.map((item, index) => (
              <li 
                className='SidebarList' 
                key={item}
                onClick={() => onShiftClick(index)}
              > 
                <b>{item}</b>
              </li>
            ))}
          </ul>
        </Fragment>
      )
    }
    if(contentShift === true) {
      return (
        <Fragment>
          <h1>Tasks: {shiftDisplay.length}</h1>
          <ul>
            {shiftDisplay.map((item, index) => (
              <li
                className='SidebarList'
                key={item}
                onClick={() => onTaskClick(item)}
              >
                <b>{item}</b>
              </li>
            ))}
          </ul>
        </Fragment>
      )
    }
    if(contentTask === true) {
      return (
        <Fragment>
          <img className='BackArrow' src={backArrow} alt='back arrow' onClick={() => onShiftClick(-1)}></img>
          <h1>Chi tiết Task</h1>
          <form>
          <div className='SidebarInfo'>
            <span>
              <b>Tên task:</b>
            </span>
            <span> {taskClick} </span>

            <span>
              <b>Nhân viên phụ trách:</b>
            </span>
            <span>
              CAA01
            </span>

            <span>
              <b>Vị trí:</b>
            </span>
            <span>Collector</span>

            <span>
              <b>MCP liên quan:</b>
            </span>
            <span>
              <ul>
                <li>A01</li>
                <li>A02</li>
              </ul>
            </span>

            <span>
              <b>Phương tiện:</b>
            </span>
            <span>CO01</span>

            <span>
              <b>Thời gian:</b>
            </span>
            <span>
              {shiftDisplay[0] === "T01" ? 'Sáng' : (shiftDisplay[0] === "T04" ? 'Trưa' : 'Chiều')}
            </span>
          </div>
        </form>
          <a href="/assignment">

            <button className='SidebarButton' href="/assignment"> 
              <b>Chỉnh sửa</b>
            </button>
          </a>
        </Fragment>
      )
    }
  }

  return (
    <Fragment>
      {calendarContent()}
      <div className='Sidebar'>
        {sidebarContent()}
      </div>
    </Fragment>
  )
}