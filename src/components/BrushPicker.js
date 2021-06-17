import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";


// Components
import BrushItem from "./Brush";

const BrushesList = styled.ul`
    display: flex;
    flex-direction: column;
`

const mockBrushes = [
    {type: "0", label: "Lapiz", selected: true},
    {type: "1", label: "Brocha", selected: false},
    {type: "2", label: "Estilografica", selected: false},
    {type: "3", label: "Rotulador", selected: false},
]

const BrushPicker = ({brushes = mockBrushes}) => {
    return <BrushesList>
                {brushes.map((brush, idx) => 
                <BrushItem 
                    key={idx} 
                    label={brush.label} 
                    type={brush.type} 
                    selected={brush.selected} 
                />)}
            </BrushesList>
}

export default BrushPicker;

BrushPicker.propTypes = {
    brushes: PropTypes.array
}