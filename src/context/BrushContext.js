import React from "react";

const BrushContext = React.createContext({
    type: "",
    shape: "",
    size: 0,
    color: "",
    setBrush: () => {}
})

export default BrushContext;