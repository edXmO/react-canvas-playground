import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import useBrush from "../hooks/useBrush";

const Canvas = styled.canvas`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: white;
    margin: 0 10 0 10;
`

const CanvasContainer  = () => {

    const { startDrawing, stopDrawing , draw, setCanvasContext } = useBrush();
    const [canvasSize, setCanvasSize] = useState({width: 800, height: 500})
    
    const canvasRef = useRef(null);

    useEffect(() => {

        // window.addEventListener('resize', (e) => {
        //     const { innerWidth, innerHeight } = e.target;
        //     setCanvasSize({width: document.body.clientWidth, height: 500});
        // })

        setCanvasContext(canvasRef.current.getContext('2d'))
    }, []);

    return <Canvas
                width={canvasSize.width}
                height={canvasSize.height}
                onMouseDown={startDrawing} 
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                ref={canvasRef} 
            />
}

export default CanvasContainer;

