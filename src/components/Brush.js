import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Brush = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${selected ? "white" : "royalblue"};
`
const BrushLabel = styled.p`
    flex: 1;
    text-align: center;
    font-size: 16;
    color: ${selected ? "royalblue" : "white"};
`
const BrushImage = styled.img`
    resize-mode: contain,
    aspect-ratio: 4 / 3,
    width: 100%,
    height: 100%
`

const BrushButton = ({type, label, selected}) => {
    return (
        <Brush>
            <BrushImage alt="No image yet"/>
            <BrushLabel>{label}</BrushLabel>
        </Brush>
    )
}

export default Brush;

Brush.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.bool
}


