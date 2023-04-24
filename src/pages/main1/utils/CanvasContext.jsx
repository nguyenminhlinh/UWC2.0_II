import React, { useContext, useRef, useState } from "react";
import map from '../assets/retro_map.png';
import mcp from '../assets/mcp.png';

// enabling drawing on the blank canvas
const CanvasContext = React.createContext();
const mcpList = [
  {
    "x": 165,
    "y": 162,
  },
  {
    "x": 279,
    "y": 367,
  },
  {
    "x": 475,
    "y": 107,
  },
  {
    "x": 539,
    "y": 358,
  },
  {
    "x": 708,
    "y": 47,
  }
]

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  //defining width & height of the canvas
  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.65;
    canvas.height = window.innerHeight * 0.65;

    const context = canvas.getContext("2d");
    // draw the map
    const image1 = new Image();
    image1.src = map;
    image1.onload = () => {
      context.drawImage(image1, 0, 0, canvas.width, canvas.height);
    };
    
    // defining the thickness and colour of our brush
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    contextRef.current = context;

    // draw the prior mcps
    // const image2 = new Image();
    // image2.src = mcp;
    // image2.onload = () => {
    //   mcpList.map((item, index) => {
    //     if(index < 3) {
    //       context.drawImage(image2, item["x"], item["y"], 60, 50);
    //     }
    //   })
    // };
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  //once the canvas is cleared it return to the default colour
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = map;
    image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  };

  // place an image onclick at onclick event
  const placeMcp = ({ nativeEvent }) => {
    const { offsetX,offsetY } = nativeEvent;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = mcp;
    image.onload = () => {
      context.drawImage(image, offsetX - 15, offsetY - 50, 60, 50);
    }
  }

  const enableMcp = ({ index }) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = mcp;
    image.onload = () => {
      context.drawImage(image, mcpList[index]["x"], mcpList[index]["y"], 60, 50);
    }
    console.log(index);
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        placeMcp
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);