import React, {useState} from "react";
import './listMain.css';
import {IoIosArrowDropdownCircle} from "react-icons/io";
import img1 from '../../Assets/avt1.png';
import img2 from '../../Assets/avt2.png';
import img3 from '../../Assets/avt3.png';
import img4 from '../../Assets/avt4.png';
import img5 from '../../Assets/avt5.png';
import img6 from '../../Assets/avt6.png';
const ListJanitor = [
    {
        role: "Janitor1",
        name: "JAA001",
        week: 'Tuần 9',
        imgSource: img4,
        tasks: [{
                nameTask: 'T01',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '12/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'T02',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'T03',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '15/03/2022',
                state: 'Chưa hoàn thành'
            },
        ],
        process: '67%',
        infor: {
            name: "JAA001",
            id: "JAA001",
            mail: 'abc@gmail.com',
            avatarSource: img4,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Janitor2",
        name: "JAA002",
        week: 'Tuần 9',
        imgSource: img3,
        tasks: [{
                nameTask: 'T01',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '13/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'T02',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'T03',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '33%',
        infor: {
            name: "JAA002",
            id: "JAA002",
            mail: 'xyz@gmail.com',
            avatarSource: img3,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Janitor3",
        name: "JAA003",
        week: 'Tuần 9',
        imgSource: img2,
        tasks: [{
                nameTask: 'T01',
                MCPs: ['A03 ', 'AO4'],
                vehicles: 'CO03',
                time: '13/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'T02',
                MCPs: ['AO101 ', 'A02'],
                vehicles: 'CO03',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '50%',
        infor: {
            name: "JAA003",
            id: "JAA003",
            mail: 'efh@gmail.com',
            avatarSource: img2,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Janitor4",
        name: "JAA004",
        week: 'Tuần 9',
        imgSource: img1,
        tasks: [{
                nameTask: 'T01',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '17/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'T02',
                MCPs: ['A01 ', 'A02'],
                vehicles: 'CO01',
                time: '18/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '100%',
        infor: {
            name: "JAA004",
            id: "JAA004",
            mail: 'khj@gmail.com',
            avatarSource: img1,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
]

const ListMainJanitor = () => {
    const [employeeIndex, setEmployeeIndex] = useState(0); 
    const [information, setInformation] = useState(ListJanitor[0].infor);

    const sidebarContent = (information) => {
        return (
            <div className="right">
                <div className="profile">
                    <img className="profile-image" src={information.avatarSource} alt={information.mail}/>
                    <div className="profile-description">
                        <div className="profile-name">
                            <h4>{information.name}</h4>
                            <p>{information.mail}</p>
                            <a href="/employee/dashboard">Xem chi tiết</a>.
                        </div>
                        <ul className="profile-description-ul">
                            <li>ID: {information.id}</li>
                            <li>Phone Number: {information.phoneNumber}</li>
                            <li>Position: {information.position}</li>
                            <li>Date: {information.joinDate}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="container">
            <div className="navigation">
            </div>
            {
                
                <div className="main-page">
                    <div className="left">
                        <b>
                            <ul className="list-header">
                                <li className="list-header-item">Janitor</li>
                                <li className="list-header-item">Task tham gia</li>
                                <li className="list-header-item">MCPs</li>
                                <li className="list-header-item">Phương tiện</li>
                                <li className="list-header-item">Tiến độ</li>
                            </ul>
                        </b>
                        {
                            ListJanitor.map((janitor, index) => 
                                <>
                                    <ul className={index === employeeIndex ? "list-employee-active" : "list-employee"} key={index} onClick={() => {
                                        setEmployeeIndex(index);
                                        // displayRight(collector);
                                        setInformation(janitor.infor);
                                        console.log(information);
                                    }} >
                                        <li className="list-employee-item">
                                            <img src={janitor.imgSource} alt="abc" className="list-employee-item-img" />
                                            {janitor.name}
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {janitor.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.nameTask}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {janitor.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.MCPs}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {janitor.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.vehicles}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">{janitor.process}</li>   
                                    </ul>
                                </>
                            )
                        }
                        
                    </div>
                    {sidebarContent(information)}
                </div>
                    // </>
            }
        </section>
    )
}

export default ListMainJanitor