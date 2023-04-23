import { Fragment, useState } from "react";

import vehicleC from './assets/collecting_vehicle.png';
import vehicleT from './assets/troller_vehicle.png'
import './styles/Assignment-3.css';

export const Assignment_3 = ({ setState }) => {
  let vehicle = [
    {
      "id": "CO01",
      "type": 1,
      "plate": "666",
      "garage": "A1",
      "available": true,
    },
    {
      "id": "CO02",
      "type": 1,
      "plate": "420",
      "garage": "A1",
      "available": false,
    },
    {
      "id": "CO03",
      "type": 1,
      "plate": "6969",
      "garage": "A1",
      "available": false,
    },
    {
      "id": "CO04",
      "type": 1,
      "plate": "0451",
      "garage": "A2",
      "available": false,
    },
    {
      "id": "CO05",
      "type": 1,
      "plate": "123",
      "garage": "A2",
      "available": true,
    },
    {
      "id": "TR01",
      "type": 2,
      "plate": "Không",
      "garage": "B1",
      "available": false,
    },
    {
      "id": "TR02",
      "type": 2,
      "plate": "Không",
      "garage": "B1",
      "available": false,
    },
    {
      "id": "TR03",
      "type": 2,
      "plate": "Không",
      "garage": "B1",
      "available": true,
    },
    {
      "id": "TR04",
      "type": 2,
      "plate": "Không",
      "garage": "B2",
      "available": true,
    },
  ];
  const tableHead = ["Mã phương tiện", "Loại phương tiện", "Biển số xe", "Nhà xe", "Trạng thái"];
  const [vehicleClick, setVehicleClick] = useState(vehicle[0]);

  const assignmentStepContent = () => {
    return (
      <div className="AssignmentStep">
        <b className='UnselectedStep' onClick={() => setState(1)}>
          Thời gian
        </b>
        <div className='UnselectedHead'></div>

        <div className='UnselectedRear'></div>
        <b className='UnselectedStep' onClick={() => setState(2)}>
          Địa điểm
        </b>
        <div className='UnselectedHead'></div>

        <div className='SelectedRear'></div>
        <b className='SelectedStep'>
          Phương Tiện
        </b>
        <div className='SelectedHead'></div>
      </div>
    )
  }

  const vehicleList = () => {
    return (
      <Fragment>
        <div className="VehicleHead">
          {tableHead.map((item) => (
            <span className="VehicleColumn">
              <b>{item}</b>
            </span>
          ))}
        </div>
        <ul className="VehicleBody">
          {vehicle.map((item, index) => (
            <li className="VehicleRow" onClick={() => setVehicleClick(item)}>
              <span className="VehicleColumn">{item["id"]}</span>
              <span className="VehicleColumn">{item["type"] === 1 ? 'Xe chở rác' : 'Xe đẩy'}</span>
              <span className="VehicleColumn">{item["plate"]}</span>
              <span className="VehicleColumn">{item["garage"]}</span>
              <span className={item["available"] === true ? "VehicleColumnGreen" : "VehicleColumnRed"}>
                <b>{item["available"] === true ? 'Có sẵn' : 'Không có sẵn'}</b>
              </span>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }

  const sidebarContent = () => {
    return (
      <div className="AssignSidebar3">
        <h1>Thông tin xe</h1>
        <img className="SidebarImg" src={vehicleClick["type"] === 1 ? vehicleC : vehicleT} alt="vehicle image"></img>
        <div className="SidebarInfo">
          <span>
            <b>Mã số xe:</b>
          </span>
          <span>
            {vehicleClick["id"]}
          </span>

          <span>
            <b>Loại phương tiện</b>
          </span>
          <span>
            {vehicleClick["type"] === 1 ? 'Xe chở rác' : 'Xe đẩy'}
          </span>

          <span>
            <b>Biển số xe:</b>
          </span>
          <span>
            {vehicleClick["plate"]}
          </span>
        </div>

        {/* assignment step button */}
        <button className='AssignmentButtonBack' onClick={() => setState(2)}>
          <b>Trở lại</b>
        </button>
        <a href={vehicleClick["available"] === true ? '/calendar' : null}>
          <button className='AssignmentButtonForward'>
            <b>Xác nhận</b>
          </button>
        </a>
      </div>
    )
  }

    return (
        <Fragment>
          <div className="VehicleList">
            {assignmentStepContent()}
            {vehicleList()}
          </div>
          {sidebarContent()}
        </Fragment>
    )
}