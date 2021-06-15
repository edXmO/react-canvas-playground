import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import useBrush from "../hooks/useBrush";

const Canvas = styled.canvas`
    width: 1200px;
    height: 400px;
    background: white
`

const CanvasContainer  = () => {

    const { startDrawing, stopDrawing , draw, setCanvasContext } = useBrush();
    
    const canvasRef = useRef(null);

    useEffect(() => {
        setCanvasContext(canvasRef.current.getContext('2d'))
    }, []);

    return <Canvas 
                onMouseDown={startDrawing} 
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                ref={canvasRef} 
            />
}


export default CanvasContainer;

