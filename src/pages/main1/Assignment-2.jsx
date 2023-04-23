import React, { Fragment, useContext, useEffect, useState } from "react";
import { CanvasProvider, useCanvas } from "./utils/CanvasContext";
import backArrow from './assets/backArrow.png';
import mcpImg from './assets/mcp.png';

import './styles/Assignment-2.css'

export const Assignment_2 = ({setState}) => {
  const [onDraw, setOnDraw] = useState(false);
  const [onPlaceMcp, setOnPlaceMcp] = useState(false);
  const [selectedMap, setSelectedMap] = useState(51);

  const mcpList = [
    {
      "name": "A01",
      "x": 165,
      "y": 162,
    },
    {
      "name": "A02",
      "x": 279,
      "y": 367,
    },
    {
      "name": "A03",
      "x": 475,
      "y": 107,
    },
    {
      "name": "A04",
      "x": 539,
      "y": 358,
    },
    {
      "name": "A05",
      "x": 708,
      "y": 47,
    }
  ]
  const [selectedMcp, setSelectedMcp] = useState([true, true, true, false, false]);

  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    placeMcp
  } = useCanvas();

  const assignmentStepContent = () => {
    return (
      <div className="AssignmentStep">
        <b className='UnselectedStep' onClick={() => setState(1)}>
          Thời gian
        </b>
        <div className='UnselectedHead'></div>

        <div className='SelectedRear'></div>
        <b className='SelectedStep'>
          Địa điểm
        </b>
        <div className='SelectedHead'></div>

        <div className='UnselectedRear'></div>
        <b className='UnselectedStep' onClick={() => setState(3)}>
          Phương Tiện
        </b>
        <div className='UnselectedHead'></div>
      </div>
    )
  }

  useEffect(() => {
    prepareCanvas();
  }, []);
  const enableMcp = ( index ) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = mcpImg;
    image.onload = () => {
      context.drawImage(image, mcpList[index]["x"], mcpList[index]["y"], 60, 50);
    }
    console.log(index);
  }

  const mapContent = () => {
   

    return (
      <Fragment>
        {/* month navigator */}
        <div className="MonthControl">
          <img 
            className='MonthArrowBack' src={backArrow} 
            alt='month arrow 1' 
            onClick={() => {if(selectedMap > 1) setSelectedMap(selectedMap - 1)}}
          >
          </img>
          <b>Khu vực {selectedMap}</b>
          <img 
            className='MonthArrowForward' src={backArrow} 
            alt='month arrow 2' 
            onClick={() => {setSelectedMap(selectedMap + 1)}}
          >
          </img>
        </div>
        {/* canvas of the chosen map */}
        <div className="ChosenMap">
          <canvas
            onMouseDown={onDraw === true ? startDrawing : (onPlaceMcp === true ? placeMcp : null)}
            onMouseUp={onDraw === true ? finishDrawing : (onPlaceMcp === true ? (() => setOnPlaceMcp(false)) : null)}
            onMouseMove={draw}
            ref={canvasRef}
          />
          <div>
            <button
              className="MapButton"
              onClick={() => setOnDraw(!onDraw)}
            >
              {onDraw === false ? 'Vẽ' : 'Dừng vẽ'}
            </button>
            <button
              className="MapButton"
              onClick={() => {clearCanvas(); setSelectedMcp(Array(mcpList.length).fill(false))}}
            >
              Xóa
            </button>
          </div>
        </div>
      </Fragment>
    )
  }

  const sidebarContent = () => {
    return (
      <div className="AssignSidebar2">
        <h1>MCP</h1>
          <ul>
            {mcpList.map((item, index) => (
              <li 
                className={selectedMcp[index] === false ? 'SidebarList' : 'SidebarListActive'}
                key={item}
                onClick={() => {
                  selectedMcp[index] === false && enableMcp(index);
                  setSelectedMcp(() => selectedMcp.map((el, i) => i === index ? true : el));
                  setOnDraw(false);
                }}
              > 
                <b>{item["name"]}</b>
                {selectedMcp[index] === true && <div className="Checkmark"></div>}
              </li>
            ))}
            <li 
              className="SidebarList"
              onClick={() => {
                //onPlaceMcp === true ? null : setOnPlaceMcp(true);
                if(onPlaceMcp === false) {
                  setOnPlaceMcp(true);
                }
                setOnDraw(false);
              }}
            >
              <b>+ Add a MCP</b>
            </li>
          </ul>
        <button className='AssignmentButtonBack' onClick={() => setState(1)}>
          <b>Trở lại</b>
        </button>
        <button className='AssignmentButtonForward' onClick={() => setState(3)}>
          <b>Tiếp tục</b>
        </button>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="TheMap">
        {assignmentStepContent()}
        {mapContent()}
      </div>
      {sidebarContent()}
    </Fragment>
  );
}