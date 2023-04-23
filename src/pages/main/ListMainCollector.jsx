import React, {useState} from "react";
import './listMain.css';
import {IoIosArrowDropdownCircle} from "react-icons/io";
import img1 from '../../Assets/avt1.png';
import img2 from '../../Assets/avt2.png';
import img3 from '../../Assets/avt3.png';
import img4 from '../../Assets/avt4.png';
import img5 from '../../Assets/avt5.png';
import img6 from '../../Assets/avt6.png';
const ListCollector = [
    {
        role: "Collector1",
        name: "CAA001",
        week: 'Tuần 9',
        imgSource: img1,
        tasks: [{
                nameTask: 'TC01',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '12/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'TC02',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'TC03',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '15/03/2022',
                state: 'Chưa hoàn thành'
            },
        ],
        process: '66%',
        infor: {
            name: "CAA001",
            id: "CAA001",
            mail: 'abc@gmail.com',
            avatarSource: img1,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Collector2",
        name: "CAA002",
        week: 'Tuần 9',
        imgSource: img2,
        tasks: [{
                nameTask: 'TC01',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '13/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'TC02',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'TC03',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '33%',
        infor: {
            name: "CAA002",
            id: "CAA002",
            mail: 'xyz@gmail.com',
            avatarSource: img2,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Collector3",
        name: "CAA003",
        week: 'Tuần 9',
        imgSource: img3,
        tasks: [{
                nameTask: 'TC01',
                MCPs: ['AO103 ', 'AO104'],
                vehicles: 'CO03',
                time: '13/03/2022',
                state: 'Chưa hoàn thành'
            },
            {
                nameTask: 'TC02',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO03',
                time: '14/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '50%',
        infor: {
            name: "CAA003",
            id: "CAA003",
            mail: 'efh@gmail.com',
            avatarSource: img3,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
    {
        role: "Collector4",
        name: "CAA004",
        week: 'Tuần 9',
        imgSource: img4,
        tasks: [{
                nameTask: 'TC01',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '17/03/2022',
                state: 'Đã hoàn thành'
            },
            {
                nameTask: 'TC02',
                MCPs: ['AO101 ', 'AO102'],
                vehicles: 'CO01',
                time: '18/03/2022',
                state: 'Đã hoàn thành'
            },
        ],
        process: '100%',
        infor: {
            name: "CAA004",
            id: "CAA004",
            mail: 'khj@gmail.com',
            avatarSource: img4,
            phoneNumber: "012345678",
            position: "Collector",
            joinDate: "1/1/2023"
        }
    },
]

const ListMainCollector = () => {
    const [employeeIndex, setEmployeeIndex] = useState(0); 
    const [information, setInformation] = useState(ListCollector[0].infor);
    
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
                            <li>MSNV: {information.id}</li>
                            <li>Số điện thoại: {information.phoneNumber}</li>
                            <li>Vị trí: {information.position}</li>
                            <li>Ngày gia nhập: {information.joinDate}</li>
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
                        <ul className="list-header">
                            <li className="list-header-item">
                                Collector
                                
                            </li>
                            <li className="list-header-item">Task tham gia</li>
                            <li className="list-header-item">MCPs</li>
                            <li className="list-header-item">Phương tiện</li>
                            <li className="list-header-item">Tiến độ</li>
                        </ul>     
                        {
                            ListCollector.map((collector, index) => 
                                <>
                                    <ul className={index === employeeIndex ? "list-employee-active" : "list-employee"} key={index} onClick={() => {
                                        setEmployeeIndex(index);
                                        // displayRight(collector);
                                        setInformation(collector.infor);
                                        console.log(information);
                                    }} >
                                        <li className="list-employee-item">
                                            <img src={collector.imgSource} alt="abc" className="list-employee-item-img" />
                                            {collector.name}
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {collector.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.nameTask}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {collector.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.MCPs}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">
                                            <ul className="list-employee-item-task">
                                                {collector.tasks.map((task, i) => 
                                                    <li className="list-employee-item-task-item">{task.vehicles}</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="list-employee-item">{collector.process}</li>   
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

export default ListMainCollector