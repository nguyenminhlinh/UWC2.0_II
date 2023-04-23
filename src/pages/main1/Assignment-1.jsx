import { useState } from 'react'
import { Fragment } from 'react'
import {
  range,
  getDaysInMonth,
  nextMonth,
  prevMonth,
  getSortedDays
} from './utils/Calendar'

import './styles/Assignment-1.css'
import backArrow from './assets/backArrow.png'

var shiftDisplay = [];

export const Assignment_1 = ({setState}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 3, 1));
  const [dayClick, setDayClick] = useState(-1);

  const DAYS = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ Nhật"];
  const shift = ["Ca sáng", "Ca trưa", "Ca chiều"];

  const onDayClick = (day) => {
    setDayClick(day);
    shiftDisplay = [];
  }

  const assignmentStepContent = () => {
    return (
      <div className="AssignmentStep">
        <b className='SelectedStep'>
          Thời gian
        </b>
        <div className='SelectedHead'></div>

        <div className='UnselectedRear'></div>
        <b className='UnselectedStep' onClick={() => setState(2)}>
          Địa điểm
        </b>
        <div className='UnselectedHead'></div>

        <div className='UnselectedRear'></div>
        <b className='UnselectedStep' onClick={() => setState(3)}>
          Phương Tiện
        </b>
        <div className='UnselectedHead'></div>
      </div>
    )
  }

  const calendarContent = () => {
    return (
      <Fragment>
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
      </Fragment>
    )
  }

  const sidebarContent = () => {
    return (
      <div className='AssignSidebar1'>
        <div className="SidebarMonthControl">
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

        <form>
          <div className='SidebarInfo'>
            <span>
              <b>Ngày:</b>
            </span>
            <span> {dayClick > 0 && dayClick} </span>

            <span>
              <b>Ca làm việc:</b>
            </span>
            <span>
              <select className='SidebarSelect'>
                {shift.map((item, index) => (
                  <option> 
                    {item}
                  </option>
                ))}
              </select>
            </span>

            <span>
              <b>Vị trí:</b>
            </span>

            <span>
              <select className='SidebarSelect'>
                <option>Collector</option>
                <option>Janitor</option>
              </select>
            </span>
          </div>
        </form>

        <button className='AssignmentButtonBack' onClick={() => setState(0)}>
          <b>Hủy</b>
        </button>
        <button className='AssignmentButtonForward' onClick={() => dayClick > 0 ? setState(2) : null}>
          <b>Tiếp tục</b>
        </button>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="Calendar">
        {assignmentStepContent()}
        {calendarContent()}
      </div>
      {sidebarContent()}
    </Fragment>
  )
}