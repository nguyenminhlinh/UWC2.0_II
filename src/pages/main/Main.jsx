import React, {useState, useEffect} from "react";
import './main.css';
import Calendar from "react-calendar";
import img from '../../Assets/avt1.png';
// import img from './map.png';
import CalendarComponent from "./Calendar";
import Chat from "./Chat";
import DetailTask from "./detailTask";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const EmployeeInformation = [{
    name: 'CAA001',
    id: 'CAA001',
    imgSource: img,
    description: 'nothing',
    mail: 'abc@gmail.com',
    phoneNumber: '012345678',
    date: '1/1/2023',
    linkAcess: 'asfasfsdf',
    kpi: 66,
    tasks: [{
        nameTask: 'T01',
        MCPs: ['A01 ', 'A02'],
        vehicles: 'CO01',
        time: '12/03/2022',
        state: 1,
    },
    {
        nameTask: 'T02',
        MCPs: ['A01 ', 'A02'],
        vehicles: 'CO01',
        time: '14/03/2022',
        state: 1,
    },
    {
        nameTask: 'T03',
        MCPs: ['A01 ', 'A02'],
        vehicles: 'CO01',
        time: '17/03/2022',
        state: 0,
    },]
}]


const Main = () => {
    const [employee, setEmployee] = useState(EmployeeInformation[0].tasks);
    const [taskIndex, setTaskIndex] = useState(0);

    const [displayRight, setDisplayRight] = useState(1);
    const [progress, setProgress] = useState(2);

    const sidebarContent = () => {
        if (displayRight===1) 
            return (
                <div className="right">
                    <div className="calendar">
                        <Calendar/>
                    </div>
                    <Chat/>
                </div>
            )
        else 
            return (
                <div className="right">
                    {/* <DetailTask setDisplayRight={setDisplayRight} setCheckout={setCheckout} setConfirm={setConfirm} progress={progress} setProgress={setProgress}/> */}
                    <DetailTask setDisplayRight={setDisplayRight} employee={employee} setEmployee={setEmployee} taskIndex={taskIndex} progress={progress} setProgress={setProgress}/>
                </div>
            )
    }

    return (
        <section className="container">
            <div className="navigation">
            </div>  
            {
                EmployeeInformation.map((Employee, index) => {

                    return (
                        <div className="main-page">
                            <div className="left">
                                {/* <div className="current-page">

                                </div> */}

                                <div className="employee row">
                                    <div key={Employee.id} className="column">
                                        {/* <div className="div-employee-image"> */}
                                        <img className="imgnpc" src={Employee.imgSource} alt={Employee.description}/>
                                        {/* </div> */}
                                        <div className="employee-description">
                                            <div className="employee-name">
                                                <h4>{Employee.name}</h4>
                                                <p>{Employee.linkAcess}</p>
                                            </div>

                                            <ul className="employee-description-ul">
                                                <li>ID: {Employee.id}</li>
                                                <li>Email: {Employee.mail}</li>
                                                <li>Phone number: {Employee.phoneNumber}</li>
                                                <li>Data: {Employee.date}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="kpi-title">
                                            <h4 className="kpi-kpi">KPI</h4>
                                            <div className="kpi-time">
                                                <button className="kpi-time-button kpi-current">Tuần</button>
                                                <button className="kpi-time-button">Tháng</button>
                                            </div>
                                        </div>
                                        {/* <div className="kpi-pie">
                                            {Employee.kpi}%
                                        </div> */}
                                        <div style={{ width: `70%`, height: `auto`, margin: `15%`}}>
                                            <CircularProgressbar value={progress * 100 / employee.length} text={`${Math.round(progress * 100 / employee.length)}%`} styles={buildStyles({
                                                pathColor: '#7ED957',
                                                textColor: '#7ED957'
                                            })} />
                                        </div>
                                    </div> 
                                    <div className="column">
                                        {/* <p>asdfsdf</p> */}
                                    </div>
                                </div>
                                <div className="task-table">
                                    <div className="task-title">
                                        <h1>Task tham gia</h1>
                                    </div>
                                    <b>
                                        <ul className="task">
                                            <li className="task-infor-header">Nhiệm vụ</li>
                                            <li className="task-infor-header">MCPs</li>
                                            <li className="task-infor-header">Phương tiện</li>
                                            <li className="task-infor-header">Thời gian</li>
                                            <li className="task-infor-header">Trạng thái</li>
                                        </ul>
                                    </b>
                                    { employee.map((task, i) => 
                                        <>
                                            <ul className="task">
                                                <li className="task-infor">{task.nameTask}</li>
                                                <li className="task-infor">{task.MCPs}</li>
                                                <li className="task-infor">{task.vehicles}</li>
                                                <li className="task-infor">{task.time}</li>
                                                <button 
                                                    className={task.state === 0 ? "task-infor task-infor-button-red" : "task-infor task-infor-button-green"} 
                                                    onClick = {() => {
                                                        setTaskIndex(i);
                                                        setDisplayRight(2);
                                                        // checkout === 0 ? setConfirm('Chưa hoàn thành') : setConfirm('Đã hoàn thành');
                                                        // task.state = confirm;   
                                                    }} 
                                                >
                                                <b>{task.state===1 ? "Đã hoàn thành" : "Đang chờ xác nhận"}</b>
                                                </button>
                                            </ul>
                                        </>
                                        )
                                    }
                                    
                                </div>
                        </div>
                            {sidebarContent()}
                        </div>
                    // </>
                    ) 
                })
        }
        </section>
    )
}

export default Main