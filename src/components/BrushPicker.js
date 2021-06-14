import React from "react";

const BrushPicker = ({types}) => {
    
    return {types.map(brush => <Brush />)}
}