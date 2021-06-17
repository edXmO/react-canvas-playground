import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Brush = styled.button`
    display: flex;
    width: 150px;
    height: 60px;
    align-items: center;
    justify-content: center;
    background: ${props => props.selected ? "violet" : "royalblue"};
`
const BrushLabel = styled.p`
    flex: 1;
    text-align: center;
    font-size: 16;
    color: ${props => props.selected ? "royalblue" : "white"};
`
const BrushImage = styled.img`
    resize-mode: contain,
    aspect-ratio: 4 / 3,
    width: 100%,
    height: 100%
`
const MockBrushImg = styled.div`
    heigth: 40,
    width: 40,
    border-radius: 50%;
    background-color: white;
`


const BrushItem = ({type, label, selected}) => {
    return (
        <Brush>
            <MockBrushImg />
            {/* <BrushImage alt="No image yet"/> */}
            <BrushLabel>{label}</BrushLabel>
        </Brush>
    )
}

export default BrushItem;

Brush.propTypes = {
    type: PropTypes.number,
    label: PropTypes.string,
    selected: PropTypes.bool
}


