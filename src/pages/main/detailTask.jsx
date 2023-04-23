import {IoCaretBackOutline} from 'react-icons/io5';
import React, {useState, useEffect, useCallback} from "react";
import {EmployeeInformation} from './Main';
import './detailTask.css';
import Main from "./Main";
// import imgMap from './map.png';


const DetailTask = ({setDisplayRight, setCheckout, setConfirm, setProgress}) => {

    // const setDisplayRight(value) => {
    //     displayRight = value;
    // }

    const comeBack = () => {
        setDisplayRight(1)
    }

    const checkoutBack = (value) => {
        setCheckout(value)
        value === 0 ? setConfirm('Chưa hoàn thành') : setConfirm('Đã hoàn thành');
        value === 0 ? setProgress(66) : setProgress(100);
    }

    return (
        <div className="detail-task">
            <div className="detail-task-header">
                <button className="detail-button-back"><IoCaretBackOutline size={32} className="icon-back" onClick = {comeBack}/></button>
                <h1>Chi tiết task</h1>
            </div>
            {
                EmployeeInformation.map((Employee, index) => {
                    return (
                        <>
                        <div className="detail-task-infor grid-container">
                            <b className="grid-item">Tên task:</b>
                            <div className="grid-item">TC03</div>
                            <b className="grid-item">Nhân viên:</b>
                            <div className="grid-item">{Employee.name}</div>
                            <b className="grid-item">Vị trí:</b>
                            <div className="grid-item">Collector</div>
                            <b className="grid-item">MCPs:</b>
                            <div className="grid-item">
                                <ul className="list-MCP">
                                    <li className="MCP-item">AO101</li>
                                    <li className="MCP-item">AO102</li>
                                </ul>
                            </div>
                            <b className="grid-item">Phương tiện:</b>
                            <div className="grid-item">CO01</div>
                            <b className="grid-item">Thời gian:</b>
                            <div className="grid-item">15/03/2022</div>
                            {/* <div className="grid-item"></div>
                            <div className="grid-item"></div> */}
                        </div>
                        <div className="map-mcps">
                                {/* <img className="image-map" alt={"asdfasd"} scr={imgMap}/> */}
                        </div>
                        
                        </>
                    )
                })
            }
            <div className="detail-task-confirm">
                <div className="confirm-button">
                    <button className="cancel" onClick={() => checkoutBack(0)} style={{backgroundColor: "red"}}>Hủy kết quả</button>
                    <button className="confirm" onClick={() => checkoutBack(1)} style={{backgroundColor: "green"}}>Xác nhận</button>
                </div>
            </div>
        </div>
    )
}


export default DetailTask;
