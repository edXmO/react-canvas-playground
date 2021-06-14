import React from "react";
import styled from 'styled-components';

const Canvas = styled.canvas`
    width: 1200px;
    height: 400px;
    background: white
`

const CanvasContainer  = () => {

    const canvRef = useRef(null);

    

    return <Canvas id="canvas" ref={canvasRef} />
}


export default CanvasContainer;

