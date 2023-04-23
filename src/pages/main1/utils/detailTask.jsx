import {IoCaretBackOutline} from 'react-icons/io5';
import React, {useState, useEffect, useCallback} from "react";
import {EmployeeInformation} from './Main';
import './detailTask.css';
import Main from "./Main";

const DetailTask = ({setDisplayRight}) => {

    // const setDisplayRight(value) => {
    //     displayRight = value;
    // }

    const comeBack = () => {
        setDisplayRight(1)
    }

    return (
        <>
            <div className="detail-task-header">
                <button className="detail-button-back"><IoCaretBackOutline className="icon-back" onClick = {comeBack}/></button>
                <h1>Chi tiết task</h1>
            </div>
            {
                EmployeeInformation.map((Employee, index) => {
                    return (
                        <>
                        <div className="detail-task-infor grid-container">
                            <b className="grid-item">Tên task:</b>
                            <div className="grid-item">TC01</div>
                            <b className="grid-item">Nhân viên:</b>
                            <div className="grid-item">{Employee.name}</div>
                            <b className="grid-item">Vị trí:</b>
                            <div className="grid-item">Collector</div>
                            <b className="grid-item">MCPs:</b>
                            <div className="grid-item">
                                <ul className="list-MCP">
                                    <li className="MCP-item">TA01</li>
                                    <li className="MCP-item">TA02</li>
                                </ul>
                            </div>
                            <b className="grid-item">Phương tiện:</b>
                            <div className="grid-item">TC01</div>
                            <b className="grid-item">Thời gian:</b>
                            <div className="grid-item">TC01</div>
                            {/* <div className="grid-item"></div>
                            <div className="grid-item"></div> */}
                        </div>
                        <div className="map-mcps">

                        </div>
                        </>
                    )
                })
            }
            <div className="detail-task-confirm">
                <div className="confirm-button">
                    <button className="cancel" style={{backgroundColor: "red"}}>Hủy kết quả</button>
                    <button className="confirm" style={{backgroundColor: "green"}}>Xác nhận</button>
                </div>
            </div>
        </>
    )
}


export default DetailTask;
