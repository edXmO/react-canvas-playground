import { useState } from "react";

const useBrush = () => {

    const [brushType, setBrushType ] = useState({ 
        lineCap: "round", // posibles valores: butt / round / square
        strokeStyle: "black",
        lineWidth: 1 
    });
    const [isDrawing, setIsDrawing ] = useState(false);
    const [canvasContext, setCanvasContext] = useState(null);

    const startDrawing = ({nativeEvent}) => {
        const { clientX, clientY } = nativeEvent;

        canvasContext.lineCap = brushType.lineCap;
        canvasContext.strokeStyle = brushType.strokeStyle;
        canvasContext.lineWidth = brushType.lineWidth;
        canvasContext.beginPath();
        canvasContext.moveTo(clientX, clientY);
        setIsDrawing(true);
    }

    const stopDrawing = () => {
        setIsDrawing(false);
        canvasContext.closePath();
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return;
        }
        const { clientX, clientY } = nativeEvent;
        canvasContext.lineTo(clientX, clientY);
        canvasContext.stroke(); 
    }

    return {
        startDrawing, 
        stopDrawing,
        draw,
        setBrushType,
        setCanvasContext
    }
}

export default useBrush;