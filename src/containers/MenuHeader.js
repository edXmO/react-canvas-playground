import React from "react";
import styled from "styled-components";

// Components
import BrushPicker from "../components/BrushPicker";
import Collapsible from "../components/Collapsible";

const Header = styled.div`
    background-color: white;
`

const MenuHeader = () => {
    return (
        <Header>
            <Collapsible label={"Brushes"}>
                <BrushPicker />
            </Collapsible>
        </Header>
    )
}

export default MenuHeader;